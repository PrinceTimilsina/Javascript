let x=10;
let y=20;

if(x>5 && y<25){
	console.log("A");
}
else{
	console.log("B");
}
//Q2
let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn){  //if any of there two option is true then the result will be true
	console.log("Access granted");
}

else{
	console.log("ACCESS DENIED");
}

//Q3.
let temp=35;
if(!(temp < 30)){   //here,it means if temperature is not less than 30
	console.log("Hot");
}
else{
	console.log("Pleasant");
}

//Q4

let a = 0;
if(a){
	console.log("Truthy");
}

else{
	console.log("Falsy");
}

//Q5

let score =  50;
let grade = score >= 90? "A" : score>=75 ? "B" : score >= 60?"c": "fail";
console.log(grade); //----fail----

//Q5

let points = 120;
let status =  points>100?"Gold" : points>50?"Silver" :"Bronze";
console.log(status);

//Q6  

let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log(access);