import Container from "./Container";

class Stage extends Container {
    constructor(id, width, height, backgroundcolor){
        super();
        this._canvasId = id;
        this._canvas = document.getElementById(this._canvasId);
        this._canvas.width =  width;
        this._canvas.height = height;
        this._canvas.style.backgroundColor = backgroundcolor;
        this._ctx2d = this._canvas.getContext("2d");
        this._tick = -1;
    }
    dispose() {
        this.stopTick();
        super.dispose();
    }
    clear() {
        if (!this._ctx2d) { return; }
        this._ctx2d.setTransform(1, 0, 0, 1, 0, 0);
        this._ctx2d.clearRect(0, 0, this._canvas.width+1, this._canvas.height+1);
    }
    startTick(value){
        if(-1 != this._tick) return;
        this._tick = setInterval(_ => {
            this.clear();
            this.draw(this._ctx2d);
        }, value);
    }
    stopTick(){
        if(-1 == this._tick) return;
        clearInterval(this._tick);
        this._tick = -1;
    }
    get canvasId() {
        return this._canvasId;
    }
    get canvas() {
        return this._canvas;
    }
    get ctx2d() {
        return this._ctx2d;
    }
}

export default Stage;