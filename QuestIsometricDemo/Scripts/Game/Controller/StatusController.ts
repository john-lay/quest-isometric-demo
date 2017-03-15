/// <reference path="../../typings/angularjs/angular.d.ts" />
module StatusModule {
    'use strict';

    /*** ANGULAR SCOPE ***/
    export interface IStatusScope extends ng.IScope {
        // PROPERTIES
        swords: Weapons.IWeapon[];

        vm: {
            characterClass: CC;
            weapon: Weapons.IWeapon;
        }

    // PUBLIC METHODS

    }

    // Debug only
    export var statusScope;

    /*** ANGULAR CONTROLLER ***/
    export class StatusController {

        static $inject = ["$scope"];

        constructor($scope: IStatusScope) {
            
            // Debug only
            statusScope = $scope;

            $scope.swords = Weapons.swords;

            $scope.vm = {
                characterClass: null,
                weapon: null
            }
        }
    }
}

// Attach the controller to the app
app.controller("StatusController", StatusModule.StatusController);