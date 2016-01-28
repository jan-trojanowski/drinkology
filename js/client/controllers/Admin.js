// /* global App:true, Drinks:true */
// 'use strict';

// App.controller('Admin', ['$scope', '$meteor', '$filter', 'chosenDrink', function ($scope, $meteor, $filter, chosenDrink) {
//   var orderBy = $filter('orderBy');
//   $scope.drinks = $meteor.collection(Drinks);

//   $scope.sort = function(predicate, reverse) {
//     $scope.drinks = orderBy($scope.drinks, predicate, reverse);
//   };

//   $scope.add = function (drink) {
//     console.log(drink);
//     // Drinks.insert({});
//   };

//   $scope.remove = function (id) {
//     Drinks.remove(id);
//   };

//   $scope.showDetails = function () {
//     chosenDrink = this.drink;
//   };
// }]);