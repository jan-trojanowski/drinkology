/* global Meteor:true, Mongo:true, angular:true, _:true */
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

    $scope.remove = function (id) {
      Drinks.remove(id);
    };
  }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // Fill Collections with data
    var drinks = [
      {title:'Cuba Libre', ingredients:['White Rum','Cola', 'Lime Juice'], strength: 3, glass: 'Highball', createdAt: new Date()},
      {title:'Mai Tai', ingredients:['White Rum','Dark Rum', 'Orange Curacao', 'Orgeat Syrup', 'Lime Juice'], strength: 2, glass: 'Highball', createdAt: new Date()},
      {title:'Screwdriver', ingredients:['Vodka','Orange Juice'], strength: 3, glass: 'Highball', createdAt: new Date()},
      {title:'John Collins', ingredients:['Gin','Lemon Juice', 'Sugar Syrup', 'Soda Water'], strength: 3, glass: 'Highball', createdAt: new Date()}
    ];

    var ingredients = [];

    var fillCollectionWithData = function (data, collection) {
      if (!collection.find().count()) {
        _.each(data, function (element) {
          collection.insert(element);
        });
      }
    };

    fillCollectionWithData(drinks, Drinks);
    fillCollectionWithData(ingredients, Ingredients);
  });
}