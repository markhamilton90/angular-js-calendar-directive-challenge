
describe("calendar", function() {

	var $scope,
	template,
	element;

	beforeEach(module("calendarDemoApp"));
	beforeEach(module('calendar.html'));
	beforeEach(inject(function($rootScope, $compile) {

		$scope = $rootScope.$new();
		var element = angular.element("<calendar></calendar>");
		template = $compile(element)($scope);
		$scope.$digest();

	}));
	it('should render the element properly', function() {
		expect(template.find('select').length).toBe(2);
		expect(template.find('option').length).toBe($scope.yearOptions.length + $scope.monthOptions.length);
		expect(template.find('select#month').attr('ng-model')).toBe('confirmMonth');
		expect(template.find('select#year').attr('ng-model')).toBe('confirmYear');
		expect(template.find('select').attr('ng-change')).toBe('change()');
		expect(template.find('li').length).toBe(42);
	});
	it('should re-render for the date and month specified', function() {		
		var d = new Date(2016, 7); // August 2016
		var month = d.getMonth();
		var year = d.getFullYear();

		expect($scope.checkDay).toBeDefined();
		expect($scope.range.start.getMonth()).toBe(0);
		// first day in range for Jan 2016 should be grayed out (true)
		expect($scope.checkDay($scope.range.days[0])).toBe(true);
		// start day in range for Jan 2016 should not be gray (false)
		expect($scope.checkDay($scope.range.days[5])).toBe(false);

		$scope.change(month, year);
		$scope.$digest();

		expect($scope.checkDay($scope.range.days[0])).toBe(true);
		expect($scope.checkDay($scope.range.days[1])).toBe(false);
		expect(template.find('li').length).toBe(35);
		// four of the calendar cells should be gray
		expect(template.find('li.gray').length).toBe(4);


	});

});