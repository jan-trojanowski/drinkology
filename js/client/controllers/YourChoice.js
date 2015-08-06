/* global App:true */
'use strict';

App.controller('YourChoice', ['$scope', 'chosenIngredients', function ($scope, chosenIngredients) {
  $scope.chosen = chosenIngredients;
}]);