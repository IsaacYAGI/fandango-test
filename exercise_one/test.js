var should = require('should');
const calculator = require('./utils.js');

it('subsetCalculator2 should return [2,8]', () => {
  let input = [2, 5, 8, 14, 0];
  let output = calculator.subSetCalculator2(input,10);
  output.should.be.eql([2,8]);
});

it('subsetCalculator2 should return [0,20]', () => {
  let input = [45, 0, 9, 4, 20];
  let output = calculator.subSetCalculator2(input,20);
  output.should.be.eql([0,20]);
});

it('subsetCalculator2 should return [8,10]', () => {
  let input = [1, 18, 9, 7, 5, 8, 10];
  let output = calculator.subSetCalculator2(input,18);
  output.should.be.eql([8,10]);
});

it('subsetCalculator2 should return [8,10]', () => {
  let input = [1, 1, 9, 7, 5, 8, 10];
  let output = calculator.subSetCalculator2(input,18);
  output.should.be.eql([8,10]);
});