/* global App:true */
'use strict';

App.controller('DrinkDetails', ['$scope', 'chosenDrink', function ($scope, chosenDrink) {
  $scope.drink = chosenDrink.title;
}]);