'use strict';

describe('Controller: TravelCtrl', function () {

  // load the controller's module
  beforeEach(module('fullstackApp'));

  var TravelCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CasesCtrl = $controller('TravelCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
