var app = angular.module('disasterMaps', ['ui.router', 'appControllers',
    'appServices', 'uiGmapgoogle-maps',
    'geolocation', 'xml']);

app.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    //$httpProvider.defaults.xsrfCookieName = 'csrftoken';
    //$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/partial-map.html',
            controller: 'mapController'
        });

});
