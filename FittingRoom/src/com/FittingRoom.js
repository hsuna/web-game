import AssetsManager from "./managers/AssetsManager";
import StageInfo from "./infos/StageInfo";
import MainView from "./modules/MainView";
import Stage from "./display/Stage";

class FittingRoom {
    constructor(id, w, h, color, assets) {
        AssetsManager.getInstance().assert = assets || "";

        StageInfo.stage = new Stage(id,  w,  h,  color);
        StageInfo.id = id;
        StageInfo.stageWidth = w;
        StageInfo.stageHeight = h;
        StageInfo.stage.startTick(50);

        this._view = new MainView();
        StageInfo.stage.addChild(this._view);
    }
    setPhotoByIndex(...arg){
        this._view.setPhotoByIndex(...arg);
    }
    openOrClose(...arg){
        this._view.openOrClose(...arg);
    }
}

export default FittingRoom;