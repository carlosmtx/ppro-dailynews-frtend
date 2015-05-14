var newsApp = angular.module('newsAppServices');

newsApp.factory('AuthService', function() {
    var currentUser = {};
    // factory function body that constructs shinyNewServiceInstance
    return {
        login: function(username){
            currentUser.username = "Carlos";
            return currentUser;
        }
    };
});
