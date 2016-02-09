app.controller('ScaleUpController', function($scope, $http) {    

	$scope.selectedIp = "";
	$scope.dpiNum = 10;
	$scope.flowRate = 1;
	$scope.stopping = false;
	$scope.starting = false;

	$http.get("/api/v1/simo/zoo/mw").success(function (response) {
		$scope.hosts = response;
	});

	$http.get("/api/v1/simo/zoo/mw/ip").success(function (response) {
		$scope.ipList = response;
	});

	$http.get("/api/v1/simo/scaleup/dpi").success(function (response) {
		$scope.dpiList = response;
	});

	$scope.startDpis = function(ip, num, flowrate) {
		var changeHostnameReq = {
			method: 'PUT',
			url: '/api/v1/simo/config/host',
			data: { 
				dest_ip: ip
			}
		};

		$http(changeHostnameReq).success(function(response) {
			var req = {
				method: 'POST',
				url: '/api/v1/simo/scaleup/startdpis',
				data: { 
					ip: ip,
					num: num,
					flowrate: flowrate
				}
			};
			$scope.starting = true;
			$http(req).success(function(response) {
				$scope.serverResponse = response.msg;
				$http.get("/api/v1/simo/scaleup/dpi").success(function (response) {
					$scope.dpiList = response;
					$scope.starting = false;
				});
			});
		})
		.error(function(response) {
			$scope.serverResponse = response.msg;
			$scope.starting = false;
		});
	}

	$scope.stopAllDpi = function() {
		var req = {
			method: 'POST',
			url: '/api/v1/simo/scaleup/stopall',
			data: ""
		};
		$scope.stopping = true;
		$http(req).success(function(response) {
			$scope.serverResponse = response.msg;
			$http.get("/api/v1/simo/scaleup/dpi").success(function (response) {
				$scope.dpiList = response;
				$scope.stopping = false;
			});
		});
	};

	$scope.changeScaleUpDpiStatus = function(ip, dpiId) {
		console.log(dpiId);
		var req = {
			method: 'PUT',
			url: '/api/v1/simo/scaleup/dpi/' + dpiId,
			data: { 
				destIp: ip
			}
		};
		$http(req).success(function(response) {
			$scope.dpiList[dpiId].online = response.online;
			$scope.dpiList[dpiId].message = response.msg;
			console.log($scope.dpiList);
		});
	};
	//$scope.changeDpiStatus = function(host) {

});
