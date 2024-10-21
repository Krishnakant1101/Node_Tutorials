const fs= require("fs");
const input=process.argv; /*
1. if i am running my file in terminal like (`node index.js hghg khjgg jhgh `);
2. this goes inside the the process.argv.
3. process.argv is an array which stores all the given string on terminal in 
   a form of array. 
   Ex:-  process.argv=[ 
   '/home/thoughtwin/.nvm/versions/node/v20.17.0/bin/node',
   '/home/thoughtwin/Documents/Backend/Node tutorials/Tutorial-6/processArgv.js',
   'kissu',
   'poihuhugyg'
   ]
   
*/
fs.writeFileSync(input[2],input[3]);
