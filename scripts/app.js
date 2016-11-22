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
            .when('/about', {
                templateUrl: 'views/background.html'
            })
            .when('/research', {
                templateUrl: 'views/research.html'
            })
            .when('/ui', {
                templateUrl: 'views/ui.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
