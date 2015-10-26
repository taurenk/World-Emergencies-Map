
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
    //delete $http.defaults.headers.common['X-Requested-With'];
     $http.defaults.useXDomain = true;
    return {
        getUSTusnamis: function () {
            //return $http.get('http://ntwc.arh.noaa.gov/events/xml/PAAQCAP.xml');
            return $http.get('http://wcatwc.arh.noaa.gov/cap/v1.1/WEAK53CAP.xml');
        }
    }

}]);