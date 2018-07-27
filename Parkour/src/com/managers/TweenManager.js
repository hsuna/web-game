/**
 * Created by Administrator on 2015/12/8.
 */
import StageInfo from "../infos/StageInfo";
import Event from "../events/Event";

//单例
const __single = Symbol('single');

//私有方法
const _checkHandlerToAddOrRemove = Symbol('_checkHandlerToAddOrRemove');
const _onEnterFrameHandler = Symbol('_onEnterFrameHandler');

class TweenManager {
    constructor(single){
		if(single != __single){
			throw new Error('Singleton is a singleton.');
		}
        this._instance = null;
        
        this._tweenList = [];
        this._hasHandler = false;
    }
    addTween(target, frame, prop) {
        let tween = {};
        tween.target = target;
        tween.curFrame = 0;
        tween.tolFrame = frame;
        tween.props = prop;
        this._tweenList.push(tween);
        this[_checkHandlerToAddOrRemove]();
    }
    removeTween(target, complete) {
        let zTween;
        let zIndex = -1;
        let zLen = this._tweenList.length;
        for(let i=0; i<zLen; i++){
            zTween = this._tweenList[i];
            if(target == zTween.target){
                zIndex = i;
                break;
            }
        }
        if(-1 != zIndex){
            let zTween = this._tweenList[zIndex];
            if(complete){
                let zItem = zTween.target;
                for(let prop in zTween.props){
                    zItem.hasOwnProperty(prop)&&(zItem[prop] = zTween.props[prop]);
                }
            }
            this._tweenList.splice(zIndex, 1);
        }
        this[_checkHandlerToAddOrRemove]();
    }
    static getInstance(){
		return this._instance || (this._instance = new TweenManager(__single))
	}

    [_checkHandlerToAddOrRemove]() {
        if(this._tweenList.length > 0){
            if(!this._hasHandler){
                this._hasHandler = true;
                StageInfo.stage.addEventListener(Event.ENTER_FRAME, this[_onEnterFrameHandler]);
            }
        }else{
            this._hasHandler = false;0
            StageInfo.stage.removeEventListener(Event.ENTER_FRAME, this[_onEnterFrameHandler]);
        }

    }
    [_onEnterFrameHandler](evt) {
        let zTween;
        let zItem;
        let zProps;
        let zLen = this._tweenList.length;
        for(let i=zLen-1; i>=0; i--){
            zTween = this._tweenList[i];
            zItem = zTween.target;
            zProps = zTween.props;
            for(let prop in zProps){
                if(zItem.hasOwnProperty(prop) && zProps[prop] != zItem[prop]){
                    zItem[prop] = zItem[prop] + (zProps[prop]-zItem[prop])/(zTween.tolFrame-zTween.curFrame);
                }
                //if("scale"==prop)console.log("item->"+zItem+"  scale->"+zItem.get_scale());
            }
            zTween.curFrame++;
            if(zTween.curFrame == zTween.tolFrame){
                if(zProps["onComplete"]){
                    (zProps["onComplete"]).apply(this, zProps["onCompleteParams"]);
                }
                TweenManager.getInstance().removeTween(zItem, true);
            }
        }
    }
}

export default TweenManager;