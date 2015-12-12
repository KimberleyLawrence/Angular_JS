// creating a new controller called MainController, a controller manages the app's data. In this we use the property title to store a string and attach a scope
app.controller('MainController',
               ['$scope', function($scope) {
                 $scope.title = 'My own string';
                 //adding new property - promo
                 $scope.promo = 'Promos own string';
                 $scope.products = [
   	 {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date ('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpg'
  	  },
   	 {
      name: 'Program or be Programmed',
   	  price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg'
      },
      {
      name: 'My first favourite Book',
      price: 10,
      pubdate: new Date ('2015', '02', '17'),
      cover: 'http://swh.schoolworkhelper.netdna-		cdn.com/wp-content/uploads/2012/06/Looking-for-Alibrandi-1.jpg?e6ecea'
    },
    {
      name: 'My second favourite book',
      price: 20,
      pubdate: new Date ('2015', '05', '12'),
      cover: 'http://ecx.images-amazon.com/images/I/51DOzsjzV%2BL._SX385_BO1,204,203,200_.jpg'
    }
    ]
               }]);
