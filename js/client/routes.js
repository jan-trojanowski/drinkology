/* global App:true */
'use strict';

App.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'templates/index.ng.html'
      })
      .state('classics', {
        url: '/classics',
        templateUrl: 'templates/classics.ng.html',
        controller: 'Classics'
      })
      .state('classic', {
        url: '/classics/:classicId',
        templateUrl: 'templates/classic.ng.html',
        controller: 'Classic'
      })
      .state('steps', {
        url: '/classics/:classicId/:stepId',
        templateUrl: 'templates/steps.ng.html',
        controller: 'Classic'
      })
      .state('your-drink', {
        url: '/your-drink',
        templateUrl: 'templates/your-drink.ng.html'
      });

    $urlRouterProvider.otherwise('/index');
  }]);