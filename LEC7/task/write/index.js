let users=[
    {
        name:"abc",
        age:"20",
        address:"asaddf"
    },
    {
    name:"Heiy",
    age:"23",
    address:"gdd"
    },
]
let people=[
    {
        name:"xyz",
        age:"20",
        address:"ddf"
    },
    {
    name:"Hi",
    age:"23",
    address:"gfsf"
    },
]
      const fs= require("fs");
    fs.writeFile("../f1.txt",JSON.stringify(users),function(err){
        if(err){
            return console.log(err);
        }
        console.log("users written sucessfully");
    })
    
    //   const fs= require("fs");
    fs.writeFile("../f2.txt",JSON.stringify(users),function(err){
        if(err){
            return console.log(err);
        }
        console.log("users written sucessfully");
    })

    fs.writeFile("../result.txt",JSON.stringify(people),function(err){
        if(err){
            return console.log(err);
        }
        console.log("users written sucessfully");
    })
