const add = require('../src/stringCalculator');

// base test case for empty string
test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
    expect(add("abc")).toBe(0);
    expect(add("01")).toBe(1);
    expect(add(null)).toBe(0);

});

// test case for checking sum of only 1 number
test('returns the number itself for a single number', () => {
    expect(add('1')).toBe(1);
    expect(add('5')).toBe(5);
});

// test case for checking sum of 2 numbers
test('returns the sum of two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
    expect(add('4,5')).toBe(9);
});

// test case for checking sum of 2 numbers
test('returns the sum of two comma-separated numbers', () => {
    expect(add('12,2')).toBe(14);
    expect(add('4,5')).toBe(9);
});

// test case for checking sum of 2 numbers
test('returns the sum of two comma-separated numbers', () => {
    expect(add('12,2')).toBe(14);
    expect(add('4,5')).toBe(9);
});

// test case for new line in between numbers
test('handles new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
    expect(add('4\n5\n6')).toBe(15);
    expect(add('1\n2,3')).toBe(6);
});

// test case for supports different delimiters
test('supports different delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
    expect(add('//|\n3|4|5')).toBe(12);
    expect(add('//|\n4|20')).toBe(24);
    expect(add('//***\n1***2***3')).toBe(6);
});

// test case for negative numbers
test('throws an exception for negative numbers', () => {
    expect(() => add('-1,2')).toThrow('Negative numbers not allowed: -1');
    expect(() => add('2,-3,4')).toThrow('Negative numbers not allowed: -3');
    expect(() => add('2,-3,-4')).toThrow('Negative numbers not allowed: -3, -4');
    expect(() => add('2,-31,-4')).toThrow('Negative numbers not allowed: -31, -4');
});

//if number is greater than 1000
test('ignores numbers greater than 1000', () => {
    expect(add('2,1001')).toBe(2);
    expect(add('1000,1001,3')).toBe(1003);
    expect(add('//;\n1002;2;1001')).toBe(2);
    expect(add('//***\n1002***2***1001')).toBe(2);
});

//handles multiple delimiters
test('handles multiple delimiters', () => {
    expect(add('//[*][%]\n1*2%3')).toBe(6);
    expect(add('//[;][|]\n4;5|6')).toBe(15);
    expect(add('//[;;][|]\n4;;5|6')).toBe(15);
    expect(add('//[****][|]\n4****5|6****2')).toBe(17);
});