// /* global App:true, Drinks:true */
// 'use strict';

// App.controller('Steps', ['$scope', '$meteor', '$stateParams', function ($scope, $meteor, $stateParams) {
//   $scope.classic  = $meteor.object(Drinks, $stateParams.classicId);

//   $scope.step     = $stateParams.stepId;
//   $scope.nextStep = Number($stateParams.stepId) + 1;
//   $scope.howTo    = $scope.classic.steps[$scope.step - 1];
//   $scope.isThereNext = function () {
//     return $scope.classic.steps[$scope.step];
//   };
// }]);