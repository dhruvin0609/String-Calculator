function add(numbers) {
    // Check if the input is empty, null, or undefined
    if (!numbers) {
        return 0;
    }

    // Split the input string by commas and convert each part to a number
    const nums = numbers.split(',').map(Number);

    // Sum up the numbers, ignoring any invalid numbers (NaN)
    return nums.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}

module.exports = add;
