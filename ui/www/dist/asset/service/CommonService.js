app.service('CommonService', function($http){

	this.getVersion = function() {
		return $http.get(constants.ROOTAPI + "/version");
	}


});