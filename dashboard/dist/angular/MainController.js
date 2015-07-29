var angularApp = angular.module('angularApp',[]);

angularApp.controller('IndexController', function($scope, $rootScope) {
    $rootScope.page = "templates/match.html"
});

angularApp.controller('SidebarController', function($scope, $rootScope) {
    $scope.setPage = function(pageName) {
    	$rootScope.page = "templates/" + pageName + ".html";
    	console.log("rootscope page: " + $rootScope.page);
    }
});