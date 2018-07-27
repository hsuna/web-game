/**
 * Created by Administrator on 2015/12/21.
 */
import Container from "../../display/Container";
import Image from "../../display/Image";
import Point from "../../geom/Point";
import Rectangle from "../../geom/Rectangle";

const _initView = Symbol('_initView');

class MapItem extends Container {
    constructor(w, h) {
        super();
        this.width = Math.ceil(w);
        this.height = Math.ceil(h);
        this[_initView]();
    }
    updateSize(w, h) {
        w = Math.ceil(w), h = Math.ceil(h);
        this.width = w;
        this.height = h;
        this._headImg.width = w;
        this._bodyImg.width = w;
        this._bodyImg.height = h-30;
    }
    hitTestPoint(x, y){
        let pot = this.getSize();
        let rect = new Rectangle(Math.min(0, pot.x), Math.min(0, pot.y),  Math.abs(pot.x), Math.abs(pot.y));
        return  rect.contains(x,  y);
    }
    getSize(){
        let rad = this._rotation*(Math.PI/180);
        return new Point(
            (Math.cos(rad)*this._width*this._scale+Math.sin(rad)*this._height*this._scale),
            (Math.sin(rad)*this._width*this._scale+Math.cos(rad)*this._height*this._scale)
        );
    }

    [_initView]() {
        this._headImg = new Image("img_obshead.jpg", 0, 0, this._width, 30);
        this._headImg.setSkinRepeat("repeat-x");
        this._headImg.setLocation(0, 0);
        this.addChild(this._headImg);

        this._bodyImg = new Image("img_obsbody.jpg", 0, 30, this._width, this._height-30);
        this._bodyImg.setSkinRepeat("repeat");
        this._bodyImg.setLocation(0, 30);
        this.addChild(this._bodyImg);
    }
}

export default MapItem;