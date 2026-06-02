console.log("JS CONNECTED"); //to ensure proper connection
//CONNECTING DOCUMENT WITH JS;

let heading=document.getElementById("title");
console.log(heading);

let button=document.getElementById("btn");
console.log(button)

//STYLING USING JS;

heading.textContent="I changed this using JS"
heading.style.color="red"
heading.style.fontSize="100px"

//EVENT LISTENER;

button.addEventListener("click",function(){
heading.textContent="Button clicked";
});

