module Weapons {
    'use strict';

    export interface ISword {
        // PROPERTIES
        name: string;
        description: string;
        type: Equip;
        attack: number;
        defence: number;
        weight: number;

        // PUBLIC METHODS
    }

    export class LongSword implements ISword {
        // PROPERTIES
        name = "Long Sword";
        description = "A long sword favoured by knights";
        type =  Equip.Sword;
        attack = 40;
        defence = 10;
        weight = 4;

        // PUBLIC METHODS
    }
} 