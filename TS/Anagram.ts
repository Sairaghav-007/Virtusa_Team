
function isAnagram(str1: string, str2: string): boolean {

    let s1: string = str1.toLowerCase();
    let s2: string = str2.toLowerCase();


    let sorted1: string = s1.split("").sort().join("");
    let sorted2: string = s2.split("").sort().join("");


    return sorted1 === sorted2;
}


let word1: string = process.argv[2] || "listen";
let word2: string = process.argv[3] || "silent";



if (isAnagram(word1, word2)) {
    console.log("Result: Anagram");
} else {
    console.log("Result: Not Anagram");
}