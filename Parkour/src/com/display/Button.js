/**
 * Created by Administrator on 2015/12/8.
 */
import Container from "../display/Container";
import MouseEvent from "../events/MouseEvent";
import BaseInfo from "../infos/BaseInfo";

const _initEvent = Symbol('_initEvent');
const _removeEvent = Symbol('_removeEvent');
const _onMouseEventHandler = Symbol('_onMouseEventHandler');

class Button extends Container {
    constructor(skin, w, h, x, y, type) {
        super();
        this._types = [];
        this._status = 0;
        this.width = w;
        this.height = h;
        this.setSkin(skin, x,  y, type);

        this[_initEvent]();
    }
    // 公有方法
    display() {
        this[_removeEvent]();
        super.dispose();
    }
    setSkin(skin, x, y, type) {
        this._skin = BaseInfo.imageUrl + skin;
        this._div.style.background = "url(" + this._skin + ") "+(-x)+"px "+(-y)+"px no-repeat";

        switch (type){
            case 1:
                this._types = [
                    {"background-position":(-x)+"px "+(-y)+"px"},
                    {"background-position":(-x)+"px "+(-y-this._height)+"px"},
                    {"background-position":(-x)+"px "+(-y-this._height)+"px"}
                ];
                break;
            case 2:
                this._types = [
                    {"background-position":(-x)+"px "+(-y)+"px"},
                    {"background-position":(-x)+"px "+(-y-this._height)+"px"},
                    {"background-position":(-x)+"px "+(-y-this._height*2)+"px"}
                ];
                break;
            case 3:
                this._types = [
                    {"scale":1},
                    {"scale":1.1},
                    {"scale":1.05}
                ];
                break;
            default:
                this._types = [{}, {}, {}];
                break;
        }
        this.status = this._status;
    }
    set status (value) {
        this._status = value;
        let typeObj = this._types[this._status];
        for (let prop in typeObj){
            if(this._div.style.hasOwnProperty(prop))
            {
                this._div.style[prop] = typeObj[prop];
            }else if(this.hasOwnProperty(prop))
            {
                switch(prop){
                    case "scale":
                        let tmpW = this._width*Math.cos(this._rotation)+this._height*Math.sin(this._rotation);
                        let tmpH = this._width*Math.sin(this._rotation)+this._height*Math.cos(this._rotation);
                        this.setLocation(this._x+(this._scale-typeObj[prop])*tmpW*.5, this._y+(this._scale-typeObj[prop])*tmpH*.5);
                        break;
                }
                this[prop] = typeObj[prop];
            }
        }
    }

    // 私有方法
    [_initEvent]() {
        this.addEventListener(MouseEvent.MOUSE_OVER, this[_onMouseEventHandler], this);
        this.addEventListener(MouseEvent.MOUSE_OUT, this[_onMouseEventHandler], this);
        this.addEventListener(MouseEvent.MOUSE_DOWN, this[_onMouseEventHandler], this);
        this.addEventListener(MouseEvent.MOUSE_UP, this[_onMouseEventHandler], this);
    }
    [_removeEvent]() {
        this.removeEventListener(MouseEvent.MOUSE_OVER, this[_onMouseEventHandler]);
        this.removeEventListener(MouseEvent.MOUSE_OUT, this[_onMouseEventHandler]);
        this.removeEventListener(MouseEvent.MOUSE_DOWN, this[_onMouseEventHandler]);
        this.removeEventListener(MouseEvent.MOUSE_UP, this[_onMouseEventHandler]);
    }
    [_onMouseEventHandler](evt) {
        switch (evt.type){
            case MouseEvent.MOUSE_OUT:
                this.status = 0;
                this._div.style.cursor = "none";
                break;
            case MouseEvent.MOUSE_OVER:
                this._div.style.cursor = "pointer";
            case MouseEvent.MOUSE_UP:
                this.status = 1;
                break;
            case MouseEvent.MOUSE_DOWN:
                this.status = 2;
                break;
        }
    }
}

// 静态属性
Button.NONE = 0;
Button.DOUBLE = 1;
Button.THREE = 2;
Button.SCALE = 3;

export default Button;