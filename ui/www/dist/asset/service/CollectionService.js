app.service('CollectionService', function($http){

	this.getVersion = function() {
		return $http.get(constants.ROOTAPI + "/version");
	}


});