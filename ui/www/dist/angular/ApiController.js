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

	$scope.send_api_req = function(protocol, ip, api_rul, method) {
		var req = {
			method: 'POST',
			url: '/api/v1/callapi',
			data: { 
				protocol: protocol,
				ip: ip,
				api_url: api_rul,
				method: method
			}
		};
		console.log("sending api request");

		$http(req).success(function(response) {
			$scope.data = JSON.stringify(response.data, null, 8);
			console.log("result: ");
			console.log($scope.data);
		});
	}
});
