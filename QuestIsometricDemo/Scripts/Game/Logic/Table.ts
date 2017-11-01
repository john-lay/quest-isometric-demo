declare var tileMap: ITile[][];

module Logic {
    'use strict';

    export interface IMain {
        // PROPERTIES
        currentPos: number[];
        move: number;
        jump: number;
        
        // PUBLIC METHODS
        drawTable(): void;
        calcMove(destX: number, destY: number): string;
        calcPath(destX: number, destY: number): number[][];
    }

    export class Main implements IMain {

        // PROPERTIES
        currentPos: number[];
        move: number;
        jump: number;

        constructor() {
            this.currentPos = [8, 6];
            this.move = 3;
            this.jump = 2;

            // render page
            this.drawTable();

            document.querySelector('body').addEventListener('click', event => {

                var tileX: number = parseInt(event.target.dataset.x, 10);
                var tileY: number = parseInt(event.target.dataset.y, 10);

                if (tileMap[tileX][tileY].canMove) {
                    this.moveToDestination(this.calcPath(tileX, tileY));
                    this.currentPos[0] = tileX;
                    this.currentPos[1] = tileY;
                    //this.calcAltPath(tileX, tileY);
                }
            });
        }

        // PUBLIC METHODS
        drawTable = () => {
            (<HTMLElement>document.querySelector('#MapContainer')).innerHTML = '';

            var table = '<table>';
            for (var row = 0; row < tileMap.length; row++) {
                table += '<tr>';
                for (var col = 0; col < tileMap[row].length; col++) {
                    //reset canMove for tile
                    tileMap[row][col].canMove = false;
                    table += this.calcMove(row, col);   
                }
                table += '</tr>';
            }

            table += '</table>';
            (<HTMLElement>document.querySelector('#MapContainer')).innerHTML = table;
        }

