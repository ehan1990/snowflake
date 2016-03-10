app.controller('HomeController', function($scope, $http, CommonService) {    

	CommonService.getVersion().then(function (response) {
		console.log(response);
		$scope.version = response.data.version;
		$scope.branch = response.data.branch;
	});
});
