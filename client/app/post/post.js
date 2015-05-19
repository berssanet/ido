'use strict';

angular.module('idoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/posts', {
        templateUrl: 'app/post/post.html',
        controller: 'PostCtrl'
      });
  });
