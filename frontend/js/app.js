var app = angular.module('disasterMaps', ['ui.router', 'appControllers', 'appServices', 'uiGmapgoogle-maps', 'geolocation']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {


      $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = 'Content-Type: application/json';


    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/partial-map.html',
            controller: 'mapController'
        });

});
