
var newsAppController = angular.module('angularControllers');

newsAppController.controller('HeaderCtrl', ['$scope','$routeParams','auth',
    function($scope,$routeParams,auth) {
        auth.register(function(){
            $scope.user = {};
            $scope.user.username = auth.getUser().username;
        });

        $scope.$on('$routeChangeSuccess', function() {
            if($routeParams.username){
                $scope.user = {};
                $scope.user.username = $routeParams.username;
            }
        });

    }
]);