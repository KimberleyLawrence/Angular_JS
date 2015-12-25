// creating a new service
// the forecast service needs to use AngularJS built in $http to fetch JSON from the server, therefore we add $http to the forecast as a dependency [ 'http', function($http).. now http is available to use inside forecast
app.factory('forecast', ['$http', function($http) {
  // inside we use http.get to request the weather data, if successful the weather data is returned, otherwise an error is returned
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
             
