app.service('ScheduleService', function($http, $stateParams){

    this.get_schedule = function() {
        var req = {
            method: 'GET',
            url: "assets/mock_data/schedule.json"
        };
        return $http(req);
    }

    this.get_simple_balance = function() {
        var req = {
            method: 'GET',
            url: "assets/mock_data/simple_balance.json"
        };
        return $http(req);
    }

});
