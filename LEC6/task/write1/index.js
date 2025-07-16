const fs=require("fs") ;
fs.writeFile("../f1.txt","g26 hello", function(err,data){
    if(err){
        return console.log(err);
    }   
    console.log(data);     
})

fs.writeFile("../f2.txt","g26 hello", function(err,data1){
    if(err){
        return console.log(err);
    }   
    // console.log(data1);
})
// fs.writeFile("../result.txt","", function(err,data2){
//     if(err){
//         return console.log(err);
//     }   
//     console.log(data2);
//     result2=data2;     
// })
console.log(process.argv[3]);