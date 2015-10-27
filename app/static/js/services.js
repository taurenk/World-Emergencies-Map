
var appServices = angular.module('appServices', []);

appServices.factory('USGSApi', ['$http', function ($http) {

    baseUrl = 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';

    return {
        getEarthquakes: function () {
            return $http.get(baseUrl + '&starttime=2015-10-18&endtime=2015-10-19&minmagnitude=3.0' );
        }
    }

}]);


appServices.factory('TsunamiApi', ['$http', function ($http) {

    return {
        getUSTusnamis: function () {
            //return $http.get('http://ntwc.arh.noaa.gov/events/xml/PAAQCAP.xml');
            return $http.get('http://127.0.0.1:5000/tsunamis');
        }
    }

}]);