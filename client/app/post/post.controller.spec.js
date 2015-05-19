'use strict';

describe('Controller: PostCtrl', function () {

  // load the controller's module
  beforeEach(module('idoApp'));
  beforeEach(module('socketMock'));

  var PostCtrl,
      scope,
      $httpBackend;


  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
   $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/posts')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    PostCtrl = $controller('PostCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of posts to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomePost.length).toBe(4);
  });
});