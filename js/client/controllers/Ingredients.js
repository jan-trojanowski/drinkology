/* global App:true, Ingredients:true */
'use strict';

App.controller('Ingredients', ['$scope', '$meteor', 'chosenIngredients', function ($scope, $meteor, chosenIngredients) {    
  $scope.ingredients = $meteor.collection(Ingredients);

  $scope.add = function (name, $event) {
    if ($event.target.classList.contains('active')) {
      var place = chosenIngredients.indexOf(name);

      chosenIngredients.splice(place, 1);
    } else {
      chosenIngredients.push(name);
    }
  };
}]);