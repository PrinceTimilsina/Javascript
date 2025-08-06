//Bulb.js:
var bulb = document.querySelector("#bulb")
var btn =  document.querySelector("Button")  
var flag = 0;
btn.addEventListener("click",function(){
    if (flag==0){
    bulb.style.backgroundColor = "yellow"    
    console.log("ON");
    flag++;
}
 else{
    bulb.style.backgroundColor = "white";
    console.log("OFF");
    flag = 0;
 }   
})
