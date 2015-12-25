// in the controller, we need to use the forecast service to fetch data from the server. First we add forecast into maincontroller as a dependency so that it is available for use. Then within the controller we used forecast to asynchronously fetch the weather data from the server and store it into $scope.fiveDay
app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data){
    $scope.fiveDay = data;
  });

}]);
