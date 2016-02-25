app.controller('DpiController', function($scope, $http) {    
	$http.get("/api/v1/simo/dpisim").success(function (response) {
		$scope.hosts = response;
	});

	$scope.changeDpiStatus = function(host) {
		console.log(host);
		var req = {
			method: 'PUT',
			url: '/api/v1/simo/dpisim',
			data: host
		};
		$http(req).success(function(response) {
			$scope.changeDpiStatusResponse = response.msg;
			$http.get("/api/v1/simo/dpisim").success(function (response) {
				$scope.hosts = response;
			});
		});
	}
});
