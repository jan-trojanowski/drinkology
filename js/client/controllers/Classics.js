/* global App:true, Drinks:true */
'use strict';

App.controller('Classics', ['$scope', '$meteor', function ($scope, $meteor) {
  $scope.classics = $meteor.collection(Drinks);
}]);