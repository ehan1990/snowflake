app.controller('ZooController', function($scope, $http) {    

	$scope.selectedIp = "";

	$http.get("/api/v1/simo/zoo/mw").success(function (response) {
		$scope.hosts = response;
	});

	$http.get("/api/v1/simo/zoo/mw/ip").success(function (response) {
		$scope.ipList = response;
	});

	$http.get("/api/v1/simo/zoo/mw/hostnames").success(function (response) {
		$scope.hostnames = response;
		$scope.selectedHostname = $scope.hostnames[0];
	});

	$scope.setMwIp = function(ip, hostname) {
		var req = {
			method: 'POST',
			url: '/api/v1/simo/zoo/mw/connect',
			data: { 
				ip: ip,
				hostname: hostname
			}
		}
		$http(req).success(function(response) {
			$scope.setMwIpRes = response.msg;
			$http.get("/api/v1/simo/zoo/dpi/pretty?os_type=" + hostname).success(function (response) {
				$scope.boxes = response;
			});
		});
	};

	$scope.listNode = function(zooPath) {
		var req = {
			method: 'POST',
			url: '/api/v1/simo/zoo/node/children',
			data: { 
				path: zooPath
			}
		}
		$http(req).success(function(response) {
			$scope.listNodeRes = response;
			console.log($scope.listNodeRes);
		});
	}
});
