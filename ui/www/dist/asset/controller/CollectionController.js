app.controller('CollectionController', function($scope, $http, CollectionService) {    

	$scope.collectionPages = [1, 2, 3];
	$scope.searchValue = "";


	CollectionService.getCollections(1).then(function (response) {
		$scope.collections = response.data.content;
		$scope.count = response.data.count;
	});

	$scope.changeCollectionPage = function(page) {
		CollectionService.getCollections(page).then(function(response) {
			$scope.collections = response.data.content;
			$scope.count = response.data.count;
		});
	}

	$scope.incCollectionPage = function() {
		for (var i = 0; i < $scope.collectionPages.length; i++) {
			$scope.collectionPages[i] += 3;
		}
	}

	$scope.decCollectionPage = function() {
		if ($scope.collectionPages[0] != 1) {
	 		for (var i = 0; i < $scope.collectionPages.length; i++) {
				$scope.collectionPages[i] -= 3;
			}
		}
	}

	$scope.updateSearch = function(searchValue) {
		console.log(searchValue);
	}
});
