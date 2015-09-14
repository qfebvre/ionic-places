angular.module('places')
	.controller('FriendsCtrl', function($scope, $ionicLoading,FriendsService, $ionicFilterBar) {

		$ionicLoading.show({
			content: 'Loading...',
			showBackdrop: false
		});

		FriendsService.getGroupedFriends().then(function(data){
			$scope.grouped = data;
			$ionicLoading.hide();

		});
	});
