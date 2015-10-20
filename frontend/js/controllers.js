
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

    // Set Markers - TODO; service to handle current markers
    $scope.markers = [];
    var marker1 = {id: 1, latitude: 37.769, longitude: -122.44, title:'Test Marker!', content: 'content. ', show: false};
    $scope.markers.push(marker1);



    // Should be some sort of service
    $scope.testData = USGSApi.getEarthquakes()
        .success(function (response) {
            $scope.testData = response['features'];
            for (x in response['features']) {
                data = {id: 'eq'+x, title: $scope.testData[x]['properties']['title'], show: false,
                        content: 'mag: ' + $scope.testData[x]['properties']['mag'],
                        latitude: $scope.testData[x]['geometry']['coordinates'][1],
                        longitude: $scope.testData[x]['geometry']['coordinates'][0]};
                $scope.markers.push(data);
            };

        })
        .error(function (response) {
            $scope.testData = response;
        });



});