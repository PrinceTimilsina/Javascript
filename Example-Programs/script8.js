 function printAllObjectMethods(){
            var ob={
                st_id:1,
                st_name:"bishal",
                isName:function(){
                    return `my name is ${this.st_name} ,${this.st_id}`
                }
            };
            document.getElementById("printObjectEx")
            .innerHTML=ob.isName();
        }
