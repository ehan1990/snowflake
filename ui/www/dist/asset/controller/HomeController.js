app.controller('HomeController', function($scope, $http, TemplateService) {    

	$scope.version = TemplateService.version();
	$scope.branch = "master";

	$scope.foobarfunc = function() {
		var source = new EventSource("/api/v1/simo/stream");
		source.addEventListener('priceUp', function(e) {
			console.log(e);
			console.log(e.data);
		}, false);		
	}
});
