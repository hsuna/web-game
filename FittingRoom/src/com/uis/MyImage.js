import Bitmap from "../display/Bitmap";
import AssetsManager from "../managers/AssetsManager";

class MyImage extends Bitmap{
    constructor(skin){
        skin = AssetsManager.getInstance().images + skin;
        super(skin);
    }
}

export default MyImage;