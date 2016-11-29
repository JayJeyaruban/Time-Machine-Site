'use strict';

/**
 * @ngdoc overview
 * @name timeMachineSiteApp
 * @description
 * # timeMachineSiteApp
 *
 * Main module of the application.
 */
angular
    .module('timeMachineSiteApp', [
        'ngRoute'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
            })
            .when('/background', {
                templateUrl: 'views/background.html'
            })
            .when('/requirements', {
                templateUrl: 'views/requirements.html'
            })
            .when('/research', {
                templateUrl: 'views/research.html'
            })
            .when('/prototype', {
                templateUrl: 'views/prototype.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
