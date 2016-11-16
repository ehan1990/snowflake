app.service('ThreatsService', function($http, $stateParams){

    this.get_table_info = function() {
        var res = {}
        res.name = "Threats";
        res.headers = ["SID", "Name", "Details"];
        res.placeholder_search_text = "search example: user=edward han, amount=100";
        res.table_page = "assets/threats/threats.table.html";
        return res;
    }

    this.get_data = function(search, page) {
        if (search == null || search == "") {
            var req = {
                method: 'GET',
                url: constants.ROOT_API + "/threats?limit=10&page=" + page
            };
        } else {
            var req = {
                method: 'GET',
                url: constants.ROOT_API + "/threats?limit=10&page=" + page + "&search=" + search
            };
        }
        return $http(req);
    }
});
