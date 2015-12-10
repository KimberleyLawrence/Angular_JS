// creating a new controller called MainController, a controller manages the app's data. In this we use the property title to store a string and attach a scope
app.controller('MainController',
               ['$scope', function($scope) {
                 $scope.title = 'My own string';
                 //adding new property - promo
                 $scope.promo = 'Promos own string';
                 $scope.product= {
                   name: 'The life of Trees',
                   price: 19,
                   //adding in a new property year, month, date
                   pubdate: new Date('2014', '03', '08')
                 }
               }]);
