
// add function 

function add(numbers) {
    //implementation for initial test
    if (!numbers)
        return 0;

    // Convert the input to a number
    let sum = Number(numbers);

    // Check if the conversion resulted in NaN
    // Return 0 if the input is not a valid number, otherwise return the number
    return isNaN(sum) ? 0 : sum;
}
module.exports = add;
