app.controller('ScheduleController', function($scope, ScheduleService) {    

	$scope.section_title = "Demo Table"
	$scope.table_headers = ["ID", "Name"];

	ScheduleService.get_data().then(function(response) {
		$scope.schedule = response.data;
	});

	$scope.add_one = function(name) {
		console.log("adding " + name);
		ScheduleService.add_one(key).then(function(response) {});
	}

	$scope.delete_one = function(key) {
		console.log("deleting " + key);
		ScheduleService.delete_one(key).then(function(response) {});
	};
	
});
