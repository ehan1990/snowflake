app.service('DashboardService', function($http){

    this.getMwList = function() {
        var req = {
                method: 'GET',
                url: constants.ROOT_API + "/dashboard",
        };
        return $http(req);
    }

});
