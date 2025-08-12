const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));//middlewares
const Blogs= require("./model/user")
app.post("/blogs",async (req,res)=>{
    let {title,body}=req.body;
    console.log(title,body)
    //   res.send("got it")
      let newBlog = new Blogs({
        title: title,
        body: body,
        date: Date()
      })
      await newBlog.save();//object aapke database  mein save hojaega
        res.json({
            sucess:true,
            data: newBlog,
            message:"Blog added sucessfully"
        })
})

app.get('/', (req, res) => {
  res.send('Hello! Server is running.');
});

mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('Connected!'));
  app.get("/blogs",async (req,res)=>{
    let allBlogs =await Blogs.find();//returns  all data
    res.json({
        sucess:true,
        data: allBlogs,

    })

  })
  app.get("/blogs/:id",async (req,res)=>{
    let {id}= req.params;
    let blog= await Blogs.findById({_id:id});//finds data by id
    res.json({
        sucess:true,
        data: blog
    })
  })
  app.listen(3000, () => {
  console.log(`Server Started`);
});