
var appControllers = angular.module('appControllers', []);

appControllers.controller('mapController', function($scope, USGSApi, geolocation){

    $scope.markers = [];
    $scope.options = {scrollwheel: false};

    geolocation.getLocation()
        .then(function(data){
            $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
            $scope.map = {center: {latitude: data.coords.latitude, longitude: data.coords.longitude }, zoom: 10 };
        })
        .catch(function(response) {
             $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 1 };
        })

    $scope.onClick = function(model) {
        model.show = !model.show;
    };

    // Set Markers
    $scope.markers = [];
    var marker1 = {id: 1, latitude: 37.769, longitude: -122.44, title:'Test Marker!', content: 'content. ', show: false};
    $scope.markers.push(marker1);




    $scope.testData = USGSApi.getEarthquakes()
        .success(function (response) {
            $scope.testData = response;
        })
        .error(function (response) {
            $scope.testData = response;
        });



});