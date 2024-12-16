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
});
