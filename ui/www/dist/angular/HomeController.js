app.controller('HomeController', function($scope, $http) {    

	$scope.commitObj = "commit_obj";
	$scope.dateObj = "date_obj";

	// $http.get("/api/v1/simo/version/revcount").success(function (response) {
	// 	$scope.revCount = response.rev_count;
	// 	$scope.branch = response.branch;
	// });

	// $http.get("/api/v1/simo/version/objlist").success(function (response) {
	// 	$scope.objList = response;
	// 	console.log($scope.objList);
	// });

	// $http.get("/api/v1/simo/version/commithistory").success(function (response) {
	// 	$scope.commitHistory = response;
	// });

	// $scope.foobarfunc = function() {
	// 	var source = new EventSource("/api/v1/simo/stream");
	// 	source.addEventListener('priceUp', function(e) {
	// 		console.log(e);
	// 		console.log(e.data);
	// 	}, false);		
	// }
});
