var Silabas = require('../silabas.js');
var assert = require("chai").assert;
var _ = require('lodash');

describe('Silabas', function(){

  var test_cases = JSON.parse(require('fs').readFileSync('test/silabas_test.json'));

  _.forEach(test_cases, function (expects, word) {

    it(word, function(){
      var silabas = Silabas(word);
      assert.deepEqual(silabas.syllables(), expects.syllables, "Syllables for "+word);
    })

  });

});