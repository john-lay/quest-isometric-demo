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

var isoGame = new Phaser.Game(1024, 600, Phaser.AUTO, 'QuestIsometricDemo', { preload: preload, create: create }, false, false);
var heroSprite: Phaser.Sprite;

function preload() {
    // 20x32 is the size of each frame, there are 3 frames of animation
    isoGame.load.spritesheet('hero', 'Images/spritesheet-bicubic.png', 30, 48, 3);
}
function create() {
    drawGrid();
    drawHero(8, 6);
    highlightMovableTiles();
    isoGame.world.bringToTop(heroSprite);
}

function drawGrid() {
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
            addInteractiveTile(row, col, originX, originY, false);

            // add left side for first col
            if (col === 0) {
                var leftSideGraphic: Phaser.Graphics = isoGame.add.graphics(0, 200);
                drawLeftSide(leftSideGraphic, tileMap[row][col].tileStyle.stroke, originX, originY);
            }

            // add bottom side for last row
            if (row === tileMap.length - 1) {
                var bottomSideGraphic: Phaser.Graphics = isoGame.add.graphics(0, 200);
                drawBottomSide(bottomSideGraphic, tileMap[row][col].tileStyle.stroke, originX, originY);
            }
        }
    }
}

function highlightMovableTiles() {
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

            var movePoints: number = calcMovePoints(heroSprite.move, heroSprite.tile.x, col, heroSprite.tile.y, row);
            var currentTile: boolean = heroSprite.tile.x === col && heroSprite.tile.y === row;

            if (movePoints > 0 && !currentTile) {
                tileMap[row][col].tileGraphic.clear();
                addInteractiveTile(row, col, originX, originY, true);
            }
        }
    }
}

function calcMovePoints(spriteMove, originX, destX, originY, destY): number {

    var movePoints: number = spriteMove + 1; // adjust for zeroth array offset

    // for columns before the current position subtract the column from the current position
    // for columns after the current position subtract the current position from the column
    // subtract the result of this calculation from the move points to calculate whether
    // the character can move to this position
    if (destX < originX) {
        movePoints -= (originX - destX);
    } else if (destX > originX) {
        movePoints -= (destX - originX);
    }

    // as above for rows
    if (destY < originY) {
        movePoints -= (originY - destY);
    } else if (destY > originY) {
        movePoints -= (destY - originY);
    }

    return movePoints;
}

function drawHero(tileX: number, tileY:number) {
    var originX = 48;
    var originY = 306;
    var moveTileRightX = tileX * 32;
    var moveTileRightY = tileX * 16;
    var moveTileDownX = tileY * 32;
    var moveTileDownY = tileY * 16;

    originX = originX + moveTileRightX + moveTileDownX;
    originY = originY - moveTileRightY + moveTileDownY;

    heroSprite = isoGame.add.sprite(originX, originY, 'hero');
    heroSprite.tile = { x: tileX, y: tileY };
    heroSprite.move = 3;
    heroSprite.animations.add('walk', [1, 2]);
    heroSprite.animations.play('walk', 2, true);
}

function addInteractiveTile(row: number, col: number, originX: number, originY: number, highlight: boolean) {

    // add the tile to the game
    tileMap[row][col].tileGraphic = isoGame.add.graphics(0, 200);

    var graphic: Phaser.Graphics = tileMap[row][col].tileGraphic;
    graphic.inputEnabled = true;
    graphic.input.useHandCursor = true;
    graphic.tile = { x: col, y: row };

    if (highlight) {
        drawTile(graphic, tileTextures.move.fill, tileTextures.move.stroke, originX, originY);
    } else {
        drawTile(graphic, tileMap[row][col].tileStyle.fill, tileMap[row][col].tileStyle.stroke, originX, originY);
    }

    // the below causes all of the mouse events to be bound to the last tile.
    // so we need to call bind instead so we can set this to null
    //graphic.events.onInputDown.add(() => onDown(graphic, originX, originY), this);
    graphic.events.onInputDown.add(onDown.bind(null, graphic, originX, originY, highlight), this);
    graphic.events.onInputUp.add(onUp.bind(null, graphic, originX, originY, highlight), this);
    graphic.events.onInputOver.add(onOver.bind(null, graphic, originX, originY, highlight), this);
    graphic.events.onInputOut.add(onOut.bind(null, graphic, originX, originY, highlight), this);
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

function drawLeftSide(graphic: Phaser.Graphics, color: number, originX: number, originY: number) {

    graphic.clear();

    graphic.beginFill(color);
    graphic.lineStyle(2, color, 1);

    graphic.moveTo(originX, originY + 16);         // tl
    graphic.lineTo(originX + 32, originY + 32);    // tr
    graphic.lineTo(originX + 32, originY + 48);    // br
    graphic.lineTo(originX, originY + 32);         // bl
    graphic.lineTo(originX, originY + 16);         // tl

    graphic.endFill();
}

function drawBottomSide(graphic: Phaser.Graphics, color: number, originX: number, originY: number) {

    graphic.clear();

    graphic.beginFill(color);
    graphic.lineStyle(2, color, 1);

    graphic.moveTo(originX + 32, originY + 32);    // tl
    graphic.lineTo(originX + 64, originY + 16);    // tr
    graphic.lineTo(originX + 64, originY + 32);    // br
    graphic.lineTo(originX + 32, originY + 48);    // bl
    graphic.lineTo(originX + 32, originY + 32);    // tl

    graphic.endFill();
}

function onOver(graphic: Phaser.Graphics, originX: number, originY: number) {
    drawTile(graphic, tileTextures.current.fill, tileTextures.current.stroke, originX, originY);
}

function onDown(graphic: Phaser.Graphics, originX: number, originY: number, highlight: boolean) {
    if (highlight) {
        drawTile(graphic, tileTextures.fire.fill, tileTextures.fire.stroke, originX, originY);
    } else {
        drawTile(graphic, tileTextures.current.fill, tileTextures.current.stroke, originX, originY);
    }
}

function onUp(graphic: Phaser.Graphics, originX: number, originY: number, highlight: boolean) {
    if (highlight) { 
        moveToDestination(heroSprite, graphic.tile);
    } else {
        var fill = tileMap[graphic.tile.y][graphic.tile.x].tileStyle.fill;
        var stroke = tileMap[graphic.tile.y][graphic.tile.x].tileStyle.stroke;

        drawTile(graphic, fill, stroke, originX, originY);
    }
}

function onOut(graphic: Phaser.Graphics, originX: number, originY: number, highlight: boolean) {
    if (highlight) {
        drawTile(graphic, tileTextures.move.fill, tileTextures.move.stroke, originX, originY);
    } else {
        var fill = tileMap[graphic.tile.y][graphic.tile.x].tileStyle.fill;
        var stroke = tileMap[graphic.tile.y][graphic.tile.x].tileStyle.stroke;

        drawTile(graphic, fill, stroke, originX, originY);
    }
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
    drawGrid();
    highlightMovableTiles();
    isoGame.world.bringToTop(heroSprite);
}