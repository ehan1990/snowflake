app.controller('KafkaReaderController', function($scope, $http) {    	

	$http.get("/api/v1/simo/zoo/mw").success(function (response) {
		$scope.hosts = response;
	});

	$http.get("/api/v1/simo/zoo/mw/ip").success(function (response) {
		$scope.ipList = response;
	});

	$http.get("/api/v1/simo/replay/topics").success(function (response) {
		$scope.topics = response;
		$scope.selectedTopic = $scope.topics[0];
	});

	$scope.readKafka = function(ip, topic) {
		var req = {
			method: 'POST',
			url: '/api/v1/simo/kafka/read',
			data: { 
				ip: ip,
				topic: topic
			}
		}
		$http(req).success(function(response) {
			s = JSON.stringify(response)
			var jsonPretty = JSON.stringify(JSON.parse(s),null,2);  
			console.log(jsonPretty);
			$scope.response = jsonPretty;			
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
