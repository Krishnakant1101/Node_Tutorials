/*
# What is Express.js?

Express.js is an open-source web application framework for Node.js, designed to simplify 
the development of web applications and APIs. It provides a thin layer of fundamental web 
application features, without obscuring Node.js features that developers know and love. 
Its unopinionated design allows developers the freedom to structure their applications as
they see fit, making it versatile for a wide range of projects.

*/




/*

 # Install express :- "npm i express";

*/




/*
 
 # How to send Html data in response?
 
 res.send("<h1>Heading</h1>");

 or

 res.send(`
 <input type="text"/>
 <button>Click</button>
 `)

*/



/*

# How to send json data in express

res.send({
 name:"kissu",
 age:22
})

*/




/*

# how to get query data ex:'/about?name="kissu"
     res.send(req.query.name)


*/



const express=require("express");
const app=express();
app.get('',(req,res)=>{
    res.send("server created successfully");
    
})

app.get('/about',(req,res)=>{
    res.send(res.send({
        name:"kissu",
        age:22
       }));
})

app.get('/login',(req,res)=>{
    res.send("you have succesfully send Login");
})

app.get('/about/more',(req,res)=>{
    res.send("the comapany i am working on will relay on me in some time");
})

app.get('/querData',(req,res)=>{
    res.send(`${req.query.name}`)
})
app.listen(2000,()=>{
    console.log("server has started");
})