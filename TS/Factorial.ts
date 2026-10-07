
function factorial(n: number): number {
    let result: number = 1;

    for (let i: number = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}


let inputNum: number = Number(process.argv[2]) || 5;

console.log(`Calculating factorial for: ${inputNum}`);
console.log(`Factorial = ${factorial(inputNum)}`);