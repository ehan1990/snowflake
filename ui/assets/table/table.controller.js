app.controller('TableController', function($scope, BadmintonService) {    
	$scope.section_title = "Table "; 

	BadmintonService.get_total_amount().then(function(response) {
		$scope.total_amount = response.data.content;
	});

});
