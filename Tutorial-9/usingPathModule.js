const path=require("path");// creating multiple files by a while loop in Files folder
const fs=require("fs");
const filePath=path.join(__dirname,"Files");
let i=1;
while(i!=6){
  fs.writeFileSync(`${filePath}/file${i}.js`,"//All these files are for testing purpose");
    i++;
}


fs.readdir(filePath,(error,data)=>{     //provides all the files inside the given dir in an array.
    console.log(data)
})