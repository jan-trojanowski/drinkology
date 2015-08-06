/* global Meteor:true */
'use strict';

if (Meteor.isClient) {

  Meteor.startup(function () {
    Meteor.typeahead.inject();
  });

  // App.directive('typeahead', function () {
  //   return function ($scope, $element) {
  //     $element.bind('typeahead:selected', function () {
  //       $scope.add();
  //     });
  //   };
  // });
}