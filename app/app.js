
angular.module('calendarDemoApp', [])
	.directive('monthAndYear', function() {
		return {
			restrict: 'E',
			templateUrl: 'monthAndYear.html',
			controller: function($scope) {

				$scope.monthOptions = [
					"January", "February", "March", "April", "May", "June", "July",
					"August", "September", "October", "November", "December"
				]

				$scope.yearOptions = [];
				for (var i = 1996; i < 2037; i++) {
					$scope.yearOptions.push(i);
				}

				$scope.change = function() {
					var month = $scope.confirmMonth;
					month = $scope.monthOptions.indexOf(month);
					var year = $scope.confirmYear;

					var date = new Date(year, month);
					var monthlyRange = CalendarRange.getMonthlyRange(date);

					$scope.range = monthlyRange;
					console.log($scope.range);
					//console.log($scope.range.first);
					//console.log($scope.range.start);
					//console.log($scope.range.end);
					//console.log($scope.range.last);

				}

				$scope.checkDay = function(day) {
					if ($scope.range.start.getMonth() === day.date.getMonth()) {
						return false;
					}
					return true;
				}
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