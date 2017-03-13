module CharacterClass {
    'use strict';

    export interface ISoldier {
        // PROPERTIES
        hp: number;
        mp: number;
        move: number;
        jump: number;

        // PUBLIC METHODS
    }

    export class Soldier implements ISoldier {
        // PROPERTIES
        public hp = 12;
        public mp = 4;
        public move = 2;
        public jump = 1;

        constructor() {

        }
    }
} 