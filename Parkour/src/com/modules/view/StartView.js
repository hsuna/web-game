/**
 * Created by Administrator on 2015/12/21.
 */
import Button from "../../display/Button";
import Container from "../../display/Container";

import MainView from "../MainView";

const _initView = Symbol('_initView');
const _removeView = Symbol('_removeView');

class StartView extends Container{
    constructor() {
        super();
        this[_initView]();
    }
    dispose() {
        this[_removeView]();
        super.dispose();
    }

    get type() {
        return MainView.START;
    }
    get startBtn(){
        return this._startBtn;
    }

    [_initView]() {
        this._startBtn = new Button("img_btn.png", 173, 76, 0, 0, Button.SCALE);
        this.addChild(this._startBtn);
        this._startBtn.setLocation(127, 383);
    }

    [_removeView](){
    }
}

export default StartView;