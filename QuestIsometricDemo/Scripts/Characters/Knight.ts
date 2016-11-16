/// <reference path="../typings/babylonjs/babylon.d.ts" />
/// <reference path="../Core/Enums.ts" />
module Characters {
    'use strict';

    export interface IKnight {
        // PROPERTIES
        equippable: Equip[];

        // PUBLIC METHODS
    }
    export class Knight implements IKnight {
        // PROPERTIES
        equippable = [Equip.Sword, Equip.Armour, Equip.Accessory, Equip.Accessory];

        constructor() {
            
        }

        // PUBLIC METHODS
    }
} 