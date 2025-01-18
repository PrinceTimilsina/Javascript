// alert("Hello there!")
console.log("Hi!")
console.log(window)
window.console.log("hello")
//window object is browser's object create by browser,
document.body.h1="prince"
console.log(document.body.childNodes[1])
document.body.style.backgroundColor="black"
// document.body.childNodes[3].innerText = "abcd"
let head = document.getElementById("header");//h1
console.log(head);
console.dir(head)
//html collection
let head2 = document.getElementsByClassName("main")
console.log(head2)
console.dir(head2)

let tag = document.getElementsByTagName("h2");
console.dir(tag);
console.log(tag)

let pars = document.getElementsByTagName("p");
console.dir(pars)
console.log(pars)

//queryselector

let elements = document.querySelector("p");
console.dir(elements);
console.log(elements)

let firstelements = document.querySelector("p");
console.dir(firstelements);

let allelements = document.querySelectorAll("p");
console.dir(allelements);