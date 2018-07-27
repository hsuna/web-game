/**
 * Created by Administrator on 2015/12/21.
 */
import Button from "../../display/Button";
import Container from "../../display/Container";
import Text from "../../display/Text";

import MainView from "../MainView";

const _initView = Symbol('_initView');
const _removeView = Symbol('_removeView');

class OverView extends Container{
    constructor() {
        super();
        this[_initView]();
    }
    dispose() {
        this[_removeView]();
        super.dispose();
    }
    setScoreTxt(value){
        this._scoreTxt.text = "你获得的分数为："+value;
    }

    get type() {
        return MainView.OVER;
    }
    get replayBtn(){
        return this._replayBtn;
    }
    get moreBtn(){
        return this._moreBtn;
    }  

    [_initView]() {
        this._replayBtn = new Button("img_btn.png", 143, 64, 0, 76, Button.SCALE);
        this.addChild(this._replayBtn);
        this._replayBtn.setLocation(56, 370);

        this._moreBtn = new Button("img_btn.png", 143, 64, 0, 140, Button.SCALE);
        this.addChild(this._moreBtn);
        this._moreBtn.setLocation(225, 370);

        this._scoreTxt = new Text();
        this.addChild(this._scoreTxt);
        this._scoreTxt.setLocation(120, 200);
        this._scoreTxt.width = 300;
        this._scoreTxt.height = 40;
    }

    [_removeView](){
    }
}

export default OverView;