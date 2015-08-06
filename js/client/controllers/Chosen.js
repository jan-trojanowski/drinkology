/* global App:true */
'use strict';

App.controller('Chosen', ['$scope', 'chosenIngredients', function ($scope, chosenIngredients) {
  $scope.chosen = chosenIngredients;
}]);