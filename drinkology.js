/* global Meteor:true, Mongo:true, Template: true, angular: true */
'use strict';

var Ingredients = new Mongo.Collection('ingredients');
var Drinks      = new Mongo.Collection('drinks');

if (Meteor.isClient) {

  Meteor.startup(function () {
    Meteor.typeahead.inject();
  });

  var App = angular.module('drinkology', ['angular-meteor']);

  App.factory('chosenIngredients', function () {
    var chosen = [];

    return chosen;
  });

  App.directive('typeahead', function () {
    return function ($scope, $element) {
      $element.bind('typeahead:selected', function () {
        console.log($element, $scope);
        // $scope.add();
      });
    };
  });

  App.directive('buttonChosen', function () {
    return function ($scope, $element) {
      $element.on('click', function () {
        $element.toggleClass('active');
      });
    };
  });

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

  App.controller('Chosen', ['$scope', 'chosenIngredients', function ($scope, chosenIngredients) {
    $scope.chosen = chosenIngredients;
  }]);

  App.controller('YourChoice', ['$scope', 'chosenIngredients', function ($scope, chosenIngredients) {
    $scope.chosen = chosenIngredients;
  }]);

  App.controller('Search', ['$scope', 'chosenIngredients', function ($scope, chosenIngredients) {
    $scope.add = function () {
      chosenIngredients.push($scope.text);

      $scope.text = '';
    };
  }]);

  App.controller('Drinks', ['$scope', '$meteor', '$filter', function ($scope, $meteor, $filter) {
    var orderBy = $filter('orderBy');
    $scope.drinks = $meteor.collection(Drinks);

    $scope.sort = function(predicate, reverse) {
      $scope.drinks = orderBy($scope.drinks, predicate, reverse);
    };
  }]);

  Template.body.helpers({
    typeahead: function () {
      return Ingredients.find({}).fetch().map(function (el) {
        return el.name;
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // Meteor.typeahead.inject();
  });
}