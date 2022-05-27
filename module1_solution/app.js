(function () {
	'use strict';

	angular
		.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);
		
		LunchCheckController.$inject = ['$scope']; // TO PROTECT THE CODE FROM MINIFICATION

		function LunchCheckController($scope) {
			$scope.menuCheck = menuCheck;
			$scope.message = '';

			function menuCheck() {
				if ($scope.lunchMenu != undefined) {
					var menuArray = $scope.lunchMenu.split(',');
					var filteredMenuArray = menuArray.filter(function (e) {
						e = e.trim();
						return e != '';
					});
					$scope.message = filteredMenuArray.length > 3 ? 'Too much!' : 'Enjoy!';
				} else {
					$scope.message = 'Please enter data first';
				}
			}
		}

})();
