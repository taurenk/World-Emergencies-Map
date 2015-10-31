
var appControllers = angular.module('appControllers', []);

appControllers.controller('mapController', function($scope, USGSApi, TsunamiApi, geolocation){

    $scope.markers = [];
    $scope.options = {scrollwheel: false};

    geolocation.getLocation()
        .then(function(data){
            $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
            $scope.map = {center: {latitude: data.coords.latitude, longitude: data.coords.longitude }, zoom: 10};
        })
        .catch(function(response) {
             $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 1 };
        })

    $scope.onClick = function(model) {
        model.show = !model.show;
    };

    // Set Markers - TODO; service to handle making markers
    $scope.markers.earthquakes = [];
    $scope.markers.earthquakes.options = {icon:'/static/markers/earthquake-3.png'};

    $scope.testData = USGSApi.getEarthquakes()
        .success(function (response) {
            $scope.testData = response['features'];
            for (x in response['features']) {
                data = {id: 'eq'+x, title: $scope.testData[x]['properties']['title'], show: false,
                        magnitude: $scope.testData[x]['properties']['mag'],
                        time: $scope.testData[x]['properties']['time'],
                        place: $scope.testData[x]['properties']['place'],
                        detail: $scope.testData[x]['properties']['detail'],
                        latitude: $scope.testData[x]['geometry']['coordinates'][1],
                        longitude: $scope.testData[x]['geometry']['coordinates'][0]}
                $scope.markers.earthquakes.push(data);
            };

        })
        .error(function (response) {
            $scope.testData = response;
        });


    $scope.tsunamiData = TsunamiApi.getUSTusnamis()
        .success(function(data) {
            //$scope.tsunamiData = data;
        })
        .error(function(errorResponse){
                $scope.tsunamiData = 'Error: ' + errorResponse;
         });
});