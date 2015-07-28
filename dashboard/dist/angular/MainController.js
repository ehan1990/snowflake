var angularApp = angular.module('angularApp',[]);

angularApp.controller('IndexController', function($scope) {
    $scope.page = "template/home.html"
});