import Container from "./Container";

class Bitmap extends Container {
    constructor(skin){
        super();
        this._orgskin = skin;
        this.image = document.createElement("img");
        this.image.src = this._orgskin;
    }
      
    draw(ctx) {
        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.image.width*this._scaleX, this.image.height*this._scaleY);
        super.draw(ctx);
    }
    get width(){
        return Math.abs(this.image.width*this._scaleX);
    }
    set width(value){
        this._width = value;
    }
    get height(){
        return Math.abs(this.image.height*this._scaleY);
    }
    set height(value){
        this._height = value;
    }
}
   
export default Bitmap;