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
     val.addEventListener("mouseenter",function(){
       val.childNodes[3].style.opacity=1  //val.child node - 3 is image img is 3rd child

     });

     val.addEventListener("mouseleave",function(){
          val.childNodes[3].style.opacity=0
     });
    
     val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.x + "px"; //style.left: Sets the distance of the element's left edge from its parent container's left edge.
    });                                               // style.right: Sets the distance of the element's right edge from its parent container's right edge.
});