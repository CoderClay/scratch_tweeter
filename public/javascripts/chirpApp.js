//chirpApp.js
//Here we will declare and intilaize a variable named 'app'.
//Next, we set the value of 'app' as 'angular.module('chirpApp', ['ngRoute'])'
//This is a big deal and what is going to make our app kick-ass...
var app = angular.module('chirpApp', ['ngRoute']);
//Here we are saying 'hey Angular!', I have this variable called 'app' and I
//am going to make it an angular.module now. Not only that, but I want to do
//some supper cool stuff too. I want to pass some params into angular.module to
//that when someone goes to our 'index.html' and rings our 'chirpApp' doorbell,
//it's going to come back here and ride angular.module into our app definition.
//But wait, there's more!! Angular, remember the nested-most div in our index.html?
//Well we're going to use that for...stuff. We dont know what yet, but you just wait,
//cause when we do....It's gonna be uuuuge!!




///////////////////////////////////////////////////////////////////////////////
//I'm going to skip over this for now. It's important, but I'm going to come back
//to it a little later (and it's kind of self explainitory).
app.config(function($routeProvider){
	$routeProvider
		//the timeline display
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		//the login display
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'authController'
		})
		//the signup display
		.when('/register', {
			templateUrl: 'register.html',
			controller: 'authController'
		});
});
///////////////////////////////////////////////////////////////////////////////


//To help visualize this next part, I'm going to copy->paste in the login partial.

//  <form class="form-auth" ng-submit="login()">
//     <h2>Log In</h2>
//     <p class="text-warning">{{error_message}}</p>
//     <input type="username" ng-model="user.username" placeholder="Username" class="form-control"><br>
//     <input type="password" ng-model="user.password" placeholder="Password" class="form-control"><br>
//     <input type="submit" value="Log in" class="btn btn-primary" />
//  </form>
//============================================================================//
//   So, above, we have the "class='form-auth'" and "ng-submit='login()'"
//============================================================================//
//The first important thing on this line is the ng-submit='login()' portion
//ng-submit is an Angular element that allows an on-submit event to be bound
//to an Angular expression.Powerful stuff.
//So this is, basically, telling Angular that on ->ClickEvent<- call the 'login()'
//function.
//Once the login() function is called on the index>login page, this page is accessed
//and the path hits the $routeProvider, which bounces it towards our appControllers,
//specifically looking to call the authController..
//Notice, this is exactly where 'register' goes, the same function controls both
//calls in our app.

app.controller('mainController', function($scope){
	$scope.posts = [];
	$scope.newPost = {created_by: '', text: '', created_at: ''};

	$scope.post = function(){
		$scope.newPost.created_at = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {created_by: '', text: '', created_at: ''};
	};
});


//Once we iterate through our app.controllers and ping the authController,
//we call our authController function.
//Our request enters the $scope and sees that we are calling 'user' by the data
//callection {username and password}. We havent added any authentication, yet, but
//when we do, this function will ask "does 'user' === {username, password}?"
//If yes, then we climb back out of our function hole and we'll hit another route,
//but if the answer is no, deeper into the hole we dive until we hit the error_message.
app.controller('authController', function($scope){
	$scope.user = {username: '', password: ''};
	$scope.error_message = '';

	$scope.login = function(){
		$scope.error_message = 'login request for ' + $scope.user.username;
	};

	$scope.register = function(){
		$scope.error_message = 'registration request for ' + $scope.user.username;
	};
});
