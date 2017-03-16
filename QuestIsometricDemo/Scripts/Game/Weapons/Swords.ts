module Weapons {
    'use strict';

    export var bloodSword: IWeapon = {
        name: 'Blood Sword',
        description: 'Sword stained by the blood of many.',
        //type: WeaponType.Swords,
        abilities: [Abilities.provoke, Abilities.wyrmkiller],

        atk: 18,
        def: 0,
        magPwr: 0,
        magRst: 0,
        spd: 0,
        eva: 0,
        cost: 0,

        // elemental properties
        ele: [],
        absEle: [],
        halfEle: [],
        nullEle: [],

        // effect properties
        causeEfe: [],
        removeEfe: [],
        nullEfe: []
    }

    swords.push(bloodSword);
} 