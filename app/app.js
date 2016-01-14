
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

					console.log(month, year);

					var date = new Date(year, month);
					var monthlyRange = CalendarRange.getMonthlyRange(date);

					return monthlyRange;
					
					console.log(monthlyRange.first);
					console.log(monthlyRange.start);
					console.log(monthlyRange.end);
					console.log(monthlyRange.last);
					console.log(monthlyRange.days);
				}
			}
		}
	})
	.directive('calendar', function() {
		return {
			restrict: 'E',
			require: "^monthAndYear",
			templateUrl: 'calendar.html',

			
			
		}
	})