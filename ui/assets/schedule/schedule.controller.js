app.controller('ScheduleController', function($scope, ScheduleService) {    

	$scope.section_title = "Schedule"
	$scope.table_headers = ["ID", "Date", "Cost ($)", "Attendees", "Cost/Person ($)", "Paid By", "Description"];
	$scope.current_page = 1;

	ScheduleService.get_schedule().then(function(response) {
		$scope.schedule = response.data;
	});

	ScheduleService.get_simple_balance().then(function(response) {
		$scope.simple_balance = response.data;
	});
});
