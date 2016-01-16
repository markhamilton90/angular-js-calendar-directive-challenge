
angular.module('calendarDemoApp', [])
	.directive('monthAndYear', function() {
		return {
			restrict: 'E',
			templateUrl: 'monthAndYear.html',
			controller: function($scope) {

				var date = new Date();
				var month = date.getMonth();
				var year = date.getFullYear();
				console.log(month, year);

				$scope.monthOptions = [
					"January", "February", "March", "April", "May", "June", "July",
					"August", "September", "October", "November", "December"
				]

				$scope.yearOptions = [];
				for (var i = (year - 20); i < (year + 20); i++) {
					$scope.yearOptions.push(i);
				}

				$scope.change = function(x, y) {
					if (y) { // because January index for x evaluates to falsy
						var month = x;
						var year = y;
					} else {
						var month = $scope.confirmMonth;
						month = $scope.monthOptions.indexOf(month);
						var year = $scope.confirmYear;
						console.log(month, year);
					}

					var date = new Date(year, month);
					var monthlyRange = CalendarRange.getMonthlyRange(date);

					$scope.range = monthlyRange;
					console.log($scope.range);
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
	})
	.directive('calendar', function() {
		return {
			restrict: 'E',
			require: "^monthAndYear",
			templateUrl: 'calendar.html',
			link: function(scope, element, attrs, ctrl) {
				// change down here?
				console.log(ctrl.monthlyRange);



			}		
			
		}
	})