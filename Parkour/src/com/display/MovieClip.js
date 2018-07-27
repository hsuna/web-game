/**
 * Created by Administrator on 2015/12/8.
 */
import BaseInfo from "../infos/BaseInfo";
import Container from "./Container";

import Event from "../events/Event";

const _initEvent = Symbol('_initEvent');
const _removeEvent = Symbol('_removeEvent');
const _onEventFrameHandler = Symbol('_onEventFrameHandler');
const _updateMovie = Symbol('_updateMovie');
const _analysisInfo = Symbol('_analysisInfo');

class MovieClip extends Container {
    constructor(skin, infos) {
        super();
        this._skin = BaseInfo.imageUrl + skin;
        this._movieInfo = this[_analysisInfo](infos);
        this._isPlaying = true;
        this._currentFrame = 0;
        this._totalFrames = this._movieInfo.length-1;
        this._frameScript = [];
        this[_updateMovie]();
        this[_initEvent]();
    }
    display () {
        this[_removeEvent]();
        super.display();
    }
    play(){
        this._isPlaying = true;
    }
    stop(){
        this._isPlaying = false;
    }
    gotoAndPlay(frame){
        this._currentFrame = frame;
        this.play();
    }
    gotoAndStop(frame){
        this.stop();
        this._currentFrame = frame;
        this[_updateMovie]();
    }
    addFrameScript(frame, fun){
        this._frameScript[frame] = fun;
    }

    // 私有方法
    [_initEvent](){
        this.addEventListener(Event.ENTER_FRAME, this[_onEventFrameHandler], this);
    }
    [_removeEvent](){
        this.removeEventListener(Event.ENTER_FRAME, this[_onEventFrameHandler]);
    }
    [_onEventFrameHandler](evt){
        if(!this._isPlaying) return;

        this[_updateMovie]();
        let fun = this._frameScript[this._currentFrame];
        if(this._currentFrame<=this._totalFrames) this._currentFrame++;
        else this._currentFrame = 0;
        fun&&fun.call();
    }
    [_updateMovie](){
        let info = this._movieInfo[this._currentFrame];
        if(info){
            this.width = info.w;
            this.height = info.h;
            this._div.style.background = "url(" + this._skin + ") "+(-info.x)+"px "+(-info.y)+"px no-repeat";
        }
    }
    [_analysisInfo](infos){
        let info;
        let movieInfo = [];
        for(let i=0; i<infos.length; i++){
            info = infos[i];
            if(info.time){
                for(let j=0; j<info.time; j++){
                    movieInfo.push(0==j?info:null);
                }
            }else
                movieInfo.push(info);
        }
        return movieInfo;
    }
}

export default MovieClip;