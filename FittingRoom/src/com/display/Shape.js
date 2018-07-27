import DisplayObject from "./DisplayObject";
import Graphics from "./Graphics";

class Shape extends DisplayObject {
    constructor(){
        super();
        this._graphics = new Graphics();
    }
    draw(ctx){
        this._graphics.draw(ctx);
    }
    dispose() {
        this._graphics = null;
        super.dispose();
    }

    get graphics(){
        return this._graphics;
    }
}

export default Shape;