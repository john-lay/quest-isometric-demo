/// <reference path="../../typings/phaser/phaser.d.ts" />
interface ITile {
    height: number;
    blocked: boolean;
    canMove: boolean;
    tileGraphic: Phaser.Graphics;
    tileStyle: ITileStyle;
}