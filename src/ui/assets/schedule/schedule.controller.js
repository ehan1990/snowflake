app.controller('ScheduleController', function($scope, ScheduleService) {    

	$scope.section_title = "Demo Table"
	$scope.table_headers = ["ID", "Name"];

	function update_page() {
		ScheduleService.get_data().then(function(response) {
			$scope.schedule = response.data.content;
		});
	}

	$scope.add_one = function(name) {
		ScheduleService.add_one(name).then(function(response) {});
		update_page();
	}

	$scope.delete_one = function(key) {
		ScheduleService.delete_one(key).then(function(response) {});
		update_page();
	};
	
});
