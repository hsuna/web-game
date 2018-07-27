//单例
const __single = Symbol('single');

class AssetsManager {
    constructor(single){
		if(single != __single){
			throw new Error('Singleton is a singleton.');
		}
        this._instance = null;
        
        this._assert = "";
        this._images = "";
    }
    set assert(value) {
        this._assert = value;
        this._images = `${value}images/`;
    }
    get images() {
        return this._images;
    }

    static getInstance(){
		return this._instance || (this._instance = new AssetsManager(__single))
	}
}

export default AssetsManager;

