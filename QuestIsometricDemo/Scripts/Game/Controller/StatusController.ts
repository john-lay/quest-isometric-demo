/// <reference path="../../typings/angularjs/angular.d.ts" />
module StatusModule {
    'use strict';

    /*** ANGULAR SCOPE ***/
    export interface IStatusScope extends ng.IScope {
        // PROPERTIES
        loginData: any;
        modal: any;
        pictureUrl: string;

        // PUBLIC METHODS
        closeLogin(): void;
        login(): void;
        doLogin(): void;
        GetPicture(): void;

    }

    // Debug only
    export var statusScope;

    /*** ANGULAR CONTROLLER ***/
    export class StatusController {

        static $inject = ["$scope"];

        constructor(scope: IStatusScope) {
            
            // Debug only
            statusScope = scope;           
        }
    }
}

// Attach the controller to the app
app.controller("StatusController", StatusModule.StatusController);