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
    $scope.todoList = todoListInStore || { text: '', isEditable: false };

    $scope.$watch('todoList', function () {
      localStorageService.set('todoList', $scope.todoList);
    }, true);

    $scope.addTodo = function(text) {
      var todo = {todoText: text, isEditable: false};
      if($scope.todoList.indexOf(text) === -1 && text.length > 0) {
      console.log(todo);
          $scope.todoList.push(todo);
      }
      $scope.newTodoText = "";
    };

    $scope.removeTodo = function(index) {
      $scope.todoList.splice(index,1);
    };

    $scope.editTodo = function(index, text){
      //only save if we're done with editting and have clicked the edit button
      console.log(index);
      var todo = $scope.todoList[index];
      if(todo.isEditable){
        todo.text = text;
      }
      todo.isEditable = !todo.isEditable;
    };

  });
