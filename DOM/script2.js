function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30


function sayMyName()
{
  console.log("PRINCE");
}
sayMyName();

function addTwoNUmber(number1,number2)   //parameters
{
  console.log(number1+number2);
}
addTwoNUmber(5,null);                  //arguements

