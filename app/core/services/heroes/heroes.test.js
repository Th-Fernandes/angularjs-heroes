/**
 * @jest-environment jsdom
 */

global.mocha = true;

require('../../../../node_modules/angular/angular.min.js');
require('../../../../node_modules/angular-mocks/angular-mocks.js');
require('./heroes.service.js');

describe('Math service - addTwoNumbers', function(){
  var _HeroesService;

  beforeEach(() => {
    angular.mock.module('myApp.heroesService.service')
  });
  beforeEach(inject((HeroesService) => {
    _HeroesService = HeroesService;
  }));

  it('1 + 1 should equal 2', function(){
    var actual = _HeroesService.sum(1,1);
    expect(actual).toEqual(2);
  });
});
