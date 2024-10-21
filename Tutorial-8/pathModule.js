const path =require("path");
console.log(__dirname); // for current directory path
console.log(__filename); // for current file path

const currentFileBaseName=path.basename(__filename);  // to access the current file name only from the given path.
console.log(currentFileBaseName);

const DirBaseName=path.basename(__dirname);   // to access the current dir name only from the given path.
console.log(DirBaseName);

const fileExtentionName=path.extname(__filename);     // use path.
console.log("File Extention Name : ",fileExtentionName);