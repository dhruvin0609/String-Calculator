function add(numbers) {
    // Check if the input is empty
    if (!numbers) {
        return 0;
    }

    // Split the delimiter and the numbers to be processed
    const { delimiter, numbersString } = extractDelimiterAndNumbers(numbers);

    // Split the numbers string and convert to an array of numbers
    const nums = split(numbersString, delimiter);

    // Check for negative numbers
    checkForNegatives(nums);

    // Sum the numbers
    return sumNumbers(nums);
}

// Extracts the custom delimiter and numbers 
function extractDelimiterAndNumbers(numbers) {
    let delimiter = /[\n,]/; // Default delimiters are comma and newline
    let numbersString = numbers;

    // Check if the string starts with a custom delimiter declaration
    if (numbers.startsWith('//')) {
        const endOfDelimiterIndex = numbers.indexOf('\n');
        const delimitersPart = numbers.substring(2, endOfDelimiterIndex);

        if (delimitersPart.startsWith('[') && delimitersPart.endsWith(']')) {
            // Extract multiple delimiters
            const delimiters = delimitersPart.match(/\[([^\]]+)\]/g).map(d => d.slice(1, -1));
            delimiter = new RegExp(`[${delimiters.join('')}]`);
        } else {
            // Single custom delimiter
            delimiter = new RegExp(`[${delimitersPart}]`);
        }

        numbersString = numbers.substring(endOfDelimiterIndex + 1);
    }

    return { delimiter, numbersString };
}

// Splits the numbers string based on the delimiter
function split(numbersString, delimiter) {
    return numbersString.split(delimiter).map(Number);
}

// Throws an error if any negative numbers are found in the array
function checkForNegatives(nums) {
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
}

// Sums the numbers, ignoring NaN values and numbers greater than 1000
function sumNumbers(nums) {
    return nums.reduce((sum, num) => sum + (isNaN(num) || num > 1000 ? 0 : num), 0);
}

module.exports = add;
