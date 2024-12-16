import { expect } from 'chai';
import { add } from '../src/calculateString.ts';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).to.equal(0);
  });
});
