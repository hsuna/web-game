/**
 * Created by Administrator on 2015/12/8.
 */
import BaseInfo from "../infos/BaseInfo";
//单例
const __single = Symbol('single');

class SoundManager {
    constructor(single){
		if(single != __single){
			throw new Error('Singleton is a singleton.');
		}
        this._instance = null;
        
        this._div = document.createElement("div");
        this._isInit = false;
	}
    initManager(id) {
        if(this._isInit) return;
        let stageDiv =  document.getElementById(id);
        let parentDiv = stageDiv.parentElement;
        parentDiv.insertBefore(this._div, stageDiv);
        this._div.id = id+"_Sound";
        this._isInit = true;
    }
    playSound(name) {
        let id = BaseInfo.name+"_sound"+name;
        let player = document.getElementById(id);
        let src = BaseInfo.soundUrl+name+".mp3";
        if(navigator.userAgent.toLowerCase().indexOf("msie")>0) {// IE
            if(player){
                this._div.removeChild(player);
            }
            player = document.createElement('bgsound');
            player.id = id;
            player.src = src;
            player.setAttribute('autostart', 'true');
            this._div.appendChild(player);
        }else if(!player){// Other Chome Safari Oper
            let player = document.createElement('audio');
            player.id = id;
            player.src = src;
            this._div.appendChild(player);
            player.setAttribute('autoplay','autoplay');
        }else
            player.play();
    }

    static getInstance(){
		return this._instance || (this._instance = new SoundManager(__single))
	}
}

export default SoundManager;