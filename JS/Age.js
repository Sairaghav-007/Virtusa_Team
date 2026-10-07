
function calculateAge(birthDateString) {
    let dob = new Date(birthDateString);
    let today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    let monthDifference = today.getMonth() - dob.getMonth();
    let dayDifference = today.getDate() - dob.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
}


let dobInput = process.argv[2] || "2003-08-15";

console.log("Birth Date:", dobInput);
console.log("Calculated Age:", calculateAge(dobInput));