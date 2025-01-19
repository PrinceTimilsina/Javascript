//-for only one element::
// var elem1 = document.querySelector("#elem1");
// var elemImage = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove",function(dets){
// elemImage.style.left = dets.x + "px"
// elemImage.style.top = dets.y + "px"
//     // console.log(dets.x);
// })

// elem1.addEventListener("mouseenter",function(dets){
//     elemImage.style.left = dets.x + "px"
//     elemImage.style.top = dets.y + "px"
//     elemImage.style.opacity=1;
//          // console.log(dets.x);
//     })

// elem1.addEventListener("mouseleave",function(dets){
//     elemImage.style.left = dets.x + "px"
//     elemImage.style.top = dets.y + "px"
//      elemImage.style.opacity=0;
//           // console.log(dets.x);
//      })

//here comes main:
var elem = document.querySelectorAll(".elem");
elem.forEach(function(val){
console.log(val.childNodes)

     val.addEventListener("mouseenter",function(){
       val.style.backgroundColor="red"

     })

     val.addEventListener("mouseleave",function(){
          val.style.backgroundColor="transparent"
     })

})