app.controller('FlowController', function($scope, $http) {    
	$scope.selectedIp;
	$scope.selectedLog;
	$scope.selectedTopic;
	$scope.sending = false;

	$scope.selectedIpProd;
	$scope.selectedLogProd;
	$scope.selectedTopicProd;
	$scope.sendingProd = false;

	$scope.selectedIpRate;
	$scope.selectedRate = 100;
	$scope.sendingRate = false;

	$http.get("/api/v1/simo/config/hosts").success(function (response) {
		$scope.hosts = response;
	});

	$http.get("/api/v1/simo/config/ip/dev").success(function (response) {
		$scope.devIpList = response;
	});

	$http.get("/api/v1/simo/config/ip/mw").success(function (response) {
		$scope.mwIpList = response;
	});

	$http.get("/api/v1/simo/recordings/logs").success(function (response) {
		$scope.logs = response;
		$scope.selectedLog = response[0];
	});

	$http.get("/api/v1/simo/replay/topics").success(function (response) {
		$scope.topics = response;
		$scope.selectedTopic = response[0];
		$scope.selectedTopicProd = response[0];
	});

	$scope.sendToKafka = function(ip, log, topic) {
		$scope.sending = true;
		var req = {
			method: 'POST',
			url: '/api/v1/simo/replay/flowdata',
			data: { 
				dest_ip: ip,
				log_name: log,
				topic: topic
			}
		};
		$http(req).success(function(response) {
			$scope.sendFlowRes = response.msg;
			console.log($scope.sendFlowRes);
			$scope.sending = false;
		});
	};

	$scope.sendToKafkaProd = function(ip, log, topic) {
		$scope.sendingProd = true;

		var changeHostnameReq = {
			method: 'PUT',
			url: '/api/v1/simo/config/host',
			data: { 
				dest_ip: ip,
			}
		};

		$http(changeHostnameReq).success(function(response) {
			var req = {
				method: 'POST',
				url: '/api/v1/simo/replay/flowdata',
				data: { 
					dest_ip: ip,
					log_name: log,
					topic: topic
				}
			};
			$http(req).success(function(response) {
				$scope.sendFlowResProd = response.msg;
				console.log($scope.sendFlowResProd);
				$scope.sendingProd = false;
			});
		})
		.error(function(response) {
			$scope.sendFlowResProd = response;
			console.log($scope.sendFlowResProd);
			$scope.sendingProd = false;
		});

		
	};

	$scope.sendToKafkaRate = function(ip, rate) {
		$scope.sendingRate = true;
		var req = {
			method: 'POST',
			url: '/api/v1/simo/kafka/send',
			data: { 
				dest_ip: ip,
				rate: rate
			}
		};
		$http(req).success(function(response) {
			$scope.sendFlowResRate = response;
			console.log($scope.sendFlowRes);
			$scope.sendingRate = false;
		});
	};
});