
function countVowelsAndConsonants(str: string): void {
    let vowels: number = 0;
    let consonants: number = 0;

    for (let i: number = 0; i < str.length; i++) {
        let ch: string = str[i].toLowerCase();

      
        if (ch >= "a" && ch <= "z") {
            if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    console.log(`Input String: "${str}"`);
    console.log(`Vowels = ${vowels}`);
    console.log(`Consonants = ${consonants}`);
}


let inputStr: string = process.argv[2] || "Hello World";

countVowelsAndConsonants(inputStr);