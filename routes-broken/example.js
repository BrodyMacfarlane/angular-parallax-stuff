

				
	var app = angular.module('testApp', ['mrResponsiveParallax', 'ngRoute']);


	app.config(function($routeProvider){
		$routeProvider
		.when('/home', {
			templateUrl: 'templates/main.html',
		})
		.otherwise({
			redirectTo: 'home'
		})
	})
