
const _runTween = Symbol('_runTween');

//单例
const __single = Symbol('single');

const TIME_DIFF = 10;

class TweenManager {
    constructor(single){
		if(single != __single){
			throw new Error('Singleton is a singleton.');
		}
        this._instance = null;
        
        this._target = {};
        this._tweenId = setInterval(_ => this[_runTween]() , TIME_DIFF);
    }
    addTween(target, time, attrs, completeHandler) {
        if(!target) return;
        var oldattrs={};
        for(var attr in attrs){oldattrs[attr] = target[attr];}
        this._target[target.id] = {
            target:target,
            curTime:0,
            time:time,
            attrs:attrs,
            oldattrs:oldattrs,
            completeHandler:completeHandler
        }
    }
    removeTween(target, isFinish) {
        let info = this._target[target.id];
        if(!info) return;
        if(isFinish){
            for(let attr in info.attrs){target[attr] = info.attrs[attr];}
        }
        delete this._target[target.id];
    }
    dispose() {
        clearInterval(this._tweenId);
    }

    [_runTween](){
        var remove = [];
        var target, info, ratio;
        for(var key in this._target) {
            info = this._target[key];
            target = info.target;
            info.curTime += TIME_DIFF;
            ratio = info.curTime/info.time;
            if(ratio >= 1) ratio = 1;
            for(var attr in info.attrs){
                target[attr] = (info.attrs[attr]-info.oldattrs[attr])*ratio+info.oldattrs[attr];
            }
            if(1==ratio){remove.push(info);}
        }
        for(var i=0, len=remove.length; i<len; i++) {
            info = remove[i];
            var completeCall = info.completeHandler;
            this.removeTween(info.target);
            completeCall&&completeCall.call();
        }
    }

    static getInstance(){
		return this._instance || (this._instance = new TweenManager(__single))
	}
}

export default TweenManager;