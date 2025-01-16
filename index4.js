const names = ['Alice', 'Bob' , 'Charlie' , 'David',  'Emma'];
names.forEach(function(value){
   console.log(value);
})
names.forEach(function(value){
    if(value== 'Charlie'){
    }
    else{
        console.log(value);
    }
 })
 //break; continue are not allowed in forEach...

 //------MAP------------
//-to make array from given array having total no. equal to the previous one

let newarr= names.map(function(value){
    return value + " ji";
});





