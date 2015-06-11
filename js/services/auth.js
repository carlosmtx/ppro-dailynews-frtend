var newsApp = angular.module('newsAppServices',['newsAppConfig']);

newsApp.factory('auth', function() {
    var user = {};
    var callback = null;
    var service = {};
    service.login = function(username){
        user.username = username;
        callback();
    };

    service.register = function(cb){
        console.log("Vou chamar Ganda Callback");
        callback = cb;
    };

    service.isLogged = function(){
        return user != false;
    };

    service.getUser = function(){
        if(user) return Object.create(user)
        return user;
    };


    return service;
});
