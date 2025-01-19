let main = document.querySelector("#main");
var cursor =  document.querySelector(".cursor");
console.log(main);
console.log(cursor);

main.addEventListener("mousemove",function(dets){
   cursor.style.left = dets.x+"px"
     cursor.style.top = dets.y+"px"
    // console.log(dets.x);//or, dets.y
})