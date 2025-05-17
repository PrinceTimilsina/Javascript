let center = document.querySelector("#center")
center.addEventListener('mousemove',function(dets){
    console.log(dets.clientX,dets.clientY);
})

const btn = document.querySelector("#throttle");
const throttleFunction = (func, delay) =>
{
let prev = 0;
return (...args) => {
let now = new Date().getTime();
if (now - prev >= delay) {
prev = now;
return func(...args);
}
}
}

document.querySelector("#center")
.addEventListener("mousemove", throttleFunction((dets) => 
	{
       //your less repeatation code
     var div=  document.createElement("div")
     div.classList.add('imagediv');
	 div.style.left = dets.clientX +'px';
	 div.style.top= dets.clientY+'px';
	 
	 var img=  document.createElement("img");
	 img.setAttribute("src","https://images.unsplash.com/photo-1742017193358-e4f271a6b7b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8");
      div.appendChild(img);

	 document.body.appendChild(div);

	 gsap.to(img,{
      y:"0",
	  ease:Power1,
	  duration:.2
	 });

      gsap.to(img,{
      y:"100%",
	  delay: .6,
	  ease: Power2
	 });


     setTimeout(function(){
	    div.remove();	
	 },2000)

    }, 400));