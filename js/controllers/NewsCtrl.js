'use strict';
var news = [
    {
        title:'Insultou reporter em direto e foi despedido',
        url:'http://www.jn.pt/PaginaInicial/Nacional/Media/Interior.aspx?content_id=4566516',
        img:'',
        description:'Shawn Simoes deixou o anonimato... pelas piores razoes. O engenheiro canadiano assediou em direto Shauna Hunt, jornalista do canal CityNews e foi despedido por violaçao do codigo de conduta da empresa.'
    },
    {
        title:'Bebe sobrevive apos oito dias enterrado',
        url:'http://www.jn.pt/PaginaInicial/Mundo/Interior.aspx?content_id=4565833',
        img:'http://www.jn.pt/storage/JN/2015/big/ng4231376.jpg',
        description:'Um recem-nascido abandonado e enterrado, na China, sobreviveu apos oito dias debaixo da terra. O bebe encontra-se estavel.'
    },
    {
        title:'Pai de jovem envolvida em agressoes espera que caso sirva de licao a filha',
        url:'http://www.jn.pt/paginainicial/pais/concelho.aspx?Distrito=Coimbra&Concelho=Figueira%20da%20Foz&Option=Interior&content_id=4566488',
        img:'http://www.jn.pt/storage/JN/2015/big/ng4232567.jpg',
        description:'O pai de uma das jovens filmadas num video em que um rapaz de 17 anos e agredido por duas raparigas espera que o caso sirva de licao a filha, garantindo que esta esta arrependida.'
    },    {
        title:'Insultou reporter em direto e foi despedido',
        url:'http://www.jn.pt/PaginaInicial/Nacional/Media/Interior.aspx?content_id=4566516',
        img:'',
        description:'Shawn Simoes deixou o anonimato... pelas piores razoes. O engenheiro canadiano assediou em direto Shauna Hunt, jornalista do canal CityNews e foi despedido por violaçao do codigo de conduta da empresa.'
    },
    {
        title:'Bebe sobrevive apos oito dias enterrado',
        url:'http://www.jn.pt/PaginaInicial/Mundo/Interior.aspx?content_id=4565833',
        img:'http://www.jn.pt/storage/JN/2015/big/ng4231376.jpg',
        description:'Um recem-nascido abandonado e enterrado, na China, sobreviveu apos oito dias debaixo da terra. O bebe encontra-se estavel.'
    },
    {
        title:'Pai de jovem envolvida em agressoes espera que caso sirva de licao a filha',
        url:'http://www.jn.pt/paginainicial/pais/concelho.aspx?Distrito=Coimbra&Concelho=Figueira%20da%20Foz&Option=Interior&content_id=4566488',
        img:'http://www.jn.pt/storage/JN/2015/big/ng4232567.jpg',
        description:'O pai de uma das jovens filmadas num video em que um rapaz de 17 anos e agredido por duas raparigas espera que o caso sirva de licao a filha, garantindo que esta esta arrependida.'
    }
];



var newsAppController = angular.module('angularControllers');

newsAppController.controller('NewsCtrl', ['$scope',
    function($scope){
        $scope.news = news;
        $scope.collapsible = function(){
            console.log("Here11");
            $('.collapsible').collapsible({
                accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
            });
            return 5;
        };
		
		$scope.init = function () {			
			var request = $.get("http://api.dailynews.io/user/"+$scope.user.username+"/news");
			
			request.done(function(xhr,result){
				console.log("GET news to insert");
				console.log(xhr[0]);
				xhr.forEach(function(entry){
					
				});
			});
			
			request.error(function(jqXHR, textStatus, errorThrown) {
				console.log("GET news error: "+JSON.stringify(jqXHR)+" "+textStatus+" "+errorThrown );
			});
		};
		
    }
]);