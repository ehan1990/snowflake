app.service('BadmintonService', function($http, $stateParams){

    this.get_table_info = function() {
        var res = {}
        res.name = "Badminton";
        res.headers = ["ID", "Time", "Amount", "Balance", "Description", "User"];
        res.placeholder_search_text = "search example: user=edward han, amount=100";
        return res;
    }

    this.get_data = function(search, page) {
        if (search == null || search == "") {
            var req = {
                method: 'GET',
                url: constants.ROOT_API + "/badminton/funds?limit=10&page=" + page
            };
        } else {
            var req = {
                method: 'GET',
                url: constants.ROOT_API + "/badminton/funds?limit=10&page=" + page + "&search=" + search
            };
        }
        return $http(req);
    }

    this.get_total_amount = function() {
        var req = {
            method: 'GET',
            url: constants.ROOT_API + "/badminton/funds/total"
        };
        return $http(req);
    }

    this.getPie = function() {
        var req = {
            method: 'GET',
            url: constants.ROOT_API + "/badminton/funds/pie"
        }; 
        return $http(req);
    }

    this.get_bar = function() {
        var req = {
            method: 'GET',
            url: constants.ROOT_API + "/badminton/funds/bar"
        }; 
        return $http(req);
    }
});
