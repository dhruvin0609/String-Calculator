const add = require('./stringCalculator');

// base test case for empty string

test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
});