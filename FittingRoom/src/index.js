import FittingRoom from "./com/FittingRoom";

let index = 0;
let fittingRoom = new FittingRoom("canvas", 640, 1008, "#FFFFFF", "assets/");
fittingRoom.setPhotoByIndex(2, false);
fittingRoom.openOrClose(true);
document.addEventListener("click", onClickHandler);

function onClickHandler(evt){
    index++;
    if(index > 2) index=0;
    fittingRoom.openOrClose(false, function(){
        fittingRoom.setPhotoByIndex(index, true, function(){
            fittingRoom.openOrClose(true);
        });
    });
}