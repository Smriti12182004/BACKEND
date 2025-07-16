let users=[
    {
        name:"Smriti",
        age:"20",
        address:"sddf"
    },
    {
    name:"Heli",
    age:"23",
    address:"gferd"
    },
]
      const fs= require("fs");
    fs.writeFile("../demo.txt",JSON.stringify(users),function(err){
        if(err){
            return console.log(err);
        }
        console.log("users written sucessfully");
    })
    

