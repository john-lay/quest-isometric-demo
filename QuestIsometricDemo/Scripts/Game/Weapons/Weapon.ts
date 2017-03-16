module Weapons {
    'use strict';

    export interface IWeapon {
        // PROPERTIES
        name: string;
        description: string;
        //type: WeaponType;
        abilities: Abilities.IAbility[];

        atk: number;
        def: number;
        magPwr: number;
        magRst: number;
        spd: number;
        eva: number;
        cost: number;

        // elemental properties
        ele: MagicalElement[];
        absEle: MagicalElement[];
        halfEle: MagicalElement[];
        nullEle: MagicalElement[];

        // effect properties
        causeEfe: MagicalEffect[];
        removeEfe: MagicalEffect[];
        nullEfe: MagicalEffect[];
    }

    export var swords: IWeapon[] = [];
    export var blades: IWeapon[] = [];
    export var sabers: IWeapon[] = [];
    export var knightSwords: IWeapon[] = [];
    export var greatSwords: IWeapon[] = [];
    export var broadSwords: IWeapon[] = [];
    export var knives: IWeapon[] = [];
    export var rapiers: IWeapon[] = [];
    export var katanas: IWeapon[] = [];
    export var staves: IWeapon[] = [];
    export var rods: IWeapon[] = [];
    export var maces: IWeapon[] = [];
    export var bows: IWeapon[] = [];
    export var greatBows: IWeapon[] = [];
    export var spears: IWeapon[] = [];
    export var instruments: IWeapon[] = [];
    export var knuckles: IWeapon[] = [];
    export var souls: IWeapon[] = [];
    export var guns: IWeapon[] = [];
}  