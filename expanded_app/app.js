var app = angular.module('GalleryApp', ['ngRoute']);
//using the app.config method we use $routeProvider to define the apps routes
app.config(function ($routeProvider) {
  $routeProvider
  // we use .when to map the url= / to the controller HomeController and the template home.html. The homeController uses the service js/service/photos.js to fetch the array of all photos from a link and stores in $scope.photos. The home.html uses ng-repeat to then loop through the items in the photo array and display them
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'views/home.html'
    })
  // Otherwise of a user accidentally visits a URL other than / they are redirected to / using .otherwise()
    .otherwise({
      redirectTo: '/'
    });
});
//Not when a user visits /, a view will be contructed by injecting home.html into the <div ng-view></div> in index.htmlvar app = angular.module('GalleryApp', ['ngRoute']);
    .when('/photos/:id',{
    controller: 'PhotoController',
    templateUrl: 'views/photo.html'
    })
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'views/home.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
