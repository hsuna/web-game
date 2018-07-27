/**
 * Created by Administrator on 2015/12/21.
 */
import Container from "../../display/Container";

import GameInfo from "../../infos/GameInfo";

import MapItem from "../item/MapItem";

const _initView = Symbol('_initView');
const _updataMapByIndex = Symbol('_updataMapByIndex');

class MapView extends Container{
    constructor() {
        super();
        this._flag = false;
        this[_initView]();
    }
    initMap(){
        this._flag = false;
        this._frameNum = 0;
        this._frameCount = GameInfo.mapInfo.length;
        this[_updataMapByIndex](this._mapA,  this._frameNum);
        this[_updataMapByIndex](this._mapB,  this._frameNum);
        this._mapA.x = 0;
        this._mapB.x = this._mapA.width;
    }
    updataMap(speed){
        this._mapA.x = this._mapA.x - speed;
        this._mapB.x = this._mapB.x - speed;
        if(this._mapA.x<0 && this._flag == false)
        {
            this._frameNum = this._frameNum+1<this._frameCount?this._frameNum+1:0;
            this[_updataMapByIndex](this._mapB,  this._frameNum);
            this._mapB.x = this._mapA.x + this._mapA.width;
            this._flag = true;
        }
        if (this._mapB.x<0 && this._flag == true)
        {
            this._frameNum = this._frameNum+1<this._frameCount?this._frameNum+1:0;
            this[_updataMapByIndex](this._mapA,  this._frameNum);
            this._mapA.x = this._mapB.x + this._mapB.width;
            this._flag = false;
        }
        //this._mapTxt.text = "当前地图索引为："+(this._frameNum-1);
    }
    getMapItems(){
        let items = [];
        items = items.concat(this._mapA.children);
        items = items.concat(this._mapB.children);
        return items;
    }

    [_initView](){
        this._mapA = new Container();
        this._mapB = new Container();
        this.addChild(this._mapA);
        this.addChild(this._mapB);

        //this._mapTxt = new display.Text();
        //this.addChild(this._mapTxt);
        //this._mapTxt.width = 300;
        //this._mapTxt.text = "当前地图索引为："+0;
        //this._mapTxt.setLocation(10, 30);
    }
    [_updataMapByIndex](map, index) {
        let infos = GameInfo.mapInfo[index];
        let infosL = infos.length;
        let childL = map.numChildren;
        let len = infosL>childL?infosL:childL;
        let child, info;
        let tmpX= 0, tmpY= 0, minX=0, maxX=0, minY=0, maxY=0, rad=0;
        for(let i=0; i<len; i++){
            child = map.getChildAt(i);
            info = infos[i];
            if(info){
                if(child){
                    child.updateSize(info.w, info.h);
                }else{
                    child = new MapItem(info.w, info.h);
                    map.addChild(child);
                }
                child.setLocation(info.x, info.y);
                child.rotation = info.r;
                rad = info.r*(Math.PI/180);
                tmpX = info.x+(Math.cos(rad)*info.w+Math.sin(rad)*info.h);
                tmpY = info.y+(Math.sin(rad)*info.w+Math.cos(rad)*info.h);
                minX = Math.min(minX, tmpX);
                maxX = Math.max(maxX, tmpX);
                minY = Math.min(minY, tmpY);
                maxY = Math.max(maxY, tmpY);
            }else if(child){
                map.removeChild(child);
                child&&child.dispose();
                child = null;
                i--
            }
        }
        map.width = (maxX-minX) * map.scale;
        map.height = (maxY-minY) * map.scale;
    }
}

export default MapView;