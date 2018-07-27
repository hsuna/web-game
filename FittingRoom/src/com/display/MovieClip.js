import Bitmap from "./Bitmap";

class MovieClip extends Bitmap {
    constructor(skin){
        super(skin);
        this._curFrame = 0;
        this._animatInfo = null;
    }
    draw(ctx) {
        if(this._animatInfo){
            let frame;
            let frames = this._animatInfo.frames;
            for(let i= 0, len=frames.length; i<len; i++){
                frame = frames[i];
                if(this._curFrame < frame.frame) break;
            }
            if(frame)
            {
                for(let attr in frame.attrs){
                    this[attr] = frame.attrs[attr];
                }
            }
            if(this._curFrame+1<this._animatInfo.tolFrame) this._curFrame++;
            else this._curFrame=0;
        }
        super.draw(ctx);
    }
    addAnimat(info) {
        this._animatInfo = info;
        this._curFrame = 0;
    }
    removeAnimat(info) {
        this._animatInfo = null;
    }
    dispose() {
        this._animatInfo = null;
        super.dispose();
    }
}

export default MovieClip;