// run || node ./filename.js || to run a file 
//const Math=require('./Module.js'); // require is use to collect the 
//export file (inside it we passes the path of an file)
//console.log(Math.sum(34,55));


// let array=[7,'b','a',10,9,'d','c'];
// let numArray=[];
// let charString='';

// array.forEach((value)=>{
//    if(value>='a'&&value<='z'){
//       charString+=value;
//    }
//    else{
//     numArray.push(value);
//    }
// })

// const stringArray=charString.split('');
// stringArray.sort();
// numArray.sort((a,b)=>{
//     return a-b;
// })

// const result=stringArray.concat(numArray);
// console.log(result);

const data=require("./Module.js");
console.log("Name : ",data(23,45));

