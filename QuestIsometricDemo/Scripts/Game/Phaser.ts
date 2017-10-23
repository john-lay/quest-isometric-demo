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

var isoGame = new Phaser.Game(1024, 600, Phaser.AUTO, 'QuestIsometricDemo', { create: create });

function create() {
    var originX: number;
    var originY: number;
    var offsetY: number = 128;
    var offsetX: number = 0;

    // draw the tile rows
    for (var row = 0; row < tileMap.length; row++) {

        offsetY = offsetY + 16;
        offsetX = offsetX + 32;

        // draw the tile columns
        for (var col = 0; col < tileMap[row].length; col++) {
            originX = offsetX + col * 32;
            originY = offsetY - ((col + 1) * 16);
            addInteractiveTile(row, col, originX, originY);
        }
    }
}

function addInteractiveTile(row: number, col: number, originX: number, originY: number) {

    // add the tile to the game
    tileMap[row][col].tileGraphic = isoGame.add.graphics(0, 200);

    var graphic: Phaser.Graphics = tileMap[row][col].tileGraphic;
    graphic.inputEnabled = true;
    graphic.input.useHandCursor = true;
    graphic.tile = { x: col, y: row };

    drawTile(graphic, tileMap[row][col].tileStyle.fill, tileMap[row][col].tileStyle.stroke, originX, originY);

    // the below causes all of the mouse events to be bound to the last tile.
    // so we need to call bind instead so we can set this to null
    //graphic.events.onInputDown.add(() => onDown(graphic, originX, originY), this);
    graphic.events.onInputDown.add(onDown.bind(null, graphic, originX, originY), this);
    graphic.events.onInputUp.add(onUp.bind(null, graphic, originX, originY), this);
    graphic.events.onInputOver.add(onOver.bind(null, graphic, originX, originY), this);
    graphic.events.onInputOut.add(onOut.bind(null, graphic, originX, originY), this);
}

function drawTile(graphic: Phaser.Graphics, fill: number, stroke: number, originX: number, originY: number) {

    graphic.clear();

    graphic.beginFill(fill);
    graphic.lineStyle(2, stroke, 1);

    graphic.moveTo(originX, originY + 16);         // tl
    graphic.lineTo(originX + 32, originY);         // tr
    graphic.lineTo(originX + 64, originY + 16);    // br
    graphic.lineTo(originX + 32, originY + 32);    // bl
    graphic.lineTo(originX, originY + 16);         // tl

    graphic.endFill();
}

function onOver(graphic: Phaser.Graphics, originX: number, originY: number) {
    drawTile(graphic, tileTextures.current.fill, tileTextures.current.stroke, originX, originY);
}

function onDown(graphic: Phaser.Graphics, originX: number, originY: number) {
    //console.log(graphic);
    drawTile(graphic, tileTextures.move.fill, tileTextures.move.stroke, originX, originY);
}

function onUp(graphic: Phaser.Graphics, originX: number, originY: number) {
    var fill = tileMap[graphic.tile.y][graphic.tile.x].tileStyle.fill;
    var stroke = tileMap[graphic.tile.y][graphic.tile.x].tileStyle.stroke;

    drawTile(graphic, fill, stroke, originX, originY);
}

function onOut(graphic: Phaser.Graphics, originX: number, originY: number) {
    var fill = tileMap[graphic.tile.y][graphic.tile.x].tileStyle.fill;
    var stroke = tileMap[graphic.tile.y][graphic.tile.x].tileStyle.stroke;

    drawTile(graphic, fill, stroke, originX, originY);
}