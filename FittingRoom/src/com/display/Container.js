import DisplayObject from "./DisplayObject";

class Container extends DisplayObject {
    constructor(){
        super();
        this._children = [];
    }
    addChild(child){
        this.addChildAt(child, this.numChildren);
    }
    addChildAt(child, index){
        this._children.splice(index, 1, child);
        child.parent = this;
    }
    removeChild(child){
        let index = this._children.indexOf(child);
        return this.removeChildAt(index);
    }
    removeChildAt(index){
        let child = this._children.splice(index, 1)[0];
        child.parent = null;
        return child;
    }
    removeFromParent(dispose) {
        dispose = dispose||false;
        if (this._parent) this._parent.removeChild(this);
        if (dispose) this.dispose();
    };
    draw(ctx) {
        let child;
        for(let i= 0, len=this._children.length; i<len; i++)
        {
            let child = this._children[i];
            ctx.save();
            if(child){
                ctx.translate(child.x, child.y);
                if(child.mask){
                    ctx.save();
                    ctx.globalAlpha=0;
                    ctx.lineWidth=1;
                    ctx.beginPath();
                    ctx.rect(child.mask.stageX-child.stageX,  child.mask.stageY-child.stageY,  child.mask.width, child.mask.height);
                    ctx.stroke();
                    ctx.clip();
                    ctx.globalAlpha=1;
                    child.draw(ctx);
                    ctx.restore();
                }else
                    child.draw(ctx);
            }
            ctx.restore();
        }
    }
    dispose(){
        let child;
        let childs = this._children;
        while(childs && childs.length>0)
        {
            child = childs[0];
            child && child.dispose();
        }
        this.removeFromParent();
    }
    get numChildren() {
        return this._children.length;
    }
}

export default Container;
