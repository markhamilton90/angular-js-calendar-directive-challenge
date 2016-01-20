
angular.module('calendarDemoApp', [])
	.directive('calendar', function() {
		return {
			restrict: 'E',
			templateUrl: 'calendar.html',
			controller: function($scope) {

				var date = new Date();
				var month = date.getMonth();
				var year = date.getFullYear();

				$scope.monthOptions = [
					"January", "February", "March", "April", "May", "June", "July",
					"August", "September", "October", "November", "December"
				]

				$scope.yearOptions = [];
				for (var i = (year - 20); i < (year + 20); i++) {
					$scope.yearOptions.push(i);
				}

				$scope.change = function(x, y) {
					if (y) { // because January index for x (0) evaluates to falsy
						var month = x;
						var year = y;
					} else {
						var month = $scope.confirmMonth;
						month = $scope.monthOptions.indexOf(month);
						var year = $scope.confirmYear;
					}
					var date = new Date(year, month);
					var monthlyRange = CalendarRange.getMonthlyRange(date);
					$scope.range = monthlyRange;
				}

				$scope.checkDay = function(day) {
					if ($scope.range.start.getMonth() === day.date.getMonth()) {
						return false;
					}
					return true;
				}

				$scope.change(month, year);
			}
		}
	});