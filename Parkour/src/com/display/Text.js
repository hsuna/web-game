/**
 * Created by Administrator on 2015/12/8.
 */
import Container from "./Container";

class Text extends Container {
    constructor(){
        super();
        this._text = null;
    }
    get text() {
        return this._text;
    }
    set text(text) {
        this._div.innerHTML = this._text = text;
    }
}

export default Text;