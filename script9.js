 function reverseNumber(){
            var num=parseInt
            (prompt("Enter a number"));
            let rev=0;
            while(num!=0){
                rev=rev*10+num%10;
                num=Math.floor(num/10);
            }
            document.getElementById("reverseEx").innerHTML=rev;
        }
