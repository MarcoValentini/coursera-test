/*(function () {
	'use strict';

	angular
		.module('myFirstApp', [])
		.controller('DIController', DIController);
		
		DIController.$inject = ['$scope', '$filter']; // TO PROTECT THE CODE FROM MINIFICATION

		function DIController($scope, $filter) {
      $scope.name = 'Marco';
      $scope.upper = upper;
      $scope.lower = lower;

      function upper() {
      	var upCase = $filter('uppercase');
      	$scope.name = upCase($scope.name);
      }

      function lower() {
      	var lowCase = $filter('lowercase');
      	$scope.name = lowCase($scope.name);
      }
		}

})();*/

!function(){"use strict";function e(e,n){e.name="Marco",e.upper=function(){var r=n("uppercase");e.name=r(e.name)},e.lower=function(){var r=n("lowercase");e.name=r(e.name)}}angular.module("myFirstApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
