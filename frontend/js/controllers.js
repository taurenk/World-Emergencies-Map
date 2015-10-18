
var appControllers = angular.module('appControllers', []);

appControllers.controller('mapController', function($scope, RSOEApi, geolocation){

    geolocation.getLocation()
        .then(function(data){
            $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
            $scope.map = {center: {latitude: data.coords.latitude, longitude: data.coords.longitude }, zoom: 14 };
        })
        .catch(function(response) {
             $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
        })

    $scope.options = {scrollwheel: false};

    $scope.testData = RSOEApi.getEarthquakes()
        .success(function (response) {
            //alert('Pass: '+ response);
        })
        .error(function (response) {
            //alert('Fail: ' + response);
        });



});