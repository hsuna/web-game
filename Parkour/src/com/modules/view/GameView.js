/**
 * Created by Administrator on 2015/12/21.
 */
import Container from "../../display/Container";
import Image from "../../display/Image";
import Text from "../../display/Text";

import PlayerItem from "../item/PlayerItem";

import MapView from "./MapView";

import MainView from "../MainView";


const _initView = Symbol('_initView');
const _removeView = Symbol('_removeView');

class GameView extends Container{
    constructor() {
        super();
        this[_initView]();
    }
    dispose() {
        this[_removeView]();
        super.dispose();
    }
    showOrHideTips(bol){
        this._tips.visible = bol;
        this._scoreTxt.visible = !bol;
    }
    setScoreTxt(value){
        this._scoreTxt.text = "当前分数为："+value;
    }

    get type(){
        return MainView.GAME;
    }
    get mapView(){
        return this._mapView;
    }
    get playerItem(){
        return this._playerItem;
    }

    [_initView]() {
        this._mapView = new MapView();
        this.addChild(this._mapView);

        this._playerItem = new PlayerItem();
        this.addChild(this._playerItem);
        this._playerItem.setLocation(100, 330);

        this._scoreTxt = new Text();
        this.addChild(this._scoreTxt);
        this._scoreTxt.width = 400;
        this._scoreTxt.height = 30;
        this._scoreTxt.setLocation(20, 20);

        this._tips = new Image("img_tips.png", 0, 0, 245, 112);
        this.addChild(this._tips);
        this._tips.setLocation(83, 113);
    }

    [_removeView](){
    }
}

export default GameView;