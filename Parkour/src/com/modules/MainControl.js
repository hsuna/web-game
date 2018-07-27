/**
 * Created by Administrator on 2015/12/8.
 */
import StageInfo from "../infos/StageInfo";

import Point from "../geom/Point";

import Event from "../events/Event";
import MouseEvent from "../events/MouseEvent";
import KeyEvent from "../events/KeyEvent";

import PlayerItem from "./item/PlayerItem";
import MainView from "./MainView";

const _initControl = Symbol('_initControl');
const _removeControl = Symbol('_removeControl');
const _initEvent = Symbol('_initEvent');
const _removeEvent = Symbol('_removeEvent');
const _onEnterFrameHandler = Symbol('_onEnterFrameHandler');
const _onKeyDownHandler = Symbol('_onKeyDownHandler');
const _onMouseClickHandler = Symbol('_onMouseClickHandler');
const _checkHit = Symbol('_checkHit');

class MainControl {
    constructor(view) {
        this._view = view;
        this._gameing = false;
        this[_initControl]();
        this[_initEvent]();
    }
    startGame(){
        if(this._gameing) return;
        this._gameing = true;
        this._gameView.showOrHideTips(false);
        this._playerItem.playOrStop(true);
    }
    resetGame(){
        this._frameNum = 0;
        this._speedY = 0;
        this._moveSpeed = 8;
        this._isRot = false;
        //this._pause  = false;
        this._playerItem.rotation = 0;
        this._playerItem.status = PlayerItem.RUN;
        this._playerItem.setLocation(100, 330);
        this._playerItem.playOrStop(false);
        this._gameView.showOrHideTips(true);
        this._view.viewType = MainView.GAME;
        this._view.mapView.initMap();
    }
    overGame(){
        this._gameing = false;
        this._overView.setScoreTxt(Math.floor(this._frameNum/this._moveSpeed));
        this._view.viewType = MainView.OVER;
    }
    dispose(){
        this[_removeEvent]();
        this[_removeControl]();
    }

    [_initControl](){
        this._startBtn = this._view.startBtn;
        this._replayBtn = this._view.replayBtn;
        this._moreBtn = this._view.moreBtn;
        this._playerItem = this._view.playerItem;
        this._mapView = this._view.mapView;
        this._gameView = this._view.gameView;
        this._overView = this._view.overView;

        this._view.viewType = MainView.START;
    }
    [_removeControl](){
        this._startBtn = null;
        this._replayBtn = null;
        this._moreBtn = null;
        this._playerItem = null;
        this._mapView = null;
        this._gameView = null;
        this._overView = null;
    }
    [_initEvent](){
        this._view.addEventListener(Event.ENTER_FRAME,  this[_onEnterFrameHandler], this);
        this._startBtn.addEventListener(MouseEvent.CLICK, this[_onMouseClickHandler], this);
        this._replayBtn.addEventListener(MouseEvent.CLICK, this[_onMouseClickHandler], this);
        this._moreBtn.addEventListener(MouseEvent.CLICK, this[_onMouseClickHandler], this);
        StageInfo.stage.addEventListener(KeyEvent.KEY_DOWN, this[_onKeyDownHandler], this);
    }
    [_removeEvent](){
        this._view.removeEventListener(Event.ENTER_FRAME,  this[_onEnterFrameHandler]);
        this._startBtn.removeEventListener(MouseEvent.CLICK, this[_onMouseClickHandler]);
        this._replayBtn.removeEventListener(MouseEvent.CLICK, this[_onMouseClickHandler]);
        this._moreBtn.removeEventListener(MouseEvent.CLICK, this[_onMouseClickHandler]);
        StageInfo.stage.removeEventListener(KeyEvent.KEY_DOWN, this[_onKeyDownHandler]);
    }
    [_onEnterFrameHandler](evt){
        //if(!this._pause) return;
        if(!this._gameing) return;
        //if(this._frameNum>25)return;//teset
        this._frameNum++;
        this._mapView.updataMap(this._moveSpeed);
        this._playerItem.y = this._playerItem.y+this._speedY;
        this._speedY++;
        this._gameView.setScoreTxt(Math.floor(this._frameNum*this._moveSpeed/50));
        let playerStatus = this._playerItem.status;
        if (PlayerItem.DJUMP == playerStatus && this._isRot == false)
        {
            this._playerItem.rotation = this._playerItem.rotation + 20;
            if (this._playerItem.rotation >= 180)
            {
                this._isRot = true;
                this._playerItem.rotation = 0;
            }
        }
        else if (PlayerItem.RUN==playerStatus)
        {
            this._playerItem.status = PlayerItem.RUN;
        }
        //return;
        this[_checkHit]();
        if(this._playerItem.x < -this._playerItem.width*.5 || this._playerItem.y > StageInfo.stage.height+this._playerItem.height*.5)
            this.overGame();
    }
    [_onKeyDownHandler](evt) {
        switch(evt.keyCode){
            case 32:
                if(MainView.GAME == this._view.viewType)
                    this.startGame();
                else
                    this.resetGame();
                //if(this._gameing) this._pause = !this._pause;
                break;
            case 38:
                if(!this._gameing) return;
                let playerStatus = this._playerItem.status;
                if(PlayerItem.DJUMP != playerStatus) {
                    this._playerItem.status = PlayerItem.RUN == playerStatus ? PlayerItem.JUMP : PlayerItem.DJUMP;
                    this._speedY = -11;
                }
                break;
        }
    }
    [_onMouseClickHandler](evt) {
        switch (evt.currentTarget||evt.srcElement){
            case this._startBtn.div:
            case this._replayBtn.div:
                this.resetGame();
                break;
            case this._moreBtn.div:
                console.log("this._view.moreBtn.div");
                break;
        }
    }
    [_checkHit]() {
        let i, len, item, items, itemPot, playPot;
        items = this._mapView.getMapItems();
        playPot = this._playerItem.localToGlobal(new Point());
        len = items.length;
        for(i=0; i<len; i++){
            item = items[i];
            itemPot = item.globalToLocal(playPot);
            if(item.hitTestPoint(itemPot.x+10, itemPot.y-20))
            {
                this._playerItem.y = this._playerItem.y-itemPot.y+Math.max(item.getSize().y, 0)+22;
                this._speedY = 0;
                this._playerItem.rotation = 0;
            }
            if(item.hitTestPoint(itemPot.x+10, itemPot.y+35))
            {
                this._playerItem.y = this._playerItem.y-itemPot.y-34;
                this._speedY = 0;
                this._playerItem.status = PlayerItem.RUN;
                this._isRot = false;
                this._playerItem.rotation = 0;
            }
            if (item.hitTestPoint(itemPot.x+27, itemPot.y))
            {
                this._playerItem.x = this._playerItem.x-this._moveSpeed;
            }
        }
    }
}

export default MainControl;