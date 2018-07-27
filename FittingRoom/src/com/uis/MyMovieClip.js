import MovieClip from "../display/MovieClip";
import AssetsManager from "../managers/AssetsManager";

class MyMovieClip extends MovieClip {
    constructor(skin){
        skin = AssetsManager.getInstance().images + skin;
        super(skin);
    }
}

export default MyMovieClip;