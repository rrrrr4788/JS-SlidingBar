var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, /*tracePtr: tracePtr*/});
var music;
function preload() {
    game.load.image('jinguanzhang', 'jinguanzhang.jpg');
    game.load.image('bingkubei', 'bingkubei.jpg');
    game.load.audio('dongbeiren', 'zanmentunlideren.mp3');
    game.load.audio('cykablyat', 'narkotik kal.mp3');
}


var cursor;
function create() {

    game.add.sprite(0, 0, 'bingkubei');

    var jinguanzhang = game.add.sprite(640, 360, 'jinguanzhang');
    //var music = game.add.audio('dongbeiren');
    music = game.add.audio('cykablyat');
    music.play();
    music.loop=true;

    //  Input Enable the sprites
    jinguanzhang.inputEnabled = true;

    //  Allow dragging - the 'true' parameter will make the sprite snap to the center
    jinguanzhang.input.enableDrag(true);

    //game.input.onDown.add(changeVolume, this);
    jinguanzhang.events.onDragUpdate.add(dragUpdate);

    cursor = game.input.keyboard.createCursorKeys();
}


function dragUpdate(sprite, pointer/*, dragX, dragY, snapPoint*/) {
    //console.log(music.volume);
    var yPos = sprite.centerY;
    if (yPos > 720){//upper bound
        yPos = 720;
    }
    else if (yPos < 0){//lower bound
        yPos = 0;
    }
    /*console.log("Current y coordinate: ",720 - yPos);
    console.log("Current volume: ",music.volume);*/

        music.volume = -(yPos/720 - 1);

    if(sprite.x != 640){
        sprite.x = 640;
    }
}


/*function tracePtr (pointer){
    console.log("ptr x pos: ", pointer.x);
    console.log("ptr y pos: ", pointer.y);
}*/


/*function changeVolume(sprite) {
console.log(sprite.y);
console.log(music.volume);
    if (sprite.y < 100)
    {
        music.mute = false;
    }
    else if (sprite.y < 300)
    {
        music.volume += 0.9/*0.1;
    }
    else
    {
        music.volume -= 0.9/*0.1;
    }

}*/
function update(){
    //tracePtr (cursor);
}