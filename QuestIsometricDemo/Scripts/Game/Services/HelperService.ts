/// <reference path="../../typings/angularjs/angular.d.ts" />
module HelperModule {
    'use strict';

    export interface IHelperService {
        enumToViewModel(enumerator: any): IEnumViewModel[];
        isNumeric(n:any): boolean;
    }

    export class HelperService {

        static $inject = ["$http", "$q", "$rootScope"];

        private $http: ng.IHttpService;
        private $q: ng.IQService;
        private $rootScope: ng.IRootScopeService;

        constructor(http: ng.IHttpService, q: ng.IQService, rootScope: ng.IRootScopeService) {
            this.$http = http;
            this.$q = q;
            this.$rootScope = rootScope;
        }

        enumToViewModel(enumerator) {
            var vm: IEnumViewModel[] = [];

            for (var key in enumerator) {
                if (enumerator.hasOwnProperty(key) && this.isNumeric(key)) {
                    //vm.push({ value: key, text: enumerator[key] });
                }
            }

            return vm;
        }

        isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
    }
}

app.service("HelperService", HelperModule.HelperService); 