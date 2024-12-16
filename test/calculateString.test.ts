import { expect } from 'chai';
import { add } from '../src/calculateString.ts';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).to.equal(0);
  });
  it('should return the number itself if only one number is provided', () => {
    expect(add("1")).to.equal(1);
    expect(add("5")).to.equal(5);
  });
  it('should return the sum of two numbers separated by a comma', () => {
    expect(add("1,2")).to.equal(3);
    expect(add("2,3")).to.equal(5);
  });
  it('should handle multiple numbers separated by commas', () => {
    expect(add("1,2,3,4")).to.equal(10);
    expect(add("10,20,30")).to.equal(60);
  });
  it('should handle new lines as well as commas', () => {
    expect(add("1\n2,3")).to.equal(6);
  });
  it('should support different delimiters specified at the start', () => {
    expect(add("//;\n1;2")).to.equal(3);
    expect(add("//|\n1|2|3")).to.equal(6);
  });
  it('should throw an exception for negative numbers', () => {
    expect(() => add("1,-2,3")).to.throw("negative numbers not allowed: -2");
  });
  
  it('should list all negative numbers in the exception message if multiple are present', () => {
    expect(() => add("1,-2,-3")).to.throw("negative numbers not allowed: -2,-3");
  });
  
  
  
});
