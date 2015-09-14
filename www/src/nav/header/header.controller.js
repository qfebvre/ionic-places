"use strict";

angular.module('places')
	.controller('HeaderCtrl', function($rootScope,$scope,$state,$ionicFilterBar) {

		$scope.model = {
			list:[]
		};

		//properties
		$scope.enabled = _isEnabled();
		$scope.title = _getTitle();
		$scope.searchEnabled = _searchEnabled();

		//events
		$rootScope.$on('$stateChangeSuccess',
			function(event, toState, toParams, fromState, fromParams){

				$scope.title = _getTitle();
				$scope.enabled = _isEnabled();
				$scope.searchEnabled = _searchEnabled();

		});

		//privates
		function _isEnabled(){
			return !$state.is("login");
		};

		function _getTitle(){
			return ($state.$current.data) ? $state.$current.data.title : "";
		};

		function _searchEnabled(){
			return $state.is("tab.my-place");
		};



	$rootScope.$on("searchListInilize",function(){

				var filterBarInstance;

				$scope.showFilterBar = function () {
				  filterBarInstance = $ionicFilterBar.show({
				    items: $scope.model.list,
				    update: function (filteredItems, filterText) {
				      $scope.model.list = filteredItems;
				      if (filterText) {
				        console.log(filterText);
				      }
				    }
				  });
				};


	});



	});