        calcMove = (destX: number, destY: number): string => {

            var originX: number = this.currentPos[0];
            var originY: number = this.currentPos[1];
            var movePoints: number = this.calcMovePoints(originX, destX, originY, destY);
            var blocked: boolean = tileMap[destX][destY].blocked;
            var canMove: boolean = movePoints > 0 && !blocked;
            var height: number = tileMap[destX][destY].height;

            //update the can move status of the tile
            if (canMove) {
                tileMap[destX][destY].canMove = true;
            }

            if (!this.canJump(destX, destY)) {
                tileMap[destX][destY].canMove = false;
                canMove = false;
            }

            // the current tile the player is on
            if (destX === originX && destY === originY) {
                return '<td id="' + destX + destY + '" style="background-color: yellow"><a href="#" class="tile" data-x="' + destX + '" data-y="' + destY + '">Move: ' + movePoints + '<br /> Cell:' + destX + ', ' + destY + '<br /> Height:' + height + '</a></td>';
            }
            if (blocked) {
                return '<td id="' + destX + destY + '" style="background-color: turquoise"><a href="#" class="tile" data-x="' + destX + '" data-y="' + destY + '">Blocked</a></td>';
            }
            if (canMove) {
                return '<td id="' + destX + destY + '" style="background-color: green"><a href="#" class="tile" data-x="' + destX + '" data-y="' + destY + '">Move: ' + movePoints + '<br /> Cell:' + destX + ', ' + destY + '<br /> Height:' + height + '</a></td>';
            } else {
                return '<td id="' + destX + destY + '" style=""><a href="#" class="tile" data-x="' + destX + '" data-y="' + destY + '">Move: ' + movePoints + '<br /> Cell:' + destX + ', ' + destY + '<br /> Height:' + height + '</a></td>';
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
        private calcAltPath(destX: number, destY: number): number[][] {
            var originX: number = this.currentPos[0];
            var originY: number = this.currentPos[1];
            var allPaths: number[][][] = [];
            var optimalPath: number[][] = [];

            // our path starts at the destination and each subsequent element moves closer to the origin
            allPaths.push([[destX, destY]]);

            var drawPath = (innerOriginX: number, innerOriginY: number, allPathIndex: number) => {
                // try to move to adjacent cell
                var innerDestX: number = innerOriginX;
                var innerDestY: number = innerOriginY;
                var pathComplete = innerOriginX === originX && innerOriginY === originY;
                var pathCopy: number[][];
                var pathIndex: number;
                
                // try to line up x-axis, check adjacent cell to the right
                if (innerOriginX < originX) {
                    if (!pathComplete && this.canAddToPath(allPaths[allPathIndex], innerOriginX + 1, innerOriginY)) {
                        innerDestX = innerOriginX + 1;
                        pathCopy = allPaths[allPathIndex].slice();
                        pathIndex = allPaths.length - 1;

                        allPaths.push(pathCopy);
                        allPaths[pathIndex].push([innerDestX, innerDestY]);

                        drawPath(innerDestX, innerDestY, pathIndex);
                    }
                }

                // try to line up x-axis, check adjacent cell to the left
                if (innerOriginX > originX) {
                    if (!pathComplete && this.canAddToPath(allPaths[allPathIndex], innerOriginX - 1, innerOriginY)) {
                        innerDestX = innerOriginX + 1;
                        pathCopy = allPaths[allPathIndex].slice();
                        pathIndex = allPaths.length - 1;

                        allPaths.push(pathCopy);
                        allPaths[pathIndex].push([innerDestX, innerDestY]);

                        drawPath(innerDestX, innerDestY, pathIndex);
                    }
                }

                // try to line up y-axis, check adjacent cell below
                if (innerOriginY < originY) {
                    if (!pathComplete && this.canAddToPath(allPaths[allPathIndex], innerOriginX, innerOriginY + 1)) {
                        innerDestY = innerOriginY + 1;
                        pathCopy = allPaths[allPathIndex].slice();
                        pathIndex = allPaths.length - 1;

                        allPaths.push(pathCopy);
                        allPaths[pathIndex].push([innerDestX, innerDestY]);

                        drawPath(innerDestX, innerDestY, pathIndex);
                    }
                }

                // try to line up y-axis, check adjacent cell above
                if (innerOriginY > originY) {
                    if (!pathComplete && this.canAddToPath(allPaths[allPathIndex], innerOriginX, innerOriginY - 1)) {
                        innerDestY = innerOriginY - 1;
                        pathCopy = allPaths[allPathIndex].slice();
                        pathIndex = allPaths.length - 1;

                        allPaths.push(pathCopy);
                        allPaths[pathIndex].push([innerDestX, innerDestY]);

                        drawPath(innerDestX, innerDestY, pathIndex);
                    }
                }
            }

            drawPath(destX, destY, 0);

            this.findShortestPath(allPaths);
            //console.log("allPaths", allPaths);
            //console.log(this.findShortestPath(allPaths));
            return optimalPath;
        }

        private canAddToPath(path: number[][], destX: number, destY: number): boolean {

            //console.log("can jump", this.canJump(destX, destY), "in path", this.isInPath(path, destX, destY), "can move", this.calcMovePoints(this.currentPos[0], destX, this.currentPos[1], destY) > 0 && !tileMap[destX][destY].blocked);
            // check can jump
            if (!this.canJump(destX, destY)) {
                return false;
            }

            // check is in path
            if (this.isInPath(path, destX, destY)) {
                return false;
            }

            //check can move
            var movePoints: number = this.calcMovePoints(this.currentPos[0], destX, this.currentPos[1], destY);
            var blocked: boolean = tileMap[destX][destY].blocked;
            var canMove: boolean = movePoints > 0 && !blocked;

            if (!canMove) {
                return false;
            }

            return true;
        }

        private findShortestPath(allPaths: number[][][]): number[][] {

            var originX: number = this.currentPos[0];
            var originY: number = this.currentPos[1];
            var shortestPathIndex: number = 999;
            var optimalPath: number[][] = [];

            //console.log("shortest path: Origin x, y", originX, originY);

            for (var i = 0; i < allPaths.length; i++) {

                var output = '';
                //debug print each path
                for (var j = 0; j < allPaths[i].length; j++) {
                    output += allPaths[i][j][0] + ',' + allPaths[i][j][1] + ' - ';
                }

                console.log(output);

                // check if the last element in the path is the origin
                var lastIndex = allPaths[i].length - 1;
                //console.log("last index: ", allPaths[i][lastIndex][0], allPaths[i][lastIndex][1]);
                if (allPaths[i][lastIndex][0] === originX
                    && allPaths[i][lastIndex][1] === originY
                    && allPaths[i].length < shortestPathIndex) {

                    shortestPathIndex = allPaths[i].length;
                    optimalPath = allPaths[i];
                }
            }

            return optimalPath;
        }

        private calcMovePoints(originX, destX, originY, destY): number {

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

        private canJump = (destX: number, destY: number): boolean => {
            
            if (tileMap[destX] === undefined || tileMap[destX] === undefined) {
                return false;
            }

            var originX: number = this.currentPos[0];
            var originY: number = this.currentPos[1];
            var height: number = tileMap[destX][destY].height;
            var jump: number = tileMap[originX][originY].height + this.jump;

            if (height > jump) {
                return false;
            }

            return true;
        }

        private isInPath = (path: number[][], destX: number, destY: number): boolean => {
            for (var i = 0; i < path.length; i++) {
                if (path[i][0] === destX && path[i][1] === destY) {
                    return true;   // Found it
                }
            }

            return false;
        }
    }
}

var game: Logic.IMain = new Logic.Main();