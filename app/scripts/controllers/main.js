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
    var todoListInStore = localStorageService.get('todoList');

    $scope.todoList = todoListInStore || [];

    $scope.$watch('todoList', function () {
      localStorageService.set('todoList', $scope.todoList);
    }, true);

    $scope.addTodo = function(todo) {
      if($scope.todoList.indexOf(todo) === -1 && todo.length > 0) {
          $scope.todoList.push(todo);
      }
      $scope.todo = "";
    };

    $scope.removeTodo = function(index) {
      $scope.todoList.splice(index,1);
    };

  });
