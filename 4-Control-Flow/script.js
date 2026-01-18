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

function getGrade(score){
	if(score >= 90 && score <=100)
		return 'A+';
	if(score >= 80 && score <=89)
		return 'A';
   if(score >= 70 && score <=79)
		return 'B+';
   if(score >= 60 && score <=69)
		return 'B';
	if(score >= 50 && score <=59)
		return 'C+';
	 if(score >= 40 && score <=49)
		return 'D+';
	 if(score>35 && score<40)
      return 'D';
	if(score >=0 && score <=35){
		return 'Fail';
	}

}

getGrade(89);

console.log(getGrade(89));

//----qn2----
