var arr = [
    {dp:"https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww"
        ,story:"https://images.unsplash.com/photo-1563993297290-609c9406efcd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsfGVufDB8fDB8fHww"
    },

    {dp:"https://plus.unsplash.com/premium_photo-1670275658703-33fb95fe50d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
        ,story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsfGVufDB8fDB8fHww"
    },


    {dp:"https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1vZGVsfGVufDB8fDB8fHww"
        ,story:"https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
    },

    {dp:"https://plus.unsplash.com/premium_photo-1670948083292-d09d3b613eab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
        ,story:"https://plus.unsplash.com/premium_photo-1678963247798-0944cf6ba34d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
    },
];
var story =  document.querySelector("#story")
var clutter = "";
arr.forEach(function(elem,idx){
clutter += `
<div class="stories">
            <img id="${idx}"src="${elem.dp}" >
</div>
`;
});

// `` "template literals

story.innerHTML = clutter;

story.addEventListener("click", function(dets) {
    // console.log(arr[dets.target.id].story)
    document.querySelector("#fullscreen").style.display = "block";
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

   setTimeout(function(){
    document.querySelector("#fullscreen").style.display = "none";
   },3000)
});
