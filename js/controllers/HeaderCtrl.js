
var newsAppController = angular.module('angularControllers');

newsAppController.controller('HeaderCtrl', ['$scope','$routeParams','AuthService',
    function($scope,$routeParams,AuthService) {

        $scope.user = AuthService.login();
    }
]);