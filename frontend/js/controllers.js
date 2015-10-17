
var appControllers = angular.module('appControllers', []);

appControllers.controller('mapController', function($scope){
    $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
    $scope.options = {scrollwheel: false};
});