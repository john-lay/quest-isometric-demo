module Weapons {
    'use strict';

    export interface IWeapon {
        // PROPERTIES
        name: string;
        description: string;
        type: WeaponType;
        equipBy: CC[];
        attack: number;
        defence: number;
        weight: number;
    }

    export class Ragnarok implements IWeapon {
        // PROPERTIES
        name = "Ragnarok";
        description = "A long sword favoured by knights";
        type = WeaponType.Sword;
        equipBy = [CC.Knight];
        attack = 40;
        defence = 10;
        weight = 4;

        // PUBLIC METHODS
    }
} 