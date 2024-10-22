const path =require("path");




console.log(__dirname); // for current directory path




console.log(__filename); // for current file path





const currentFileBaseName=path.basename(__filename);  // to access the current file name only from the given path.
console.log(currentFileBaseName);





const DirBaseName=path.basename(__dirname);   // to access the current dir name only from the given path.
console.log(DirBaseName);





const fileExtentionName=path.extname(__filename);     // use path.
console.log("File Extention Name : ",fileExtentionName);






//parse method
const returnObj=path.parse(__filename); /*
# parse method returns an object for given path as:
Ex:- 
 returned Objext :  {
  root: '/',
  dir: '/home/thoughtwin/Documents/Backend/Node tutorials/Tutorial-8',
  base: 'pathModule.js',
  ext: '.js',
  name: 'pathModule'
}
*/
console.log("returned Object : ",returnObj);





// format method
/*
The `format` method takes a obj of parse path and returns the full path in one string.
*/
const pathObj=  {
    root: '/',
    dir: '/home/thoughtwin/Documents/Backend/Node tutorials/Tutorial-8',
    base: 'pathModule.js',
    ext: '.js',
    name: 'pathModule'
  }
  const returnedFullPath=path.format(pathObj);
  console.log("Full path : ",returnedFullPath);





  // isAbsolute method 
  // return true or false to given path on being absulte or not
  // it return trure,false on file is absulte or not. 
  const returnValue=path.isAbsolute(__dirname);
  console.log("isAbsolute : ",returnValue);





  // path.join() method
  // this methods joins all the given paths inside it
  console.log(path.join("file1","file2"));




  //Path.resolve()
  // will learn about this
  console.log(path.resolve(__filename,"file1/file2/index.js"))
  console.log(path.resolve(__filename,"/file1"))
