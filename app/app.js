
angular.module('calendarDemoApp', [])
	.controller('CalendarCtrl', function($scope, $element) {
		//var month = $element.find("select")[0];
		//var year = $element.find("select")[1];

		$scope.monthOptions = [
			"January", "February", "March", "April", "May", "June", "July",
			"August", "September", "October", "November", "December"
		]

		$scope.yearOptions = [];
		for (var i = 1996; i < 2037; i++) {
			$scope.yearOptions.push(i);
		}

		$scope.change = function() {
			console.log($scope.confirmMonth);
		}

		var ctrl = this;
	})
	.directive('calendar', function() {
		return {
			restrict: 'E',
			templateUrl: 'calendar.html',
			scope: true,
			
		}
	})