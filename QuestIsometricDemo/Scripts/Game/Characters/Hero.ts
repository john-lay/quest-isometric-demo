module Character {
    'use strict';

    export interface IHero {
        // PROPERTIES
        name: string;
        derivedStats: IEntity;
        job: Job;
        equipped: IEntity[];

        // PUBLIC METHODS
        calcStats();
    }

    export class Hero implements IHero {
        name = 'Marche';
        job = Job.Soldier;
        equipped = [Weapons.bloodSword];
        private baseStats: IEntity = {
            atk: 1,
            def: 1,
            magPwr: 1,
            magRst: 1,
            spd: 1,
            eva: 1
        };

        derivedStats = {
            atk: 1,
            def: 1,
            magPwr: 1,
            magRst: 1,
            spd: 1,
            eva: 1
        };

        calcStats = () => {
            
        }
    }
} 