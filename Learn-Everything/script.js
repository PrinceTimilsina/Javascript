//var,let,const-line by line comparion
// var a;
// var a = 12;
// let a;
// let a = 13;
// const a = 14;  

//----------------var---------------------------

// var a; //Declaration
// var a = 10;//Declare and initialization

var a = 12;
var a = 13;
//-PROBLEMS--
//it adds it into window
//function scoped
//you can declare it again with same name and it won't show error

//-----------------let-----------------------------
// let a = 12;
// let a = 13;

//------------------const---------------------------
//-Value must be cosntant through out the code

//Scope (global,block,functional)
// var a = 12;----global
//  {
//   var d = 10;  --------block
// }
// function abc(){
// 	var c = 13;   ------functional
// }

// Reassignment,redeclaration

// var a = 12;
// a = 13;   -------reassignment

// var a = 233; -----redeclaration

//NOTE:Redeclaration is possible with var but redeclaration is not possible with  let


//TEMPORAL DEAD ZONE---IMP IMP IMP IMP 

console.log(ab);
let ab = 12;


