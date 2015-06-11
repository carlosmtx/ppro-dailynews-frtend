'use strict';

var newsAppController = angular.module('angularControllers');

newsAppController.controller('HomeCtrl', ['$scope','$routeParams','$http', 'config',
    function($scope,$routeParams,$http,config) {
        $scope.user = {};
        $scope.user.username = $routeParams.username;
        $scope.sources = {};

        var fetchSources = function(){
            $http({
                url: config.routes.api.source($routeParams.username),
                method: 'GET'
            }).success(function(data){
                console.log("I fetch! I good Dog!");
                $scope.sources = data;
            }).error(function(){
                console.log("Error");
            });
        };
        $scope.openSourceModal = function(){
            $scope.newSource = "";
            $("#new-source-modal").openModal();
        };
        $scope.createSource = function(){
            $http({
                url: config.routes.api.source($routeParams.username),
                method: 'POST',
                data: {source:$scope.newSource}
            }).success(function(){
                $scope.$apply(fetchSources);
            }).error(function(){
                alert("error");
            });

            $("#new-source-modal").closeModal();
        };

        fetchSources();
    }
]);