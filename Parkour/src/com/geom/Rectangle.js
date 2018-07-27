/**
 * Created by Administrator on 2015/12/26.
 */
import Point from "./Point";

class Rectangle {
    constructor(x=0, y=0, w=0, h=0) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    } 
    contains(x, y){
        return x>=this.left&&x<=this.right&&y>=this.top&&y<=this.bottom;
    }
    containsPoint(pot) {
        return this.contains(pot.x, pot.y);
    }
    clone(){
        return new Rectangle(this.x,  this.y, this.w,  this.y);
    }
    get left(){
        return this.x;
    }
    get right(){
        return this.x+this.width;
    }
    get top(){
        return this.y;
    }
    get bottom(){
        return this.y+this.height;
    }
    get topLeft(){
        return new Point(this.x,  this.y);
    }
    get bottomRight(){
        return new Point(this.x+this.width,  this.y+this.height);
    }
    get size(){
        return new Point(this.width,  this.height);
    }
}

export default Rectangle;