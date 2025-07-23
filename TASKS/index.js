const express= require("express");
const app= express();
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/users",(req,res)=>{
    let username= req.body.username;
        let password= req.body.password;
        res.json({username,password})


})
app.listen(4000,()=>{
  console.log("Server is running");
})