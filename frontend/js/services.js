
var appServices = angular.module('appServices', []);

appServices.factory('RSOEApi', ['$http', function ($http) {

    baseUrl = 'https://hisz.rsoe.hu/ws/';

    return {
        getEarthquakes: function () {
            return $http.get(baseUrl + '' );
        }
    }


}]);