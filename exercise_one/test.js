var should = require('should');
const calculator = require('./utils.js');

it('subsetCalculator should return [2,8]', () => {
  let input = [2, 5, 8, 14, 0];
  let output = calculator.subSetCalculator(input,10);
  output.should.be.eql([2,8]);
});

it('subsetCalculator should return [0,20]', () => {
  let input = [45, 0, 9, 4, 20];
  let output = calculator.subSetCalculator(input,20);
  output.should.be.eql([0,20]);
});

it('subsetCalculator should return [8,10]', () => {
  let input = [1, 18, 9, 7, 5, 8, 10];
  let output = calculator.subSetCalculator(input,18);
  output.should.be.eql([8,10]);
});

it('subsetCalculator should return [8,10]', () => {
  let input = [1, 1, 9, 7, 5, 8, 10];
  let output = calculator.subSetCalculator(input,18);
  output.should.be.eql([8,10]);
});

it('subsetCalculator should return [2,3]', () => {
  let input = [2,1,9,5,3];
  let output = calculator.subSetCalculator(input,5);
  output.should.be.eql([2,3]);
});

it('subsetCalculator should return [37,0]', () => {
  let input = [21,31,49,55,37,0,10,15,100];
  let output = calculator.subSetCalculator(input,37);
  output.should.be.eql([37,0]);
});

it('subsetCalculator should return [1,4]', () => {
  let input = [1,2,4,1,4,2,3,4,3,2,1];
  let output = calculator.subSetCalculator(input,5);
  output.should.be.eql([1,4]);
});