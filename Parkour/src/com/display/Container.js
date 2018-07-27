/**
 * Created by Administrator on 2015/12/8.
 */
import Dispatcher from "../events/Dispatcher";

import Point from "../geom/Point";

import BaseInfo from "../infos/BaseInfo";

import Event from "../events/Event";

//全局数据
let c_instance = 0;

//私有方法

class Container extends Dispatcher {
    constructor(target) {
        let div = target;
        if(!div){
            div =  document.createElement("div");
            div.id = BaseInfo.name+"_instance_"+(++c_instance);
        }

        super(div);
        this._div = div;
        this.parent = null;
        this._children = [];
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._scale = 1;
        this._rotation = 0;
        this._alpha = 1;
        this._visible = true;
        this._div.style.position = "absolute";
       
    }

    render() {
        if(this.hasEventListener(Event.ENTER_FRAME))
        {
            let evt = {
                type:Event.ENTER_FRAME,
                currentTarget:this,
                target:this
            }
            this._target["on"+Event.ENTER_FRAME].call(this, evt);
        }
        let child;
        let childs = this._children;
        for(let i=childs.length-1; i>=0; i--){
            child = childs[i];
            child && child.render();
        }
    }
    addChild(child) {
        this.addChildAt(child, this.numChildren);
    }
    addChildAt(child, index) {
        let tchild = this._children[index];
        this._children.splice(index, 0, child);
        if(tchild) this._div.insertBefore(child.div, tchild.div);
        else this._div.appendChild(child.div);
        child.parent = this;
    }
    removeChild(child) {
        let index = this._children.indexOf(child);
        if(-1!=index) this.removeChildAt(index);
    }
    removeChildAt(index) {
        let child = this._children.splice(index, 1)[0];
        this._div.removeChild(child.div);
        child.parent = null;
    }
    getChildAt(index) {
        let child = this._children[index];
        return child;
    }
    removeFormeParent() {
        if(this.parent) this.parent.removeChild(this);
    }
    dispose() {
        let child;
        let childs = this._children;
        while(childs&&childs.length>0)
        {
            child = childs[0];
            child&&child.dispose();
            child = null;
        }
        this.removeFormeParent();
    }
    setLocation(valx=0, valy=0){
        this.x = valx;
        this.y = valy;
    }
    localToGlobal(pot){
        let target = this;
        let tmp = pot.clone();
        while(target){
            tmp.x += target.x;
            tmp.y += target.y;
            target = target.parent;
        }
        return tmp;
    }
    globalToLocal(pot){
        let tmp = this.localToGlobal(new Point(-pot.x, -pot.y));
        tmp.x = -tmp.x;
        tmp.y = -tmp.y;
        return tmp;
    }
    updateTransform(){
        let props = ["webkitTransform", "mozTransform", "msTransform", "oTransform", "Transform"];
        for(let i=0; i<props.length; i++){
            if(this._div.style.hasOwnProperty(props[i])) {
                this._div.style[props[i]] = "rotate("+ this._rotation +"deg) scale("+ this._scale +")";
                this._div.style[props[i]+"Origin"] = "top left";
                return;
            }
        }
        this._div.style.zoom = this._scale;
        this._rotation = 0;
    }
    get div() {
        return this._div;
    }
    get id() {
        return this._div.id;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
        this._div.style.left = value+"px";
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
        this._div.style.top = value+"px";
    }
    get width(){
        return this._width;
    }
    set width(value){
        this._width = value;
        this._div.style.width = value +"px";
    }
    get height(){
        return this._height;
    }
    set height(value){
        this._height = value;
        this._div.style.height = value +"px";
    }
    get scale() {
        return this._scale;
    }
    set scale(value) {
        this._scale = value;
        this.updateTransform();
    }
    get rotation() {
        return this._rotation;
    }
    set rotation(value){
        this._rotation = value;
        this.updateTransform();
    }
    get alpha() {
        return this._alpha;
    }
    set alpha(value) {
        this._alpha = value;
        if(this._div.filters){
            this._div.style.filter="alpha(opacity="+(value*100)+")";
        }else{
            this._div.style.opacity=value;
        }
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
        this._div.style.display = value?"":"none";
    }
    get numChildren() {
        return this._children.length;
    }
    set mask(value) {
        this._div.style.overflow = value?"hidden":"visible";
    }
    get children() {
        return this._children.concat();
    }
}

export default Container;