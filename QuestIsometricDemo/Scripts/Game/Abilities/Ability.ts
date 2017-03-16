module Abilities {
    'use strict';

    export interface IAbility {
        name: string;
        description: string;
        type: Ability;
        AP: number;
        job: Job[];
        //effect: any;
    }

    export var action: IAbility[] = [];
    export var reaction: IAbility[] = [];
    export var support: IAbility[] = [];
    export var combo: IAbility[] = [];
}