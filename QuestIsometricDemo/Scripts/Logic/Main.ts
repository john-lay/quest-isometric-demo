declare var tileMap: ITile[][];

module Logic {
    'use strict';

    export interface IMain {
        // PROPERTIES
        currentPos: number[];
        move: number;
        
        // PUBLIC METHODS
        drawTable(): void;
        calcMove(destX: number, destY: number): string;
        calcPath(destX: number, destY: number): number[][];
    }

    export class Main implements IMain {

        // PROPERTIES
        currentPos: number[];
        move: number;

        constructor() {
            this.currentPos = [4, 4];
            this.move = 3;
            // render page
            this.drawTable();

            document.querySelector('body').addEventListener('click', event => {

                var tileX: number = parseInt(event.target.dataset.x, 10);
                var tileY: number = parseInt(event.target.dataset.y, 10);

                if (tileMap[tileX][tileY].canMove) {
                    this.moveToDestination(this.calcPath(tileX, tileY));
                    this.currentPos[0] = tileX;
                    this.currentPos[1] = tileY;
                }
            });
        }

        // PUBLIC METHODS
        drawTable = () => {
            (<HTMLElement>document.querySelector('body')).innerHTML = '';

            var table = '<table>';

            for (var y = 0; y < tileMap.length; y++) {
                table += '<tr>';
                for (var x = 0; x < tileMap[y].length; x++) {
                    //reset canMove for tile
                    tileMap[x][y].canMove = false;
                    table += this.calcMove(x, y);
                }
                table += '</tr>';
            }

            table += '</table>';
            (<HTMLElement>document.querySelector('body')).innerHTML = table;
        }

        calcMove = (destX: number, destY: number): string => {

            var originX: number = this.currentPos[0];
            var originY: number = this.currentPos[1];
            var movePoints: number = this.calcMovePoints(originX, destX, originY, destY);
            var canMove: boolean = movePoints > 0;

            //update the can move status of the tile
            if (canMove) {
                tileMap[destX][destY].canMove = true;
            }

            // the current tile the player is on
            if (destX === originX && destY === originY) {
                return '<td id="' + destX + destY + '" style="background-color: yellow"><a href="#" class="tile" data-x="' + destX + '" data-y="' + destY + '">Move: ' + movePoints + '<br /> Cell:' + destX + ', ' + destY + '</a></td>';
            }
            if (canMove) {
                return '<td id="' + destX + destY + '" style="background-color: green"><a href="#" class="tile" data-x="' + destX + '" data-y="' + destY + '">Move: ' + movePoints + '<br /> Cell:' + destX + ', ' + destY + '</a></td>';
            } else {
                return '<td id="' + destX + destY + '" style=""><a href="#" class="tile" data-x="' + destX + '" data-y="' + destY + '">Move: ' + movePoints + '<br /> Cell:' + destX + ', ' + destY + '</a></td>';
            }
        }

        calcPath = (destX: number, destY: number): number[][] => {

            var originX: number = this.currentPos[0];
            var originY: number = this.currentPos[1];
            var path: number[][] = [];

            // our path starts at the destination and each subsequent element moves closer to the origin
            path.push([destX, destY]);

            var drawPath = (innerOriginX: number, innerOriginY: number) => {

                var innerDestX: number = innerOriginX;
                var innerDestY: number = innerOriginY;
                var destChanged: boolean = false; // only allow moving 1 adjacent cell per iteration
                var pathComplete = innerOriginX === originX && innerOriginY === originY;

                // try to line up x-axis, check adjacent cell to the right
                if (innerOriginX < originX) {
                    innerDestX = innerOriginX + 1;
                    destChanged = true;
                }

                // try to line up x-axis, check adjacent cell to the left
                if (innerOriginX > originX && !destChanged) {
                    innerDestX = innerOriginX - 1;
                    destChanged = true;
                }

                // try to line up y-axis, check adjacent cell below
                if (innerOriginY < originY && !destChanged) {
                    innerDestY = innerOriginY + 1;
                    destChanged = true;
                }

                // try to line up y-axis, check adjacent cell above
                if (innerOriginY > originY && !destChanged) {
                    innerDestY = innerOriginY - 1;
                }

                if (!pathComplete) {
                    path.push([innerDestX, innerDestY]);
                    drawPath(innerDestX, innerDestY);
                }
            }

            drawPath(destX, destY);

            return path;
        }

        // PRIVATE METHODS
        private calcMovePoints(originX, destX, originY, destY) {

            var movePoints: number = this.move + 1; // adjust for zeroth array offset

            // for columns before the current position subtract the column from the current position
            // for columns after the current position subtract the current position from the column
            // subtract the result of this calculation from the move points to calculate whether
            // the character can move to this position
            if (destX <= originX) {
                movePoints -= (originX - destX);
            } else if (destX > originX) {
                movePoints -= (destX - originX);
            }

            // as above for rows
            if (destY <= originY) {
                movePoints -= (originY - destY);
            } else if (destY > originY) {
                movePoints -= (destY - originY);
            }

            return movePoints;
        }

        private moveToDestination(path: number[][]) {

            var log = "Path = ";
            var pause: number = 250;

            for (var i = path.length - 1; i >= 0; i--) {

                //log += path[i][0] + "," + path[i][1] + " - ";

                ((index) => {
                    var el = document.getElementById("" + path[index][0] + path[index][1]);
                    var oldBgColor = el.style.backgroundColor;

                    // set the time color to pink after 1/4 second
                    setTimeout(() => {
                        el.style.backgroundColor = "HotPink";
                    }, pause + (pause * (path.length - index)));

                    // change the tile color back after a further 1/4 second
                    setTimeout(() => {
                        el.style.backgroundColor = oldBgColor;

                        // redraw the page after the last step
                        if (index === 0) {
                            setTimeout(this.drawTable, pause);
                        }
                    }, pause + pause + (pause * (path.length - index)));
                })(i);
            }

            //console.log(log);
        }
    }
}

var game: Logic.IMain = new Logic.Main();