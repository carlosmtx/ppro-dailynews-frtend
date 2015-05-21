'use strict';
var sources = [
    {
        title: 'Jornal de Noticias',
        description:"Este e  o jornal de noticias",
        img: 'http://media.fersil.com/MULTIMEDIA/FOTOS/128/0003CA85AB85D3.jpg',
        homepage: 'http://www.jn.pt'
    },
    {
        title: 'Diario de Noticias',
        description:"Ganda Jornal este Diario",
        img: 'http://www.dn.pt/Common/Images/img_dn/header/logo_150anos.png',
        homepage: 'http://www.dn.pt'
    },
    {
        title: 'O Jogo',
        description:"Este e  o jornal de noticias",
        img: 'http://www.ojogo.pt/common/images/headlogo30.png',
        homepage: 'http://www.ojogo.pt'
    },
    {
        title: 'Jornal de Noticias',
        description:"Este e  o jornal de noticias",
        img: 'http://media.fersil.com/MULTIMEDIA/FOTOS/128/0003CA85AB85D3.jpg',
        homepage: 'http://www.jn.pt'
    },
    {
        title: 'Diario de Noticias',
        description:"Ganda Jornal este Diario",
        img: 'http://www.dn.pt/Common/Images/img_dn/header/logo_150anos.png',
        homepage: 'http://www.dn.pt'
    },
    {
        title: 'O Jogo',
        description:"Este e  o jornal de noticias",
        img: 'http://www.ojogo.pt/common/images/headlogo30.png',
        homepage: 'http://www.ojogo.pt'
    },
    {
        title: 'O Jogo',
        description:"Este e  o jornal de noticias",
        img: 'http://www.ojogo.pt/common/images/headlogo30.png',
        homepage: 'http://www.ojogo.pt'
    }
];


var newsAppController = angular.module('angularControllers');

newsAppController.controller('HomeCtrl', ['$scope','$routeParams',
    function($scope,$routeParams) {
        $scope.user = {};
        $scope.user.username = $routeParams.username;
        $scope.sources = sources;

		$scope.init = function () {			
			var request = $.get("http://api.dailynews.io/user/"+$scope.user.username+"/source");
			
			request.done(function(xhr,result){
				console.log("GET srcs to insert");
				console.log(xhr[0]);
				xhr.forEach(function(entry){
					//entry.title;
					//entry.feed;
					//entry.link;
					//entry.LastUpdated;
				});
			});
			
			request.error(function(jqXHR, textStatus, errorThrown) {
				console.log("GET src error: "+JSON.stringify(jqXHR)+" "+textStatus+" "+errorThrown );
			});
		};
		
        $scope.openSourceModal = function(){
            $scope.newSource = "";
            $("#new-source-modal").openModal();
        };
        $scope.createSource = function(){
            console.log($scope.newSource);

			var request = $.post("http://api.dailynews.io/user/"+$scope.user.username+"/source", {source: $scope.newSource});

			request.done(function(xhr, result) {
				console.log("Add src success");
				console.log(xhr);
				console.log(result);
			});
			
			request.error(function(jqXHR, textStatus, errorThrown) {
				console.log("Add src error: "+JSON.stringify(jqXHR)+" "+textStatus+" "+errorThrown );
			});
			
            $("#new-source-modal").closeModal();
        };
    }
]);