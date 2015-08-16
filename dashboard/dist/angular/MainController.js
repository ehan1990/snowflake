var angularApp = angular.module('angularApp',['autocomplete']);

angularApp.controller('IndexController', function($scope, $rootScope) {
    $rootScope.page = "templates/home.html"
    $scope.movies = ["Lord of the Rings",
                        "Drive",
                        "Science of Sleep",
                        "Back to the Future",
                        "Oldboy"];

        // gives another movie array on change
        $scope.updateMovies = function(typed){
            // MovieRetriever could be some service returning a promise
            $scope.newmovies = MovieRetriever.getmovies(typed);
            $scope.newmovies.then(function(data){
              $scope.movies = data;
            });
        }
});

angularApp.controller('SidebarController', function($scope, $rootScope) {
    $scope.setPage = function(pageName) {
    	$rootScope.page = "templates/" + pageName + ".html";
    	console.log("rootscope page: " + $rootScope.page);
    }
});