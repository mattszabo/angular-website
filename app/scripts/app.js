/*jslint white: true, devel: true */
/**
* @ngdoc overview
* @name angularApp
* @description
* # angularApp
*
* Main module of the application.
*/

/*global angular */
var angularApp = angular
.module('angularApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.sortable',
  'LocalStorageModule',
  'ngDraggable'
]);
angularApp.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  'use strict';
  localStorageServiceProvider.setPrefix('ls');
}])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .when('/mytodo', {
      templateUrl: 'views/mytodo.html',
      controller: 'MyTodoCtrl',
      controllerAS: 'mytodo'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl',
      controllerAS: 'contact'
    })
    .otherwise({
      redirectTo: '/'
    });
});
