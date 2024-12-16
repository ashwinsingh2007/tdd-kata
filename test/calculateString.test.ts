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
  
});
