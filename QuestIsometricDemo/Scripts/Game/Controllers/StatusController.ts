/// <reference path="../../typings/angularjs/angular.d.ts" />
module StatusModule {
    'use strict';

    export interface IStatusScope extends ng.IScope {
        // PROPERTIES
        swords: Weapons.IWeapon[];
        jobs: IEnumViewModel[];

        vm: {
            job: Job;
            weapon: Weapons.IWeapon;
        }

        // PUBLIC METHODS

    }

    // Debug only
    export var statusScope;

    export class StatusController {

        static $inject = ["$scope", "HelperService"];

        constructor($scope: IStatusScope, helperService: HelperModule.IHelperService) {
            
            // Debug only
            statusScope = $scope;

            $scope.swords = Weapons.swords;
            $scope.jobs = helperService.enumToViewModel(Job);
            $scope.vm = {
                job: null,
                weapon: null
            }
        }
    }
}

app.controller("StatusController", StatusModule.StatusController);