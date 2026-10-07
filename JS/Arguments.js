function calculate(...args) {

    if (args.length === 1) {
        return args[0] * args[0];
    }

    if (args.length === 2) {
        return args[0] + args[1];
    }

    if (args.length === 3) {
        return args[0] * args[1] * args[2];
    }

    return "Enter 1, 2, or 3 numbers.";
}



let args = process.argv.slice(2).map(Number);

let result = calculate(...args);

console.log(result);