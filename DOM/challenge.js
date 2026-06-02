//Challenge #1
//When button clicked:
//-change text
//-change color to blue
//-change background color of page

console.log("JS CONNECTED")

let title_text= document.getElementById("heading");
console.log("title_text");
let button= document.getElementById("btn");
console.log(button);

button.addEventListener("click",function(){
     title_text.textContent="BUTTON CLICKED";
     button.style.backgroundColor="blue";
     document.body.style.backgroundColor="yellow"
});
