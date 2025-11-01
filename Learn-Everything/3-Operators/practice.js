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