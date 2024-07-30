function add(numbers) {
    // Check if the input is empty, null, or undefined
    if (!numbers) {
        return 0;
    }

    // Determine the delimiter and the numbers to be processed
    const { delimiter, numbersString } = toIntegerAndDelimiter(numbers);

    // Split the numbers string and convert to an array of numbers
    const nums = split(numbersString, delimiter);

    // Check for negative numbers
    checkNagatives(nums);

    // Sum the numbers, ignoring any invalid numbers
    return sumNumbers(nums);
}

function toIntegerAndDelimiter(input) {
    let delimiter = /[\n,]/; // Default delimiters are comma and newline
    let numbersString = input;

    // Check if the input starts with a custom delimiter declaration
    if (input.startsWith('//')) {
        const parts = input.split('\n');
        delimiter = new RegExp(`[${parts[0].slice(2)}]`); // Extract custom delimiter
        numbersString = parts[1];
    }

    return { delimiter, numbersString };
}

function split(numbersString, delimiter) {
    return numbersString.split(delimiter).map(Number);
}

function checkNagatives(nums) {
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
}

function sumNumbers(nums) {
    return nums.reduce((sum, num) => sum + (isNaN(num) || num > 1000 ? 0 : num), 0);

}

module.exports = add;
