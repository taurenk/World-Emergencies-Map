
var appServices = angular.module('appServices', []);

appServices.factory('USGSApi', ['$http', function ($http) {

    baseUrl = 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';

    return {
        getEarthquakes: function () {
            return $http.get(baseUrl + '&starttime=2015-10-19&endtime=2015-10-19' );
        }
    }


}]);