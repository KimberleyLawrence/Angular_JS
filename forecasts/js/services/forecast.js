// this made a new service - using app.factory to create a new service name called forecast
app.factory('forecast', ['$http', function($http) {
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
