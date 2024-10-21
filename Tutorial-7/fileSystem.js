/*

# `fs` module is a core module of js it comes with node.
# `fs` module is used to interact with files.


*/

const fs= require("fs"); // acquiring the fs module

// 1. creating or writing into a file.

// it overrides the data when we calls it again.
//fs.writeFileSync("test1.txt","this is a text test file");// sync file 


// 2. creating or writing into a file.

// it overrides the data when we calls it again.
//fs.writeFile("test2.txt","Test2 file",(error)=>{  //async file
//    console.log("error occurs");
//});


//3. reading a file with fs.readFileSync()

//let returnData=fs.readFileSync("./test1.txt","utf-8");// sync function
//console.log("return data :\n",returnData);


//4. reading a file with fs.readFile()

//fs.readFile("./test1.txt","utf-8",(error,data)=>{   
//    console.log(data);
//});


//5. to add data into a file use appendFilesync()

//fs.appendFileSync("test2.txt","{name :krishnakant thakur}");



//6. to add data into a file use appendFile()

//fs.appendFile("test2.txt","{name :kissu thakur}",(error)=>{
//    console.log("error occurs");
//});



