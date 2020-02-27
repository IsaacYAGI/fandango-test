var should = require('should');
const calculator = require('./utils.js');


it('should return [2,8]', () => {
  let input = [2, 5, 8, 14, 0];
  let output = calculator.subSetCalculator(input,10);
  output.should.be.eql([2,8]);
});

it('should return false', () => {
    false.should.be.equal(false);
});
