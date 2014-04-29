'use strict';

describe('Directive: sticky', function () {

  // load the directive's module
  beforeEach(module('sakuraApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sticky></sticky>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sticky directive');
  }));
});
