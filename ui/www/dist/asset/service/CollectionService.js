app.service('CollectionService', function($http){

	this.getCollections = function() {
		return $http.get(constants.ROOTAPI + "/collections");
	}


});