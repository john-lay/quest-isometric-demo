module Weapons {
    'use strict';

    export var ragnarok: IWeapon = {
        name: "Ragnarok",
        description: "A long sword favoured by knights",
        type: WeaponType.Sword,
        equipBy: [CC.Knight],
        attack: 40,
        defence: 10,
        weight: 4
    }

    swords.push(ragnarok);
} 