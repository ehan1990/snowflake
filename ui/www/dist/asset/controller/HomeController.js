app.controller('HomeController', function($scope, $http, CommonService) {    

	CommonService.getVersion().then(function (response) {
		$scope.version = response.data.version;
		$scope.branch = response.data.branch;
	});
});
