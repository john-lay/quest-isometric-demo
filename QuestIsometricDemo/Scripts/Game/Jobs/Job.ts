module Jobs {
    'use strict';

    export interface IJob {
        // PROPERTIES
        hp: number;
        mp: number;

        atk: number;
        magPwr: number;
        magRst: number;
        spd: number;
        eva: number;

        move: number;
        jump: number;

        weapon: WeaponType[];
    }
} 