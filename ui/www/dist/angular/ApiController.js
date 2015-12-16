app.controller('ApiController', function($scope, $http) {    

	$scope.selected_protocol = "";
	$scope.selected_method = "";

	$http.get("/api/v1/constant/protocols").success(function (response) {
		$scope.protocols = response;
		$scope.selected_protocol = $scope.protocols[0];
	});

	$http.get("/api/v1/constant/methods").success(function (response) {
		$scope.methods = response;
		$scope.selected_method = $scope.methods[0];
	});
});
