 // const http= require("http");
// const server=http.createServer((req,res)=>{
//     res.write("Krishnakant Thakur you have successfully created this server");
//     res.end();
// })
// server.listen(2000,()=>{
//     console.log("server stared");
// })

const http=require("http");

const server=http.createServer((req,res)=>{
    res.write("server created sucessfully");
    res.end();
});

server.listen(2000,()=>{
    console.log("server started");
})