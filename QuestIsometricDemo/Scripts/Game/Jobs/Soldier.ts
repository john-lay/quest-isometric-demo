module Jobs {
    'use strict';

    export class Soldier implements IJob {
        // PROPERTIES
        hp = 8.4;
        mp = 1.1;

        atk = 8.8;
        magPwr = 6;
        magRst = 7.2;
        spd = 1.1;
        eva = 50;

        move = 4;
        jump = 2;

        weapon = [WeaponType.Swords, WeaponType.GreatSwords];
    }
} 