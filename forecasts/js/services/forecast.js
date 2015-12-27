// creating a new service
// the forecast service needs to use AngularJS built in $http to fetch JSON from the server, therefore we add $http to the forecast as a dependency [ 'http', function($http).. now http is available to use inside forecast
// services are useful for filling the controller with code to fetch the weather data from a server, it is better to move this independent data into a service so that it can be reused by other parts of the app.
//Directives are a way to make stand alone components like app-info
//services are a way to make stand alone communication logic, like forecast that fetched weather data from a service
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
