app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This Month\'s Bestsellers';
  $scope.promo = 'The most popular books this month.';
  //removed old scope
  //adding new scope.product with and array of objects, storing 2 objects in this case
  $scope.products = [
   	 {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date ('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpg',
       // adding in a new property to track an interactive feature called likes
      likes: 0,
       // adding in a new property dislikes
      dislikes :0
  	  },
   	 {
      name: 'Program or be Programmed',
   	  price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg',
      likes: 0,
      dislikes : 0
  		},
     {
    	name: 'My first favourite Book',
    	price: 10,
    	pubdate: new Date ('2015', '02', '17'),
    	cover: 'http://swh.schoolworkhelper.netdna-cdn.com/wp-content/uploads/2012/06/Looking-for-Alibrandi-1.jpg?e6ecea',
      likes: 0,
      dislikes :0
    	},
   	{
      name: 'My second favourite book',
      price: 20,
      pubdate: new Date ('2015', '05', '12'),
      cover: 'http://ecx.images-amazon.com/images/I/51DOzsjzV%2BL._SX385_BO1,204,203,200_.jpg',
      likes: 0,
      dislikes : 0
      }
  ]
  //Adding in a new function to start the interactive component to the apps like counter. Codacademy wanted it written exact as the function, but don't forget to create a name to call to then be able to implement the function
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
    };
  // adding in minusOne - a new property for a dislike button
   $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
    };


}]);
