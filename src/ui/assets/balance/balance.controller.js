app.controller('BalanceController', function($scope, BalanceService) {    

	$scope.section_title = "Balance History"
	$scope.table_headers = ["ID", "Date", "Amount ($)", "User", "Balance ($)", "Description"];
	$scope.current_page = 1;

	BalanceService.get_schedule().then(function(response) {
		$scope.schedule = response.data;
	});
});
