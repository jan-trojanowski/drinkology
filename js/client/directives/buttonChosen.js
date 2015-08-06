/* global App:true */
'use strict';

App.directive('buttonChosen', function () {
  return function ($scope, $element) {
    $element.on('click', function () {
      $element.toggleClass('active');
    });
  };
});