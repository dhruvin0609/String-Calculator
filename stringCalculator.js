function add(numbers) {
    // Check if the input is empty, null, or undefined
    if (!numbers) {
        return 0;
    }

    let delimiter = /[\n,]/; // Default delimiters are comma and newline

    // Check if the input starts with a custom delimiter declaration
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(`[${parts[0].slice(2)}]`); // Extract custom delimiter
        numbers = parts[1];
    }

    // Split the input string by the determined delimiter(s) and convert each part to a number
    const nums = numbers.split(delimiter).map(Number);

    // Check for negative numbers and throw an error if any are found
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    // Sum up the numbers, ignoring any invalid numbers (NaN)
    return nums.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}

module.exports = add;
