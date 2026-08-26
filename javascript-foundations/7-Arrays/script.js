// let arr = [1,23,3,44,5,34,54,23,56];
// arr[2]=12;

let arr = [1,2,3,4,5];
arr.push(234);

let apt = [1,2,3,4,5,5,4];
apt.pop();
apt.shift();
apt.unshift();

let sli = [1,3,4,5]
sli.splice(2,2); //this changes actual array
//         (from which index,how many value)

let sci = [1,2,3,4,5]  //this gives new copy

let newarr = sci.slice(0,3);


let array = [1,2,3,4,5];
// array.reverse();

let array2 = [5,2,3,1,4,6,8];
array2.sort(function(a,b){
    return a-b; //ascending //b-a descending order
})

//forEach

array.forEach(function(val){
    console.log(val);
})

//map;

let aray2 = array.map(function(val){
    return 12;
})

//filter;

let ar = [1,2,3,4,5]
ar.filter(function(val){
  return true; //true means
})