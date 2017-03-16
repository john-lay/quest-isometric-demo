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

    export var swords: IWeapon[] = [];
}  