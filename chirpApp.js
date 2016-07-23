//chirpApp.js

var app = angular.module('chirpApp', []);
app.controller('mainController', function($scope){
  $scope.posts = [];
  $scope.newPost = {created_by: '', text: '', created_at: ''};

  $scope.post = function(){
    $scope.newPost.created_at = Date.now();
    $scope.posts.push($scope.newPost);
    $scope.newPost = {created_by: '', text: '', created_at: ''};
  };
});


//Adding our auth controller to $scope here.
//This adds 'username' and 'password' functionality to our app
//Here, both 'login' and 'register' use the same authcontroller for ease
//and simplicity
app.controller('authController', function($scope){
  //Here we are adding an empty user to our $scope
  $scope.user = {username: '', password: ''};
  //Here we are adding an 'error' message to pass into our scope
  $scope.error_message = '';

  $scope.login = function(){
    //This is all semantic place holder garbage because we ont have a backend yet
    $scope.error_message = 'login request for ' + $scope.user.username;
    //Above is what we return if the login auth fails
  };

  $scope.register = function(){
    //placeholder until authentication is implemented
    $scope.error_message = 'registeration request for ' + $scope.user.username;
    //Above is what we return if the registration auth fails
  };
});
