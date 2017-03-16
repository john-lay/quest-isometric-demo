module Abilities {
    'use strict';

    export var provoke: IAbility = {
        name: 'Provoke',
        description: 'Cause Berserk status',
        type: Ability.Action,
        AP: 300,
        job: [Job.Soldier]
    }

    action.push(provoke);

    export var wyrmkiller: IAbility = {
        name: 'Wyrmkiller',
        description: 'Heavy damage to Dragons',
        type: Ability.Action,
        AP: 300,
        job: [Job.Dragoon]
    }

    action.push(wyrmkiller);    
}