declare var tileMap: ITile[][];

module Logic {
    'use strict';

    export interface IMain {
        // PROPERTIES
        currentPos: number[];
        move: number;
        
        // PUBLIC METHODS
        drawTable(): void;
        calcMove(x: number, y: number): string;
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
                var tileX:number = parseInt(event.target.dataset.x, 10);
                var tileY:number = parseInt(event.target.dataset.y, 10);

                if (tileMap[tileX][tileY].canMove) {
                    game.currentPos[0] = tileX;
                    game.currentPos[1] = tileY;
                }
                
                // redraw the page
                game.drawTable();
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

        calcMove = (x: number, y: number): string => {
            var movePoints: number = this.move + 1; // adjust for zeroth array offset
            var posX: number = this.currentPos[0];
            var posY: number = this.currentPos[1];

            // for columns before the current position subtract the column from the current position
            // for columns after the current position subtract the current position from the column
            // subtract the result of this calculation from the move points to calculate whether
            // the character can move to this position
            if (x <= posX) {
                movePoints -= (posX - x);
            } else if (x > posX) {
                movePoints -= (x - posX);
            }

            // as above for rows
            if (y <= posY) {
                movePoints -= (posY - y);
            } else if (y > posY) {
                movePoints -= (y - posY);
            }

            var canMove: boolean = movePoints > 0;

            //update the can move status of the tile
            if (canMove) {
                tileMap[x][y].canMove = true;
            }

            // the current tile the player is on
            if (x === this.currentPos[0] && y === this.currentPos[1]) {
                return '<td style="background-color: yellow"><a href="#" class="tile" data-x="' + x + '" data-y="' + y + '">' + x + ', ' + y + '</a></td>';
            }
            if (canMove) {
                return '<td style="background-color: green"><a href="#" class="tile" data-x="' + x + '" data-y="' + y + '">' + x + ', ' + y + '</a></td>';
            } else {
                return '<td style=""><a href="#" class="tile" data-x="' + x + '" data-y="' + y + '">' + x + ', ' + y + '</a></td>';
            }
        }
    }
}

var game: Logic.IMain = new Logic.Main();