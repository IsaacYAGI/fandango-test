const assert = require('assert');
const calculator = require('./utils.js');


it('should return true', () => {
  assert.equal(calculator.subSetCalculator([1],1), true);
});

it('should return false', () => {
    assert.equal(calculator.subSetCalculator([2],2), false);
});
