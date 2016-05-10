/*jslint white: true, devel: true */
/*global angular */
var myApp = angular.module('resumeApp'); //need to learn why this line breaks the controller if i add a '[]' parameter;

/**
 * @ngdoc function
 * @name resumeApp.controller:MyTodoCtrl
 * @description
 * # MyTodoCtrl
 * Controller of the resumeApp
 */
myApp.controller('MyTodoCtrl', function($scope, localStorageService) {
    'use strict';

    $scope.myTodoApp = {
      todoList: localStorageService.get('todoList') ||
      [{todoText: "New Todo", isEditable: false}],

      addTodo: function(newTodoText){
        var i, /* For loop iterator. JSLint requires moving it up here, even
                  though it would be better to keep in the for loop. Now,
                  regardless of the condition before the loop, the variable
                  will be reserved in memory. */
        todoAlreadyExists = false;

        if(newTodoText.length > 0){
          /*JSLint doesn't like i++*/
          for(i=0; i<this.todoList.length; i += 1 ){
            if(this.todoList[i].todoText === newTodoText) {
              todoAlreadyExists = true;
            }
          }
          console.log((!todoAlreadyExists));
          if(!todoAlreadyExists){
            /*  the todo object is pushed inline instead of creating a var
                first to reduce memory usage */
            this.todoList.push({todoText: newTodoText, isEditable: false});
            console.log(this.todoList[0]);
          }
        }
        /* Empty out the view's text */
        $scope.todoTextBoxValue = "";
      },

      removeTodo: function(index) {
        this.todoList.splice(index,1);
      },

      editTodo: function(index, text){ //*** ADD CHECK TO SEE IF TEXT ALREADY EXISTS ***
        //only save if we're done with editting and have clicked the edit button
        var todo = this.todoList[index];
        if(todo.isEditable){
          todo.text = text;
        }
        todo.isEditable = !todo.isEditable;
      }
    };

    $scope.$watch('myTodoApp.todoList', function () {
      localStorageService.set('todoList', $scope.myTodoApp.todoList);
    }, true);
  });
