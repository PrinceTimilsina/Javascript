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

//----Simple Example;
// function addTwoNUmber(number1,number2)   //parameters
// {
//   console.log(number1+number2);
// }
// addTwoNUmber(5,9);                  //arguements

function add(num1,num2)
{
  let result=num1+num2;
  console.log(result);
}
add(4,7);
