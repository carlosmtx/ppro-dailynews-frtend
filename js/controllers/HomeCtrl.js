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

        $scope.openSourceModal = function(){
            $scope.newSource = "";
            $("#new-source-modal").openModal();
        };
        $scope.createSource = function(){
            console.log($scope.newSource);
            $scope.sources.push({
                title: 'Novo',
                descrition: 'Description',
                img : 'http://material-design.storage.googleapis.com/publish/material_v_3/material_ext_publish/0Bx4BSt6jniD7VG9DQVluOFJ4Tnc/materialdesign_principles_metaphor.png',
                homepage: $scope.newSource
            });
            $("#new-source-modal").closeModal();
        };
    }
]);