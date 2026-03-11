//Make a variable marks. If marks is: 90 or above → print "A" 70 to 89
// let marks = parseInt(prompt("Enter your marks:"));
let marks = 70;
if (marks >= 90) {
    console.log("CONGRATULATIONS, YOU'VE SCORED A");
} else if (marks >= 70) {
    console.log("CONGRATULATIONS, YOU'VE SCORED B");
} else if (marks >= 50) {
    console.log("YOU'VE SCORED C");
} else {
    console.log("FAIL");
}