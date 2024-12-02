/*
# HTTP REQUESTS
1.Get
2.Post
3.put
4.delete
5.patch
*/

const express=require("express");
const users=require("./MOCK_DATA.json");

const app=express();
const PORT=5000;

app.get('/users',(req,res)=>{
 
    const html=`<div>

    ${users.map((data)=>{
      return `
      <h4>${data.id} ${data.first_name}</h4>
      <br>
      `

    }).join("")}
    </div>
    `

    res.send(html);
})


app.get("/api/users",(req,res)=>{
    res.send(users);
})

app.get('/api/user/:id',(req,res)=>{
    const id=Number(req.params.id);
    const value=users.find((data)=>{
        return data.id===id;
    });

    res.send(value);

})

app.listen(PORT,()=>{
    console.log("server is started");
})

