'use strict';

var newsApp = angular.module('newsApp', [
    'ngRoute',
    'newsAppServices',
    'angularControllers',
    'newsAppDirectives',
    'ngAnimate'
]);

newsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                redirectTo: '/login'
            }).
            when('/user/:username',{
                templateUrl : 'partials/home.html',
                controller  : 'HomeCtrl'
            }).
            when('/login',{
                templateUrl : 'partials/login.html',
                controller  : 'LoginCtrl'
            }).
            when('/user/:username/news',{
                templateUrl : 'partials/news.html',
                controller  : 'NewsCtrl'
            });
    }]);