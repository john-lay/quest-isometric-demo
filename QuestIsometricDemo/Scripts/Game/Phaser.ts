/// <reference path="../typings/phaser/phaser.d.ts" />
/// <reference path="Maps/ITextures.ts" />
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

var clickGame = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { create: create });

var graphics1: Phaser.Graphics, graphics2: Phaser.Graphics;

var textures: ITextures = {
    grass: {
        fill: 0xb7e61e, stroke: 0x80a115
    },
    ground: {
        fill: 0xccb36e, stroke: 0x8c7b4d
    },
    water: {
        fill: 0x99d8e8, stroke: 0x6a96a1
    },
    current: {
        fill: 0xffffc9, stroke: 0xb0b08b
    },
    fire: {
        fill: 0xf06267, stroke: 0x870014
    },
    move: {
        fill: 0xffff00, stroke: 0xb0b000
    }
};

function create() {

    graphics1 = clickGame.add.graphics(300, 200);
    drawTile(graphics1, textures.ground.fill, textures.ground.stroke, 0, 16);
    graphics1.inputEnabled = true;
    graphics1.input.useHandCursor = true;

    graphics1.events.onInputDown.add(function() {
        return onDown(graphics1, 0, 16);
    }, this);
    graphics1.events.onInputUp.add(() => onUp(graphics1, 0, 16), this);
    graphics1.events.onInputOver.add(() => onOver(graphics1, 0, 16), this);
    graphics1.events.onInputOut.add(() => onOut(graphics1, 0, 16), this);

    ///////////////////////////////
    graphics2 = clickGame.add.graphics(300, 200);
    drawTile(graphics2, textures.ground.fill, textures.ground.stroke, 32, 0);
    graphics2.inputEnabled = true;
    graphics2.input.useHandCursor = true;

    graphics2.events.onInputDown.add(() => onDown(graphics2, 32, 0), this);
    graphics2.events.onInputUp.add(() => onUp(graphics2, 32, 0), this);
    graphics2.events.onInputOver.add(() => onOver(graphics2, 32, 0), this);
    graphics2.events.onInputOut.add(() => onOut(graphics2, 32, 0), this);
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
    drawTile(graphics, textures.current.fill, textures.current.stroke, originX, originY);
}

function onDown(graphics: Phaser.Graphics, originX: number, originY: number) {
    drawTile(graphics, textures.move.fill, textures.move.stroke, originX, originY);
}

function onUp(graphics: Phaser.Graphics, originX: number, originY: number) {
    drawTile(graphics, textures.ground.fill, textures.ground.stroke, originX, originY);
}

function onOut(graphics: Phaser.Graphics, originX: number, originY: number) {    
    drawTile(graphics, textures.ground.fill, textures.ground.stroke, originX, originY);
}