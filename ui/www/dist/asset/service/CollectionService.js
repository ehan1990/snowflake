app.service('CollectionService', function($http){
	this.getCollections = function(page) {
		return $http.get(constants.ROOTAPI + "/collections?page=" + page);
	}

	this.updateSearch = function(searchValue) {
		return $http.get(constants.ROOTAPI + "/search/collections?search=" + searchValue)
	}
});