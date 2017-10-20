/// <reference path="Maps/ITextures.ts" />
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

var clickGame = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { create: create });

var graphics;

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

    graphics = clickGame.add.graphics(300, 200);

    drawShape(textures.ground.fill, textures.ground.stroke);
    graphics.inputEnabled = true;
    graphics.input.useHandCursor = true;

    graphics.events.onInputDown.add(onDown, this);
    graphics.events.onInputUp.add(onUp, this);
    graphics.events.onInputOver.add(onOver, this);
    graphics.events.onInputOut.add(onOut, this);

}

function drawShape(fill: number, stroke: number) {

    graphics.clear();

    graphics.beginFill(fill);
    graphics.lineStyle(4, stroke, 1);

    graphics.moveTo(0, 16);
    graphics.lineTo(32, 0);
    graphics.lineTo(64, 16);
    graphics.lineTo(32, 32);
    graphics.lineTo(0, 16);

    graphics.endFill();
}

function onOver() {
    drawShape(textures.current.fill, textures.current.stroke);
}

function onDown() {
    drawShape(textures.move.fill, textures.move.stroke);
}

function onUp() {
    drawShape(textures.ground.fill, textures.ground.stroke);
}

function onOut() {
    drawShape(textures.ground.fill, textures.ground.stroke);
}