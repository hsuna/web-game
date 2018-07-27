const PHOTO_W = 345;
const PHOTO_H = 631;

const _initView = Symbol('_initView');

import MyContainer from "../uis/MyContainer";
import TweenManager from "../managers/TweenManager";
import MyImage from "../uis/MyImage";
import MyMovieClip from "../uis/MyMovieClip";

class MainView extends MyContainer{
    constructor(){
        super();
        this._lastIndex = -1;
        this[_initView]();
    }
    setPhotoByIndex(index, step, backCall){
        if(index>2 || index<0) return;
        if(index == this._lastIndex) return;
       let newX = index*-PHOTO_W+147;
        step = undefined!=step?step:true;
        if(step){
            TweenManager.getInstance().addTween(this._photoSp, 200, {x:newX}, backCall);
            TweenManager.getInstance().addTween(this._shanowSp, 200, {x:newX});
        }else{
            this._photoSp.x = newX;
            this._shanowSp.x = newX;
        }
        this._lastIndex = index;
    }
    openOrClose(bol, backCall){
        if(bol){
            TweenManager.getInstance().addTween(this._curtainImg, 160, {x:423, scaleX:0.2}, backCall);
        }else{
            TweenManager.getInstance().addTween(this._curtainImg, 160, {x:147, scaleX:1}, backCall);
        }
    }
    dispose(){
        TweenManager.getInstance().removeTween(this._photoSp);
        TweenManager.getInstance().removeTween(this._shanowSp);
        super.dispose();
    }

    [_initView](){
        this._bg = new MyImage("img_bg.jpg");
        this.addChild(this._bg);

        this._photoSp = new MyContainer();
        this.addChild(this._photoSp);
        this._photoSp.setLocation(147, 110);
        this._photoSp.mask = {
            stageX:147,
            stageY:107,
            width:PHOTO_W,
            height:PHOTO_H+70
        }

        this._shanowSp = new MyContainer();
        this.addChild(this._shanowSp);
        this._shanowSp.setLocation(147, 110);

        this._curtainImg = new MyImage("img_curtain.png");
        this.addChild(this._curtainImg);
        this._curtainImg.setLocation(147, 107);
        this._shanowSp.mask = this._curtainImg;

        this._leftImg = new MyMovieClip("img_arrow.png");
        this.addChild(this._leftImg);
        this._leftImg.scaleX = -1;
        this._leftImg.setLocation(286, 804);
        this._leftImg.addAnimat({
            tolFrame:8,
            frames:[
                {frame:0, attrs:{x:286}},
                {frame:1, attrs:{x:284}},
                {frame:2, attrs:{x:282}},
                {frame:3, attrs:{x:280}},
                {frame:4, attrs:{x:278}},
                {frame:5, attrs:{x:280}},
                {frame:6, attrs:{x:282}},
                {frame:7, attrs:{x:284}},
            ]
        });

        this._rightImg = new MyMovieClip("img_arrow.png");
        this.addChild(this._rightImg);
        this._rightImg.setLocation(354, 804);
        this._rightImg.addAnimat({
            tolFrame:8,
            frames:[
                {frame:0, attrs:{x:354}},
                {frame:1, attrs:{x:356}},
                {frame:2, attrs:{x:358}},
                {frame:3, attrs:{x:360}},
                {frame:4, attrs:{x:362}},
                {frame:5, attrs:{x:360}},
                {frame:6, attrs:{x:358}},
                {frame:7, attrs:{x:356}},
            ]
        });

        this._personImg = new MyImage("img_person.png");
        this.addChild(this._personImg);
        this._personImg.setLocation(0, 576);

       let list = [{x:0.4, y:9}, {x:71.3, y:1}, {x:100.3, y:3}];
       let photo;
       let shanow;
        for(let i=0; i<list.length; i++){
            photo = new MyImage("img_photo"+i+".png");
            this._photoSp.addChild(photo);
            photo.setLocation(list[i].x+PHOTO_W*i, list[i].y);

            shanow = new MyImage("img_shanow"+i+".png");
            this._shanowSp.addChild(shanow);
            shanow.setLocation(list[i].x+PHOTO_W*i, list[i].y);
        }
    }
}

export default MainView;