
var newsAppController = angular.module('angularControllers');

newsAppController.controller('HeaderCtrl', ['$scope','$routeParams','auth',
    function($scope,$routeParams,auth) {
        auth.register(function(){
            console.log("Adoro ser callback");
            $scope.user = {};
            $scope.user.username = auth.getUser().username;
        });
    }
]);