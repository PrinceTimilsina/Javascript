// var a ="Prince";
// console.log(a);
// var a =10;
// console.log(a);
// var a=10-5;
// console.log(a);

// var a=10;
// var b=3;
// console.log(a/b);
// console.log(a%b);

// alert("Hello there");
// var ans = confirm("Are you an adult");
// console.log(ans);
// var ans = prompt('enter you name');
// console.log(ans);

//js data types : primitive ; (number ,string ,boolean,undefined,null,symbol,NAN),reference(Array,Objects,functions);
// var a;  //undefinned
// console.log(a);

// var a=10;
// var b="prince";
// console.log(a*b);//NaN

// var a =10;
// var b="Prince"
// console.log(a+b)//10Prince  ,

// if(condition){

// }
// var a = prompt("Enter a number");
// if(a%5==0){
//     console.log("Entered number is divisible by 5");
// }
// else{
//     console.log("Entered number is not divisible by 5");
// }

// const n = prompt("Enter a number");
// for(i=1;i<=10;i++){
//    var c=n*i;
//    console.log(c);
// }

// function date(){
//     console.log("Today is 15th JAN-2025");
// }
// date();

// var a =[23,4,5,6,6,7,]
//index:  0  1 2 3 4 5 
// console.log(a);  //Array

// var a=[10,20,4,5,6,6]
// console.log(a[4]);//6

// var arr=[1,2,3,4,5,6,7];
// console.log(arr);
// arr.push(99);
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.length)

// var arr = [10,20,30,40]
// arr.forEach(function(elem){
//     console.log('hello',elem)
// })

//------------OBJECTS--------

// ()=function
// {}=Object;
// []=array

// var obj = {
//     user:'Prince Timilsina',
//     age:15
// }
// console.log(obj.user)

// var obj1={
//     model:'iphone',
//     price:70000,
//     color:'white'
// }

// var obj2={
//     model:'Samsung',
//     price:79000,
//     color:'white'
// }
// var obj3={
//     model:'nothing',
//     price:90000,
//     color:'white'
// }
// console.log(obj1);
// console.log(obj1.model);
// console.log(obj1.price);
// console.log(obj1.color);
// console.log(obj2);
// console.log(obj3);

// var user ={
//     userName: 'Prince',
//     age:69,
//     greet:function gret(){ //method
//         console.log("Good morning") 
//         return 0;
//     }
// };
// // console.log(user)
// // user.greet();
// // console.log(user.greet())

// var arr=      //ARRAY OF OBJECTS
// [  {name:"Prince",age:15},
//     {name:"Arthank",age:20},
//     {name:"AAkash",age:22} 
// ]
// console.log(arr[0].age);

//----------------DOM---------------
// DOCUMENT OBJECT MODEL
// 4-PILLARS OF DOM:
// I. SELCTION OF AN ELEMENT
// II. Changing HTML
//III. CHANGING CSS
// IV.Event listener

//--I---
// var h1=document.querySelector('h1');
// console.log(h1);
// //---II
// h1.innerHTML ="Changed"
// //---III
// h1.style.color = 'blue'
// h1.style.backgroundColor="royalblue"
//---IV---
// var h1= document.querySelector('h1');

// h1.addEventListener('click',function(){
//    h1.innerHTML="Changed" })
 //dblclick

 //--------------------------------------