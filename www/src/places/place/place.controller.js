"use strict";

angular.module('places'['ionic','ion-gallery'])
	.controller('MyPlaceCtrl', function($rootScope,$scope,$state, $ionicFilterBar) {

// console.log("MyPlaceCtrl",$scope.list);

	$scope.items = [
		{
			src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
			sub: 'This is a <b>subtitle</b>'
		},
		{
			src:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg',
			sub: '' /* Not showed */
		},
		{
			src:'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg'
		}
	]

		});
