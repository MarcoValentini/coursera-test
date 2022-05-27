(function () {
	'use strict';

	angular
		.module('myApp', [])
		.controller('myCtrl', myCtrl);
		
		myCtrl.$inject = ['$scope']; // TO PROTECT THE CODE FROM MINIFICATION

		function myCtrl($scope) {

		}

})();
