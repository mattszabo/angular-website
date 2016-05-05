'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // Test our initial length of steps
  it('should attach a list of steps to the scope', function() {
    expect(scope.steps.length).toBe(0);
  });

  // Test adding a step to the steps list
  it('should add item to the steps list', function() {
    scope.addStep('Test 1');
    expect(scope.steps.length).toBe(1);
  });

  // Test that after adding that the step text box is cleared
  it('should clear the add step text box after adding', function() {
    scope.step = 'Test 1';
    scope.addStep(scope.step);
    expect(scope.step).toBe("");
  });

  // Test removing a step from the steps list
  it('should remove item from the steps list', function() {
    scope.addStep('Test 1');
    scope.removeStep(0);
    expect(scope.steps.length).toBe(0);
  });

});
