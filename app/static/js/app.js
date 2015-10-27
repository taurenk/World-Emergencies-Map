var app = angular.module('disasterMaps', ['ui.router', 'appControllers',
    'appServices', 'uiGmapgoogle-maps',
    'geolocation']);

app.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'static/partials/partial-map.html',
            controller: 'mapController'
        });

});
