//creating a new directive name, following from appInfo.js file
app.directive('installApp', function(){
  return{
    restrict: 'E',
    scope:{},
    templateUrl: 'js/directives/installApp.html'
  };
});
