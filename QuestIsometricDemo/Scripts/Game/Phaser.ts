/// <reference path="Maps/ITileTextures.ts" />
/// <reference path="Maps/TileTextures.ts" />
/// <reference path="../typings/phaser/phaser.d.ts" />
/**
 * Each square is 64x32
 * ===============================================
 *  
 *     | 0       16      32      48      64
 * --- + |-------|-------|-------|-------|-------
 *   0 |                 B (32,0)
 *   8 |
 *  16 | A (0,16)                        C (64,16)
 *  24 |
 *  32 |                 D (32,32)
 *             
 */

declare var tileMap: ITile[][];

var clickGame = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { create: create });

//var graphics1: Phaser.Graphics, graphics2: Phaser.Graphics;

function create() {
    var originX: number;
    var originY: number;
    var graphic: Phaser.Graphics;
    
    for (var i = 0; i < 4; i++) {
        originX = i * 32;
        originY = 128 - ((i + 1) * 16);
        tileMap[0][i].tileGraphic = clickGame.add.graphics(100, 100);
        graphic = tileMap[0][i].tileGraphic;
        
        drawTile(graphic, tileTextures.ground.fill, tileTextures.ground.stroke, originX, originY);
        graphic.inputEnabled = true;
        graphic.input.useHandCursor = true;

        // the below causes all of the mouse events to be bound to the last tile.
        // so we need to call bind instead so we can set this to null
        //graphic.events.onInputDown.add(() => onDown(graphic, 32, 0), this);
        graphic.events.onInputDown.add(onDown.bind(null, graphic, originX, originY), this);
        graphic.events.onInputUp.add(onUp.bind(null, graphic, originX, originY), this);
        graphic.events.onInputOver.add(onOver.bind(null, graphic, originX, originY), this);
        graphic.events.onInputOut.add(onOut.bind(null, graphic, originX, originY), this);
    }
}

function drawTile(graphics: Phaser.Graphics, fill: number, stroke: number, originX: number, originY: number) {

    graphics.clear();

    graphics.beginFill(fill);
    graphics.lineStyle(2, stroke, 1);

    graphics.moveTo(originX, originY + 16);         // tl
    graphics.lineTo(originX + 32, originY);         // tr
    graphics.lineTo(originX + 64, originY + 16);    // br
    graphics.lineTo(originX + 32, originY + 32);    // bl
    graphics.lineTo(originX, originY + 16);         // tl

    graphics.endFill();
}

function onOver(graphics: Phaser.Graphics, originX: number, originY: number) {
    drawTile(graphics, tileTextures.current.fill, tileTextures.current.stroke, originX, originY);
}

function onDown(graphics: Phaser.Graphics, originX: number, originY: number) {
    drawTile(graphics, tileTextures.move.fill, tileTextures.move.stroke, originX, originY);
}

function onUp(graphics: Phaser.Graphics, originX: number, originY: number) {
    drawTile(graphics, tileTextures.ground.fill, tileTextures.ground.stroke, originX, originY);
}

function onOut(graphics: Phaser.Graphics, originX: number, originY: number) {
    //console.log(graphics.currentPath.points);
    drawTile(graphics, tileTextures.ground.fill, tileTextures.ground.stroke, originX, originY);
}