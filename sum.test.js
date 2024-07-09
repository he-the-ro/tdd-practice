import { sumOfMultiples } from './problem1';

describe('Problem 1: Sum of Multiples', () => {
  test('finds the sum of all multiples of 3 or 5 below 1000', () => {
    expect(sumOfMultiples(1000)).toBe(233168);
  });
});
