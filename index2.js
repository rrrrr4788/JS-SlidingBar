var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create});
var music;
function preload() {
    game.load.image('jinguanzhang', 'jinguanzhang.jpg');
    game.load.image('bingkubei', 'bingkubei.jpg');
    game.load.audio('dongbeiren', 'zanmentunlideren.mp3');
    game.load.audio('cykablyat', 'narkotik kal.mp3');
}

function create() {

    game.add.sprite(0, 0, 'bingkubei');

    var jinguanzhang = game.add.sprite(640, 360, 'jinguanzhang');
    //music = game.add.audio('dongbeiren');
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


function dragUpdate(sprite) {
    //455: the upper bound i set for this sliding bar
    //260: the lower bound i set for this sliding bar
    //720: the length of the background
    //195: the range that the sliding bar can move
    var yPos = 720 - sprite.centerY;
    if (yPos > 455){//upper bound
        yPos = 455;
        sprite.centerY = 265;
    }
    else if (yPos < 260){//lower bound
        yPos = 260;
        sprite.centerY = 460;
    }
    console.log("Current y coordinate: ",yPos);

    music.volume = (yPos-260) /195;

    console.log("Current volume: ",music.volume);

    if(sprite.x != 640){
        sprite.x = 640;
    }
}
