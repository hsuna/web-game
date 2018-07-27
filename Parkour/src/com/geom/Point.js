/**
 * Created by Administrator on 2015/12/22.
 */

class Point {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    clone(){
        return new Point(this.x, this.y);
    }

}

export default Point;