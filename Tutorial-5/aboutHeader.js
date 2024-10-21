const http=require("http");
const data=require("./modules.js");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"});
    //The response.writeHead() property is used to send a response header to the incoming request
    /*
   1. Content-Type: text/html; charset=UTF-8
   2. Content-Type: text/css
   3. Content-Type: application/javascript
   4. Content-Type: application/json
   5. Content-Type: text/plain; charset=UTF-8
   6. Content-Type: application/xml
   7. Content-Type: image/png
   8. Content-Type: image/jpeg
   9. Content-Type: application/pdf
   10.Content-Type: multipart/form-data


   # use JSON.stringify(data) to convert data into a string;

 */
 res.write(JSON.stringify(data));
 res.end();


})

server.listen(1200,()=>{
    console.log("server has started");
})