'use strict';
var assert = require('assert');
var Nuvem = require('../');

describe('dojo-s01e03-nuvem-cinzajs', function () {
  it('assert map and days', function () {

    var mapaInicio = [
      ['.', '.', '*', '.', '.', '.', '*', '*'],
      ['.', '*', '*', '.', '.', '.', '.', '.'],
      ['*', '*', '*', '.', 'A', '.', '.', 'A'],
      ['.', '*', '.', '.', '.', '.', '.', '.'],
      ['.', '*', '.', '.', '.', '.', 'A', '.'],
      ['.', '.', '.', 'A', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.']
    ];
    var mapaFinal = [
      ['*', '*', '*', '*', '*', '*', '*', '*'],
      ['*', '*', '*', '*', '*', '*', '*', '*'],
      ['*', '*', '*', '*', '*', '.', '*', '*'],
      ['*', '*', '*', '*', '.', '.', '.', '.'],
      ['*', '*', '*', '*', '.', '.', 'A', '.'],
      ['*', '*', '*', 'A', '.', '.', '.', '.'],
      ['.', '*', '.', '.', '.', '.', '.', '.']
    ];

    var nuvem = new Nuvem(mapaInicio);

    nuvem.advanceDay();
    nuvem.advanceDay();

    assert.deepEqual(nuvem.getActualMap(), mapaFinal);
    assert.equal(nuvem.getDaysElapsed(), 3);
  });
});
