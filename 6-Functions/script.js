console.log("------Function------");
//what why how?
//WAY-I
function repeat(){
    console.log("WHYWHYWHWY");
}

repeat();  //--function call

//II
let fnc = function(){
  //fnc expression
}

//--FAT ARROW FUNC

let a = ()=>{
    console.log("fat");
}

a();

//PARAMETERS,AND ARGUMENTS
function add(v1,v2){  //--------------->v1,v2 are parameters
    console.log(v1+v2)
}
add(2,3);   //------------------------->arguments


function add(a,b)
{
  console.log(a+b)
}
add();

//--when there are more arguments then we need to make that much parameters,so,to protect from it we use rest ...  or its also called spread
//  if ... is added at function's parameter space then it is rest
// if... is at arrrays and object then its spread operator

function absd(a,b,c,...val){
    console.log(a,b,c,val)
}

absd(1,2,3,4,5,6,7,8)

//return ------

function ans()
{
    return 54;
}

let abc = ans();
console.log(abc);

//--first class functions



