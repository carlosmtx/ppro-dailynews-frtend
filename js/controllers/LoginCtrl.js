'use strict';

var newsAppController = angular.module('angularControllers');

newsAppController.controller('LoginCtrl', ['$scope','$location',
    function($scope,$location){
        $scope.login = function(){
            //TODO: Do login
            $location.url('/user/'+$scope.user.username);
        }
    }
]);