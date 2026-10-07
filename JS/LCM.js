// Function to find the Least Common Multiple (LCM) of two numbers
function findLCM(a, b) {
    // Start checking from the larger of the two numbers
    let max = Math.max(a, b);

    // Keep increasing 'max' until it is divisible by both 'a' and 'b'
    while (true) {
        if (max % a === 0 && max % b === 0) {
            return max; // Found the smallest common multiple
        }
        max++;
    }
}

// You can pass two numbers as command-line arguments or use these defaults
let num1 = Number(process.argv[2]) || 12;
let num2 = Number(process.argv[3]) || 18;

console.log(`LCM of ${num1} and ${num2} = ${findLCM(num1, num2)}`);

// Additional test case
console.log("LCM of 4 and 6 =", findLCM(4, 6));