'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var stepsInStore = localStorageService.get('steps');

    $scope.steps = stepsInStore || [];
    $scope.services = [{name:"RDS"},{name:"EC2"}];
    $scope.operations = [ {name:"Rename"},{name:"Restore"},{name:"Delete"},{name:"Modify"}];

    $scope.$watch('steps', function () {
      localStorageService.set('steps', $scope.steps);
    }, true);

    $scope.addStep = function(step) {
      if($scope.steps.indexOf(step) === -1 && step.length > 0) {
          $scope.steps.push(step);
      }
      $scope.step = "";
    };

    $scope.removeStep = function(index) {
      $scope.steps.splice(index,1);
    };

  });
