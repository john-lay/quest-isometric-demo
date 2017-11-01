declare var tileMap: ITile[][];

module Interactive {
    'use strict';

    // PRIVATE METHODS
    function onOver(graphic: Phaser.Graphics, originX: number, originY: number) {
        Draw.tile(graphic, tileTextures.current.fill, tileTextures.current.stroke, originX, originY);
    }

    function onDown(graphic: Phaser.Graphics, originX: number, originY: number, highlight: boolean) {
        if (highlight) {
            Draw.tile(graphic, tileTextures.fire.fill, tileTextures.fire.stroke, originX, originY);
        } else {
            Draw.tile(graphic, tileTextures.current.fill, tileTextures.current.stroke, originX, originY);
        }
    }

    function onUp(graphic: Phaser.Graphics, originX: number, originY: number, highlight: boolean) {
        if (highlight) {
            moveToDestination(Assets.heroSprite, graphic.tile);
        } else {
            var fill = tileMap[graphic.tile.y][graphic.tile.x].tileStyle.fill;
            var stroke = tileMap[graphic.tile.y][graphic.tile.x].tileStyle.stroke;

            Draw.tile(graphic, fill, stroke, originX, originY);
        }
    }

    function onOut(graphic: Phaser.Graphics, originX: number, originY: number, highlight: boolean) {
        if (highlight) {
            Draw.tile(graphic, tileTextures.move.fill, tileTextures.move.stroke, originX, originY);
        } else {
            var fill = tileMap[graphic.tile.y][graphic.tile.x].tileStyle.fill;
            var stroke = tileMap[graphic.tile.y][graphic.tile.x].tileStyle.stroke;

            Draw.tile(graphic, fill, stroke, originX, originY);
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

    // PUBLIC METHODS
    export function addTile(row: number, col: number, originX: number, originY: number, highlight: boolean) {

        // add the tile to the game
        tileMap[row][col].tileGraphic = IsoGame.add.graphics(0, 200);

        var graphic: Phaser.Graphics = tileMap[row][col].tileGraphic;
        graphic.inputEnabled = true;
        graphic.input.useHandCursor = true;
        graphic.tile = { x: col, y: row };

        if (highlight) {
            Draw.tile(graphic, tileTextures.move.fill, tileTextures.move.stroke, originX, originY);
        } else {
            Draw.tile(graphic, tileMap[row][col].tileStyle.fill, tileMap[row][col].tileStyle.stroke, originX, originY);
        }

        // the below causes all of the mouse events to be bound to the last tile.
        // so we need to call bind instead so we can set this to null
        //graphic.events.onInputDown.add(() => onDown(graphic, originX, originY), this);
        graphic.events.onInputDown.add(onDown.bind(null, graphic, originX, originY, highlight), Window);
        graphic.events.onInputUp.add(onUp.bind(null, graphic, originX, originY, highlight), Window);
        graphic.events.onInputOver.add(onOver.bind(null, graphic, originX, originY, highlight), Window);
        graphic.events.onInputOut.add(onOut.bind(null, graphic, originX, originY, highlight), Window);
    }

    export function highlightMovableTiles() {
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

                var movePoints: number = calcMovePoints(Assets.heroSprite.move, Assets.heroSprite.tile.x, col, Assets.heroSprite.tile.y, row);
                var currentTile: boolean = Assets.heroSprite.tile.x === col && Assets.heroSprite.tile.y === row;
                var isBlocked: boolean = tileMap[row][col].blocked;

                if (movePoints > 0 && !currentTile && !isBlocked) {
                    tileMap[row][col].tileGraphic.clear();
                    Interactive.addTile(row, col, originX, originY, true);
                }
            }
        }
    }
}