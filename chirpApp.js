//chirpApp.js
//This is a module that contains all the Angular app logic.
//Adds a controller called 'main controller' that handles
//core functionality.

var app = angular.module('chirpApp', []);


//We are invoking a '$scope' object while constructing our mainController,
//$scope is the 'M' in 'MVC' i.e. it is the path between the 'View'
//and the 'Controller' through whih we can pass data and functions

app.controller('mainController', function($scope){

  //Next, attach a 'posts' array to store all the posts that are created

  $scope.posts = [];

  //Now, we tack on a 'newPost' to $scope to store meta on the post that's
  //being created, creating an object with the meta fields below

  $scope.newPost = {created_by: '', text: '', created_at: ''};


  //Here is a function that will add the contents of 'newPosts' to the 'posts'
  //array whenever the 'Tweet' button is pressed

  $scope.post = function(){
    $scope.newPost.created_at = Date.now();
    $scope.posts.push($scope.newPost);
    $scope.newPost = {created_by: '', text: '', created_at: ''};
  };
});
