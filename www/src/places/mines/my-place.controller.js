"use strict";

angular.module('places')
	.controller('MyPlaceCtrl', function($rootScope,$scope,$state, $ionicFilterBar) {


// console.log("MyPlaceCtrl",$scope.list);

		var list =[
			{
				name:'Geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'Paris',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/2'
			},
			{
				name:'Barcelone',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/3'
			},
			{
				name:'Madrid',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/4'
			},
			{
				name:'New York',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/5'
			},
			{
				name:'Marseille',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/6'
			},
			{
				name:'Londres',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/7'
			},
			{
				name:'Berlin',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/8'
			},
			{
				name:'Rome',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/9'
			}
		];

		//duplicate data to test performance
		// for (var i = 0; i < 5; i++) {
		// 	list = list.concat(list.slice(0))
		// }
		//properties
		$scope.model.list = list;

		$rootScope.$emit("searchListInilize");


		$scope.ok = true;





	});
