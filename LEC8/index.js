const express = require ('express')

const app = express()

app.get('/', (req, res) => {

//   res.send('<h1>ok</h2>')
//   res.sendFile(dirname+'/index.html')
// res.json({
//     name:"Smriti",
//     age:"26"
res.end("hi");
})

//PATH VARIABLE
// 1. query paramter:
app.get("/watch",(req,res)=>{
    // console.log(req.query.v);
    // http://localhost:3000/watch?v=yaaay&n=okayy
    let videoId=req.query.v;
    let nId=req.query.n;
    res.send("id got it"+" "+videoId+" "+nId);
    // console.log(videoId);
    // res.send("id got it");
})
// 2. params
// http://localhost:3000/watch/heellooo
app.get("/watch/:v/video/:n",(req,res)=>{
        console.log(req.params.v);
        console.log(req.params.n);
    res.send("id got ittt")
})

app.listen(3000,function(){
    console.log("Server is starting");
})
