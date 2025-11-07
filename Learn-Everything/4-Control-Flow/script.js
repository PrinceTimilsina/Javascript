// if else else if
// switch case
// early return pattern
let a=1;
if(a>=1){
   console.log("The number is positive")
}

// switch cases

switch(3){
	case 1:
		break;
	case 2:
		break; 
	case 3:
		console.log("it is trueeee")
	default:
}

//early return pattern
function getVal(val){
	if(val<100) return 'A';
	else if(val<20) return 'B';
	else if(val<10) return 'C';
	else return 'E';
}

getVal(45);

//---exercise----