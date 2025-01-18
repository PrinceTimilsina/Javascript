//Create a magic8.js program that can respond to any Yes or No questions with a different answer each time it executes.
let a=  Math.floor(Math.random() * 10); //random number between 0-9
for(let i=1;i<=8;i++){
    if(a==0){
        var p = prompt("Enter your Question:");
       console.log("Question:",p);
       console.log("Answer:It is certain"); 
       break; 
    }
    else if(a==1){
        var p = prompt("Enter your Question:");
        console.log("Question:",p);
        console.log("Answer:,May be");  
        break; 
    }
    else if(a==2){
        var p = prompt("Enter your Question:");
        console.log("Question:",p);
        console.log("Answer:Without a doubt");
        break; 
    }
    else if(a==3){
        var p = prompt("Enter your Question:");
        console.log("Question:",p);
        console.log("Answer:Yes, definitely");
        break; 
    }
    else if(a==4){
        var p = prompt("Enter your Question:");
        console.log("Question:",p);
        console.log("Answer:Most likely");
        break; 
    }
    else if(a==5){
        var p = prompt("Enter your Question:");
        console.log("Question:",p);
        console.log("Answer:Better not tell you now");
        break; 
    }
    else if(a==6){
        var p = prompt("Enter your Question:");
        console.log("Question:",p);
        console.log("Answer:Signs point to yes");
        break; 
    }
    else if(a==7){
        var p = prompt("Enter your Question:");
        console.log("Question:",p);
        console.log("Answer:Outlook good");
        break; 
    }
    else if(a==8){
        var p = prompt("Enter your Question:");
        console.log("Question",p);
        console.log("Answer:Definitely");
        break; 
    }
    else{
        var p = prompt("Enter your Question:");
        console.log("Question",p);
        console.log("Answer:Yes ");
        break; 
    }
}
