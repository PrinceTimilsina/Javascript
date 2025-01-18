// Create a weight conversion program that:

// Takes your weight on Earth.
// Converts it to your weight on either the moon or Mars.
// To calculate your weight on Mars:


// destination_weight=earth_weight×0.38

// The output of the program should look like this:

// Your weight on Earth is 210 pounds.
// Your weight on Mars is 79.8 pounds.

let a=70;
console.log("Your weight on Earth is",a);
let gm=0.38;
let gM=0.165;
let Wm=a*gm;
console.log("Your weight on Mars is",Wm);
let WM=a*gM;
console.log("Your weight on MOON is",WM);
//console.log(`Your weight on Mars is ${Wm.toFixed(2)} kilograms.`);
//console.log(`Your weight on the Moon is ${WM.toFixed(2)} kilograms.`);