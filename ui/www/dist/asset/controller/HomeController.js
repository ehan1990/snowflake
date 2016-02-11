app.controller('HomeController', function($scope, $http) {    

	$scope.version = 123;
	$scope.branch = "master";

	$scope.foobarfunc = function() {
		var source = new EventSource("/api/v1/simo/stream");
		source.addEventListener('priceUp', function(e) {
			console.log(e);
			console.log(e.data);
		}, false);		
	}
});
