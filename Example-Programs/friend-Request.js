//-JS---code for friendrequest:
var state = document.querySelector("h5");
console.log(state);
var btn = document.querySelector("#add")
var check = 0;
btn.addEventListener("click",function(){
    if(check == 0){
     state.innerHTML="Friends";
     state.style.color="Green";
     console.log("Hey hey hey");
     btn.innerHTML="Remove";
     check = 1;
    }
    else{
        state.innerHTML="Stranger";
        state.style.color="red";
        btn.innerHTML="Add Friend";
        check=0;
    }
})



