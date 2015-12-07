// creating a new controller called MainController, a controller manages the app's data. In this we use the property title to store a string and attach a scope
app.controller('MainController',
               ['$scope', function($scope) {
                 $scope.title = 'Top Sellers in Books';
               }]);
