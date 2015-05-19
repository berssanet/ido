'use strict';

angular.module('idoApp').controller('PostCtrl', function ($scope, $http, socket, Auth) {
    $scope.awesomePost = [];
    
    $scope.getCurrentUser = Auth.getCurrentUser;

    $http.get('/api/posts').success(function(awesomePost) {
      $scope.awesomePost = awesomePost;
      socket.syncUpdates('post', $scope.awesomePost);
    });

    $scope.addPost = function() {
      if($scope.newPost === '') {
        return;
      }
      $http.post('/api/posts', { name: $scope.newPost, postedBy: $scope.getCurrentUser()._id });
      $scope.newPost = '';
    };

    $scope.deletePost = function(post) {
      $http.delete('/api/posts/' + post._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('post');
    });
  });
