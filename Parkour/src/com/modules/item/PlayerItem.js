/**
 * Created by Administrator on 2015/12/21.
 */

import Container from "../../display/Container";
import MovieClip from "../../display/MovieClip";

const _initView = Symbol('_initView');

class PlayerItem extends Container {
    constructor() {
        super();
        this._start = -1;
        this[_initView]();
    }
    playOrStop(bol){
        bol?this._movie.gotoAndPlay(0): this._movie.gotoAndStop(0);
    }
    get status() {
        return this._start;
    }
    set status(value) {
        if(value == this._start) return;
        let frame = 0;
        switch(value){
            case PlayerItem.RUN:
                frame = 0;
                break;
            case PlayerItem.JUMP:
            case PlayerItem.DJUMP:
                frame = 20;
                break;
        }
        this._movie.gotoAndPlay(frame);
        this._start = value;
    }
    get width(){
        return 100*this._scale;
    }
    get height(){
        return 100*this._scale;
    }

    [_initView](){
        let that = this;
		this._movie = new MovieClip("img_player.png", [
            { x:0, y:0, w:60, h:100, time:2},
            { x:60, y:0, w:60, h:100, time:2},
            { x:120, y:0, w:60, h:100, time:2},
            { x:180, y:0, w:60, h:100, time:2},
            { x:240, y:0, w:60, h:100, time:2},
            { x:300, y:0, w:60, h:100, time:2},
            { x:360, y:0, w:60, h:100, time:2},
            { x:420, y:0, w:60, h:100, time:2},
            { x:480, y:0, w:60, h:100, time:2},
            { x:540, y:0, w:60, h:100, time:2},
            { x:600, y:0, w:60, h:100, time:2}
        ]);
        this._movie.addFrameScript(19, function(){that._movie.gotoAndPlay(0);});
        this._movie.addFrameScript(21, function(){that._movie.gotoAndPlay(20);});
		
        this.addChild(this._movie);
        this.scale = .75;
        this._movie.setLocation(-this._movie.width *.5, -this._movie.height *.5);
        this.status = PlayerItem.RUN;
    }
}

PlayerItem.RUN = 0;
PlayerItem.JUMP = 1;
PlayerItem.DJUMP = 2;

export default PlayerItem;