var angularApp=angular.module("angularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.sortable","LocalStorageModule","ngDraggable"]);angularApp.config(["localStorageServiceProvider",function(a){"use strict";a.setPrefix("ls")}]).config(["$routeProvider",function(a){"use strict";a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/mytodo",{templateUrl:"views/mytodo.html",controller:"MyTodoCtrl",controllerAS:"mytodo"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAS:"contact"}).otherwise({redirectTo:"/"})}]),angular.module("angularApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]});var angularApp=angular.module("angularApp");angularApp.controller("MyTodoCtrl",["$scope","localStorageService",function(a,b){"use strict";a.myTodoApp={todoList:b.get("todoList")||[{todoText:"New Todo",isEditable:!1}],addTodo:function(b){var c,d=!1;if(b.length>0){for(c=0;c<this.todoList.length;c+=1)this.todoList[c].todoText===b&&(d=!0);console.log(!d),d||(this.todoList.push({todoText:b,isEditable:!1}),console.log(this.todoList[0]))}a.todoTextBoxValue=""},removeTodo:function(a){this.todoList.splice(a,1)},editTodo:function(a,b){var c=this.todoList[a];c.isEditable&&(c.text=b),c.isEditable=!c.isEditable}},a.$watch("myTodoApp.todoList",function(){b.set("todoList",a.myTodoApp.todoList)},!0)}]),angular.module("angularApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularApp").run(["$templateCache",function(a){"use strict";a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/contact.html","<p>This is the contact view.</p>"),a.put("views/main.html","<!DOCTYPE html> <h2>main page</h2>"),a.put("views/mytodo.html",'<!DOCTYPE html> <html> <header class="header"> <h1>mytodo</h1> <p>Add, remove and edit todos. Reorder A todo by dragging its number.</p> </header> <main> <div class="row todo-list"> <div class="col-md-6"> <!-- Todo input --> <form role="form" ng-submit="myTodoApp.addTodo(todoTextBoxValue)"> <div class="input-group add-todo"> <input type="text" ng-model="todoTextBoxValue" placeholder="What needs to be done?" class="form-control"> <span class="input-group-btn"> <input type="submit" class="btn btn-primary" value="Add"> </span> </div> </form> </div> <div class="col-md-6"> <!-- todo list --> <div ui-sortable ng-model="myTodoApp.todoList"> <p class="input-group" ng-repeat="todo in myTodoApp.todoList"> <span class="input-group-addon" id="draggable-todo-index"> {{$index+1}} </span> <!--script>$(\'#draggable-todo-index\').draggable();</script--> <span class="input-group-btn"> <button class="btn btn-todo-edit" ng-class="todo.isEditable ? \'btn-info\' : \'btn-success\'" ng-click="myTodoApp.editTodo($index, todo.text)" aria-label="Edit"> <i class="glyphicon glyphicon-edit"></i> </button> </span> <input type="text" ng-disabled="!todo.isEditable" value="{{todo.todoText}}" class="form-control"> <span class="input-group-btn"> <button class="btn btn-danger" ng-click="myTodoApp.removeTodo($index)" aria-label="Remove"> X </button> </span> </p> </div> </div> </div> </main> </html>')}]);