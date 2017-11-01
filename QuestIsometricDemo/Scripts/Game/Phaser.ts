/// <reference path="Logic/Render.ts" />
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
var IsoGame = new Phaser.Game(1024, 600, Phaser.AUTO, 'QuestIsometricDemo', { preload: preload, create: create }, false, false);

module Assets {
    'use strict';
    export var heroSprite: Phaser.Sprite;
    export var zombieSprite: Phaser.Sprite;
}

function preload() {
    // 20x32 is the size of each frame, there are 3 frames of animation
    IsoGame.load.spritesheet('hero', 'Images/spritesheet-bicubic.png', 30, 48, 3);
    IsoGame.load.spritesheet('zombie', 'Images/spritesheet-bicubic-85h.png', 30, 48, 3);
}

function create() {
    Draw.grid();
    Draw.hero(8, 6);
    Draw.zombie(16, 6);
    Interactive.highlightMovableTiles();
    IsoGame.world.bringToTop(Assets.heroSprite);
}

function moveSprite(sprite: Phaser.Sprite, direction: Direction) {
    if (direction === Direction.Up) {
        sprite.position.x -= 32;
        sprite.position.y -= 16;
    }
    if (direction === Direction.Down) {
        sprite.position.x += 32;
        sprite.position.y += 16;
    }
    if (direction === Direction.Left) {
        sprite.position.x -= 32;
        sprite.position.y += 16;
    }
    if (direction === Direction.Right) {
        sprite.position.x += 32;
        sprite.position.y -= 16;
    }
}

function moveToDestination(sprite: Phaser.Sprite, tile: any) {

    setTimeout(() => {
        if (sprite.tile.x < tile.x) {
            moveSprite(sprite, Direction.Right);
            sprite.tile.x++;
            moveToDestination(sprite, tile);
        }
        else if (sprite.tile.x > tile.x) {
            moveSprite(sprite, Direction.Left);
            sprite.tile.x--;
            moveToDestination(sprite, tile);
        }
        else if (sprite.tile.y < tile.y) {
            moveSprite(sprite, Direction.Down);
            sprite.tile.y++;
            moveToDestination(sprite, tile);
        }
        else if (sprite.tile.y > tile.y) {
            moveSprite(sprite, Direction.Up);
            sprite.tile.y--;
            moveToDestination(sprite, tile);
        } else {
            // sprite has finished moving, so redraw the grid
            redrawGrid();
        }
    }, 250);
}

function clearGrid() {
    for (var row = 0; row < tileMap.length; row++) {
        for (var col = 0; col < tileMap[row].length; col++) {
            tileMap[row][col].tileGraphic.clear();
        }
    }
}

function redrawGrid() {
    clearGrid();
    Draw.grid();
    Interactive.highlightMovableTiles();
    IsoGame.world.bringToTop(Assets.heroSprite);
    IsoGame.world.bringToTop(Assets.zombieSprite);
}