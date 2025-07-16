const fs= require("fs");
fs.readFile("../f1.txt","utf-8",function(err,data1){
    if(err){
        return console.log("err");
    }
    fs.readFile("../f2.txt","utf-8",function(err,data2){
        if(err){
            return console.log("err in 2nd file");
        }
        fs.writeFile("./result.txt",data1+"/n"+data2,function(err){
            if(err){
                console.log(err);
            }
            console.log("done");
        })
    }) 
 
    })


// fs.readFile("../f2.txt","utf-8",function(err,data2){
//     if(err){
//         return console.log("err");
//     }
//     console.log(data);
// })
 
