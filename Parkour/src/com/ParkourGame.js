/**
 * Created by Administrator on 2015/12/8.
 */
import Stage from "./display/Stage";

import BaseInfo from "./infos/BaseInfo";
import StageInfo from "./infos/StageInfo";

import MainView from "./modules/MainView";
import MainControl from "./modules/MainControl";


class ParkourGame{
    constructor(id, assetsUrl, w , h, fps) {
        StageInfo.id = id;
        StageInfo.stage = new Stage(id, w,  h, fps);
    
        BaseInfo.assetsUrl = assetsUrl;
        BaseInfo.imageUrl = assetsUrl+"image/";
        BaseInfo.soundUrl = assetsUrl+"sound/";
    
        this._view = new MainView();
        StageInfo.stage.addChild(this._view);
        this._control = new MainControl(this._view);
    }
    get control(){
        return this._control;
    }
}

export default ParkourGame;