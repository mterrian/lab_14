var app = angular.module('catdogApp');

app.config(function($routeProvider){

	$routeProvider
		.when('/',{
			controller: 'catCtrl',
			templateUrl: 'cat.html'
		})
		.when('/cat', {
			controller: 'catCtrl',
			templateUrl: 'cat.html'
		})
		.when('/dog',{
			controller: 'dogCtrl',
			templateUrl: 'dog.html'
		})
		.when('/error', {
		  controller:'winslowCtrl',
		  templateUrl: 'winslow.html'
		})
		.otherwise({redirectTo: "/error"});
});