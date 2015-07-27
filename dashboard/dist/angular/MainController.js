var angularApp = angular.module('angularApp',[]);

angularApp.controller('MainController', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});