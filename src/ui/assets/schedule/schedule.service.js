app.service('ScheduleService', function($http){

    this.get_data = function() {
        var req = {
            method: 'GET',
            url: constants.ROOT_API + "/demo",
        };
        return $http(req);
    }

    this.add_one = function(name) {
        var req = {
            method: 'POST',
            url: constants.ROOT_API + "/demo",
            data: {
                "name": name
            }
        };
        return $http(req);
    }

    this.delete_one = function(key) {
        var req = {
            method: 'DELETE',
            url: constants.ROOT_API + "/demo/" + key
        };
        return $http(req);
    }

});
