const fs= require("fs");
console.log("start");
setTimeout(()=>{
    console.log("timer callback")
},0)
setImmediate(()=>{
    console.log("set Immediate callback")
})
function dosometask(){
    return new Promise((resolve,reject)=>{
        resolve("promise chala")
    })
}
fs.readFile("demo.txt",(data)=>{
    console.log("poll phase callback");
    setTimeout(()=>{
        console.log("timer 2");
    },0)
    setImmediate(()=>{
        console.log("immd 2");
    })
});
console.log("end");
dosometask().then((res)=>{
    console.log(res)
})
.catch((err)=>{
console.log(err)
})
process.nextTick(()=>{
    console.log("next tick")
})
/* process.nextTick() padh le*/