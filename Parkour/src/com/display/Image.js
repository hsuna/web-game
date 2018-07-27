/**
 * Created by Administrator on 2015/12/8.
 */
import Container from "../display/Container";
import BaseInfo from "../infos/BaseInfo";

class Image extends Container {
    constructor(skin, x, y, w, h) {
        super();
        this._skin = null;
        this.setSkin(skin,  x,  y);
        this.width = w;
        this.height = h;
    }
    setSkin(skin, x, y){
        this._skin = BaseInfo.imageUrl + skin;
        this._div.style.background = "url("+this._skin+") "+(-x)+"px "+(-y)+"px no-repeat";
    }
    setSkinPosition(x, y){
        this._div.style.backgroundPosition = (-x)+"px "+(-y)+"px";
    }
    setSkinRepeat(str){
        this._div.style.backgroundRepeat = str;
    }
}

export default Image;