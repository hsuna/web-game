let c_instance = 0;

class DisplayObject {
    constructor() {
        this._id = "instance"+(++c_instance);
        this._parent = null;
        this._x = this._y = this._width = this._height = this._rotation = 0.0;
        this._alpha = this._scaleX = this._scaleY = 1.0;
        this._mask = null;
    }
    setLocation(valx, valy){
        this.x = valx;
        this.y = valy;
    }
    get id() {
        return this._id;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get width(){
        return this._width;
    }
    set width(value){
        this._width = value;
    }
    get height(){
        return this._height;
    }
    set height(value){
        this._height = value;
    }
    get alpha() {
        return this._alpha;
    };
    set alpha(value) {
        this._alpha = value;
    };
    get rotation() {
        return this._rotation;
    };
    set rotation(value) {
        this._rotation = value;
    };
    get scaleX() {
        return this._scaleX;
    };
    set scaleX(value) {
        this._scaleX = value;
    };
    get scaleY() {
        return this._scaleY;
    };
    set scaleY(value) {
        this._scaleY = value;
    };
    get stageX() {
        var stageX = 0;
        var target = this;
        while(target){
            stageX += target.x;
            target = target.parent;
        }
        return stageX;
    }
    get stageY() {
        var stageY = 0;
        var target = this;
        while(target){
            stageY += target.y;
            target = target.parent;
        }
        return stageY;
    }
    get mask() {
        return this._mask;
    };
    set mask(value) {
        this._mask = value;
    };
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
}
DisplayObject.stage = null;

export default DisplayObject;