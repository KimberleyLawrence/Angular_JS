// creating a new directive to teach the browser of a new html element. app.directive created a new directive named appInfo. It returns with 3 options:
//restrict - specifies how the directive will be used in the view, the 'E' means it will be used as a new HTML element
//scope - specifies that we will pass information into theis directive through an attribute named info. The = tells the directive to look for an attribute named info and the app-info element, like this: <app-info info="shutterbug"></app-info>. The data in info becomes available to use in the template given by templateURL
//templateURL specifies the HTML to use in order to display the data in scope.info. found in appInfo.html
app.directive('appInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
  
 };
});
  };
});
