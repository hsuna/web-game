/**
 * Created by Administrator on 2015/12/8.
 */
import Container from "../display/Container";
import Image from "../display/Image";

import StartView from "./view/StartView";
import GameView from "./view/GameView";
import OverView from "./view/OverView";

const _initView = Symbol('_initView');
const _removeView = Symbol('_removeView');

class MainView extends Container {
    constructor() {
        super();
        this._type = -1;
        this[_initView]();
    }
    dispose() {
        this[_removeView]();
        super.dispose();
    }
    get gameView(){
        return this._gameView;
    }
    get overView(){
        return this._overView;
    }
    get mapView(){
        return this._gameView.mapView;
    }
    get playerItem(){
        return this._gameView.playerItem;
    }
    get startBtn(){
        return this._startView.startBtn;
    }
    get replayBtn(){
        return this._overView.replayBtn;
    }
    get moreBtn(){
        return this._overView.moreBtn;
    }
    get viewType(){
        return this._type;
    }
    set viewType(type){
        if(type == this._type) return;
        let list = [this._startView, this._gameView, this._overView];
        for(let i=list.length-1; i>=0; i--){
            list[i].visible = (list[i].type == type) ? true : false;
        }
        this._bgImg.setSkinPosition(type*420, 0);
        this._type = type;
    }

    [_initView]() {
        this._bgImg = new Image("img_bg.jpg", 0, 0, 420, 500);
        this.addChild(this._bgImg);

        this._startView = new StartView();
        this.addChild(this._startView);

        this._gameView = new GameView();
        this.addChild(this._gameView);

        this._overView = new OverView();
        this.addChild(this._overView);
    }

    [_removeView](){
    }
}

MainView.START = 0;
MainView.GAME = 1;
MainView.OVER = 2;

export default MainView;