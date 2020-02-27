var should = require('should');
const calculator = require('./utils.js');


it('should return [2,8]', () => {
  let input = [2, 5, 8, 14, 0];
  let output = calculator.subSetCalculator(input,10);
  output.should.be.eql([2,8]);
});

it('should return [0,20]', () => {
  let input = [45, 0, 9, 4, 20];
  let output = calculator.subSetCalculator(input,20);
  output.should.be.eql([0,20]);
});

it('should return [9,9]', () => {
  let input = [1, 18, 9, 7, 9, 8, 10];
  let output = calculator.subSetCalculator(input,18);
  output.should.be.eql([9,9]);
});
