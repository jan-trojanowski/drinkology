/* global App:true, Drinks:true */
'use strict';

App.controller('Classic', ['$scope', '$meteor', '$stateParams', function ($scope, $meteor, $stateParams) {
  $scope.classic = $meteor.object(Drinks, $stateParams.classicId);

  console.log($scope.classic);
}]);