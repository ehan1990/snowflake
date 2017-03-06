app.service('DeviceService', function($http, $stateParams){

    this.test = function() {
        return "test";
    }

    this.getCpuGraph = function(limit) {
        if (limit == null) {
            limit = 10;
        }
        var serial = $stateParams.serial;
        var req = {
            method: 'GET',
            url: constants.ROOT_API + "/device/" + serial + "/graph/cpustats?limit=" + limit
        }; 
        return $http(req);
    }

    this.getDpiStats = function(search, page) {
        var serial = $stateParams.serial;
    	if (page == null || page == "") {
    		page = 1;
    	}
    	if (search == null || search == "") {
    		var req = {
                method: 'GET',
                url: constants.ROOT_API + "/device/" + serial + "/dpistats?page=" + page.toString()
	        };
    	} else {
    		var req = {
                method: 'GET',
                url: constants.ROOT_API + "/device/" + serial + "/dpistats?search=" + search + "&page=" + page.toString()
	        };
    	}
        return $http(req);
    }

    this.getOfflineCountDaily = function() {
        var serial = $stateParams.serial;
        var req = {
            method: 'GET',
            url: constants.ROOT_API + "/device/" + serial + "/dpistats/offline"
        };
        return $http(req);
    }

    this.getSystemStats = function(search, page) {
        var serial = $stateParams.serial;
        if (page == null || page == "") {
            page = 1;
        }
        if (search == null || search == "") {
            var req = {
                method: 'GET',
                url: constants.ROOT_API + "/device/" + serial + "/systemstats"
            };
        } else {
            var req = {
                method: 'GET',
                url: constants.ROOT_API + "/device/" + serial + "/systemstats?search=" + search + "&page=" + page.toString()
            };
        }
        return $http(req);
    }

});
