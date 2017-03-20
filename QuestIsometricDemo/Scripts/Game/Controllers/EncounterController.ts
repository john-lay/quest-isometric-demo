/// <reference path="../../typings/angularjs/angular.d.ts" />
module EncounterModule {
    'use strict';

    export interface IEncounterScope extends ng.IScope {
        // PROPERTIES
        assailant: Character.IHero;
        victim: Character.IHero;
        attackDirection: Direction;

        // PUBLIC METHODS

    }

    // Debug only
    export var statusScope;

    export class EncounterController {

        static $inject = ["$scope"];

        constructor($scope: IEncounterScope) {
            
            // Debug only
            statusScope = $scope;
        }
    }
}

app.controller("EncounterController", EncounterModule.EncounterController); 