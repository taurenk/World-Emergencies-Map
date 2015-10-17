var app = angular.module('disasterMaps', ['ui.router', 'appControllers', 'appServices', 'uiGmapgoogle-maps']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/partial-map.html',
            controller: 'mapController'
        });

});
