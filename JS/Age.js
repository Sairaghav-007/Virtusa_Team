// Function to calculate age from birth date (YYYY-MM-DD)
function calculateAge(birthDateString) {
    let dob = new Date(birthDateString);
    let today = new Date();

    // Step 1: Calculate year difference
    let age = today.getFullYear() - dob.getFullYear();

    // Step 2: Check if birthday hasn't arrived yet this year
    let monthDifference = today.getMonth() - dob.getMonth();
    let dayDifference = today.getDate() - dob.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--; // Birthday not reached yet this year
    }

    return age;
}

// You can pass a date as a command-line argument or use this default
let dobInput = process.argv[2] || "2003-08-15";

console.log("Birth Date:", dobInput);
console.log("Calculated Age:", calculateAge(dobInput));