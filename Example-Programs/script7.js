  function ListObjectProperties(){
            var ob={
                student_class:9,
                student_id:1,
                st_name:"Prince"
              };
            console.log(ob.st_name,ob.student_class,ob.student_id);
            let text="";
            for(let x in ob){
                text+=ob[x]+" ";
                console.log(x);
            }
            document.getElementById("ListobjectEx") .innerHTML=text;
        }
