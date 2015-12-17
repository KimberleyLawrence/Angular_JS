// three objects are controlled in here, .move, .shutterbug, .gameboard, all that contain prices and titles
app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };
  $scope.forecast = {
    icon: 'img/forecast.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  };
  // new property
 $scope.apps = [
   {
     icon: 'img/move.jpg',
     title: 'MOVE',
     developer: 'MOVE, Inc.',
     price: 0.99
   },
   {
     icon: 'img/shutterbugg.jpg',
     title: 'Shutterbugg',
     developer: 'Chico Dusty',
     price: 2.99
   },
   //adding in 2 more objects of my own choosing
   {
     icon: 'http://www.lavasoft.com/mylavasoft/sites/default/files/official-pinterest-logo-tile-300x300.img_assist_custom-179x179.png',
     title: 'Pinterest',
     developer: 'Pinterest Guys',
     price: 0.10
   },
   {
     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png',
     title: 'LinkedIn',
     developer: 'Awesome peeps at LinkedIn',
     price: 0.00
   }
   ]
}]);
