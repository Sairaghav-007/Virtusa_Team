// Function demonstrating function overloading using rest parameters (...args)
function calculate(...args) {
    // Case 1: If 1 number is given, return its square
    if (args.length === 1) {
        return args[0] * args[0];
    }
    // Case 2: If 2 numbers are given, return their sum
    else if (args.length === 2) {
        return args[0] + args[1];
    }
    // Case 3: If 3 numbers are given, return their product (multiplication)
    else if (args.length === 3) {
        return args[0] * args[1] * args[2];
    }
    // Otherwise: Return an error message for unsupported number of arguments
    else {
        return "Please pass 1, 2, or 3 arguments.";
    }
}

// Get arguments from command line
let rawArgs = process.argv.slice(2);

if (rawArgs.length > 0) {
    let args = rawArgs.map(Number);

    if (args.some(isNaN)) {
        console.log("Error: All arguments must be valid numbers.");
    } else {
        let result = calculate(...args);
        if (args.length === 1) {
            console.log(`1 Argument (Square of ${args[0]}): ${result}`);
        } else if (args.length === 2) {
            console.log(`2 Arguments (Sum of ${args[0]} + ${args[1]}): ${result}`);
        } else if (args.length === 3) {
            console.log(`3 Arguments (Product of ${args[0]} * ${args[1]} * ${args[2]}): ${result}`);
        } else {
            console.log(result);
        }
    }
} else {
    // Default demonstration when no command-line arguments are provided
    console.log("No arguments passed. Running default test cases:");
    console.log("1 Argument (Square of 5):", calculate(5));
    console.log("2 Arguments (Sum of 10 + 20):", calculate(10, 20));
    console.log("3 Arguments (Product 2 * 3 * 4):", calculate(2, 3, 4));
}