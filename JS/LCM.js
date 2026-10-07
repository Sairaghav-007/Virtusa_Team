
function findLCM(a, b) {
    let max = Math.max(a, b);

    while (true) {
        if (max % a === 0 && max % b === 0) {
            return max;
        }
        max++;
    }
}


let num1 = Number(process.argv[2]) || 12;
let num2 = Number(process.argv[3]) || 18;

console.log(`LCM of ${num1} and ${num2} = ${findLCM(num1, num2)}`);


console.log("LCM of 4 and 6 =", findLCM(4, 6));