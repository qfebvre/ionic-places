"use strict";

angular.module('places')
	.controller('MyPlaceCtrl', function($rootScope,$scope,$state, $ionicFilterBar) {


console.log("MyPlaceCtrl",$scope.list);

		var list =[
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'paris',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/2'
			},
			{
				name:'barcelone',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/3'
			},
			{
				name:'madrid',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/4'
			},
			{
				name:'new york',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/5'
			},
			{
				name:'marseille',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/6'
			},
			{
				name:'londres',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/7'
			},
			{
				name:'berlin',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/8'
			},
			{
				name:'rome',
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
