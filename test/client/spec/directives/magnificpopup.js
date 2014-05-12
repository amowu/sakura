'use strict';

describe('Directive: magnificPopup', function () {

  // load the directive's module
  beforeEach(module('sakuraApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    // element = angular.element('<magnific-popup></magnific-popup>');
    // element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the magnificPopup directive');
  }));
});
