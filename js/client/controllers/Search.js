/* global App:true */
'use strict';

App.controller('Search', ['$scope', 'chosenIngredients', function ($scope, chosenIngredients) {
  $scope.add = function () {
    chosenIngredients.push($scope.text);

    $scope.text = '';
  };
}]);