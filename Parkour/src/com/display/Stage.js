/**
 * Created by Administrator on 2015/12/8.
 */
import Container from "./Container";

class Stage extends Container {
    constructor(id, w, h, fps) {
        super(document.getElementById(id));
        this.width = w;
        this.height = h;
        this.mask = true;
        this._div.oncontextmenu=new Function('event.returnValue=false;');
        this._div.onselectstart=new Function('event.returnValue=false;');
        //this._div.style = this._div.style||{};
        this._target = document;
        this._timeId = setInterval(this.render.bind(this), 1000/fps);
        this._fps = fps;
    }
    get fps() {
        return fps;
    }
}

export default Stage;