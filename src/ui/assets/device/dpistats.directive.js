app.directive('dpistats', ['DeviceService', function(DeviceService) {
	var directive = {}
	directive.templateUrl = "assets/device/device-table.html";

	directive.link = function ($scope, element, attrs) { 
		// content of directive
		$scope.placeholder_text = "search for ...";
		$scope.params = ["box_id", "status"]
		$scope.table_headers = ["Time", "Box ID", "Status"];
		$scope.current_page = 1;
		$scope.search_val = "";	
		$scope.search_validation = true;	

		DeviceService.getDpiStats(null, 1).then(function(response) {
			$scope.table_data = response.data.content;	
			$scope.table_count = response.data.count;
		});

		$scope.update_search = function() {
			DeviceService.getDpiStats($scope.search_val, $scope.current_page).then(function successCallback(response) {
				$scope.table_data = response.data.content;	
				$scope.table_count = response.data.count;
				$scope.search_validation = true;
			}, function errorCallback(response) {
			    $scope.search_validation = false;
		    });
		}

		$scope.change_page = function() {
			if ($scope.current_page != null || $scope.current_page != "") {
				DeviceService.getDpiStats($scope.search_val, $scope.current_page).then(function(response) {
					$scope.table_data = response.data.content;	
					$scope.table_count = response.data.count;
				});
			}
		}

		$scope.inc_page_num = function(num) {
			if ($scope.current_page + num  >= 1) {
				$scope.current_page += num;
				if ($scope.current_page != null || $scope.current_page != "") {
					DeviceService.getDpiStats($scope.search_val, $scope.current_page).then(function(response) {
						$scope.table_data = response.data.content;	
						$scope.table_count = response.data.count;
					});
				}
			}
		}
		// content of directive
	}
	return directive;
}]);
