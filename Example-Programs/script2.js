 function posNegCheck(){
    let text;
    var num=parseInt (prompt ("Enter a number"));
       
    if (num>0) {
    text=`${num} is a positive number`;
    }

    else if (num<0){
    text=`${num}is a negative number`;
    }
    
    else if (num==0) 
    {
    text=`${num} is equal to zero`;
    }
    else{
    text=`${num} is not a number`;
    }

    document.getElementById("promptEx")
    .innerHTML=text;
}
