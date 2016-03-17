'use strict';

/**
 * @ngdoc overview
 * @name infoStudent
 * @description
 * # infoStudent
 *
 * Main module of the application.
 */
angular
  .module('infoStudent', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider, localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
    $routeProvider
      .when('/', {
        templateUrl: 'views/student_manager/index.html',
        controller: 'IndexController'
      })
      .when('/student_details/new', {
        templateUrl: 'views/student_manager/new.html',
        controller: 'NewController'        
      })
      .otherwise({
        redirectTo: '/'
      });
  });
