app.directive('etable', [function() {
	var directive = {}
	directive.templateUrl = "assets/table/table.html";

	directive.link = function ($scope, element, attrs) { 
		// content of directive

		// console.log(attrs.info);
		// $scope.service = attrs.service;

		// console.log($scope.service.test());

		// DeviceService.getDpiStats(null, 1).then(function(response) {
		// 	$scope.table_data = response.data.content;	
		// 	$scope.table_count = response.data.count;
		// });

		// $scope.update_search = function() {
		// 	DeviceService.getDpiStats($scope.search_val, $scope.current_page).then(function successCallback(response) {
		// 		$scope.table_data = response.data.content;	
		// 		$scope.table_count = response.data.count;
		// 		$scope.search_validation = true;
		// 	}, function errorCallback(response) {
		// 	    $scope.search_validation = false;
		//     });
		// }

		// $scope.change_page = function() {
		// 	if ($scope.current_page != null || $scope.current_page != "") {
		// 		DeviceService.getDpiStats($scope.search_val, $scope.current_page).then(function(response) {
		// 			$scope.table_data = response.data.content;	
		// 			$scope.table_count = response.data.count;
		// 		});
		// 	}
		// }

		// $scope.inc_page_num = function(num) {
		// 	if ($scope.current_page + num  >= 1) {
		// 		$scope.current_page += num;
		// 		if ($scope.current_page != null || $scope.current_page != "") {
		// 			DeviceService.getDpiStats($scope.search_val, $scope.current_page).then(function(response) {
		// 				$scope.table_data = response.data.content;	
		// 				$scope.table_count = response.data.count;
		// 			});
		// 		}
		// 	}
		// }
		// content of directive
	}

	directive.controller = function($scope, $element, $attrs, $injector) {
		var service = $injector.get($attrs.service);

		$scope.table_info = service.get_table_info();
		$scope.current_page = 1;
		$scope.table_count = 0;
		$scope.search_val = "";	

		service.get_data($scope.search_val, 1).then(function(response){
			$scope.table_data = response.data.content;
			$scope.table_count = response.data.count;
		})

		$scope.update_search = function() {
			service.get_data($scope.search_val, $scope.current_page).then(function successCallback(response) {
				$scope.table_data = response.data.content;	
				$scope.table_count = response.data.count;
			}, function errorCallback(response) {
			    console.log("something went wrong with search");
		    });
		}

		$scope.change_page = function() {
			if ($scope.current_page != null || $scope.current_page != "") {
				service.get_data($scope.search_val, $scope.current_page).then(function(response) {
					$scope.table_data = response.data.content;	
					$scope.table_count = response.data.count;
				});
			}
		}

		$scope.inc_page_num = function(num) {
			if ($scope.current_page + num  >= 1) {
				$scope.current_page += num;
				if ($scope.current_page != null || $scope.current_page != "") {
					service.get_data($scope.search_val, $scope.current_page).then(function(response) {
						$scope.table_data = response.data.content;	
						$scope.table_count = response.data.count;
					});
				}
			}
		}

	};
	return directive;
}]);
