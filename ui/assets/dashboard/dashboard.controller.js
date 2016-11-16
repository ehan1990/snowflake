app.controller('DashboardController', function($scope, $state, DashboardService) {    

	$scope.section_title = "Middleware";

	DashboardService.getMwList().then(function(response) {
		$scope.dashboard_data = response.data;	
	});

	$scope.to_detail = function(serial) {
		$state.go('device', {'serial': serial});
	};

	$scope.to_chart = function(serial) {
		$state.go('device-chart', {'serial': serial});
	};
});
