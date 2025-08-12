// function to get comment data
// third party librRY

console.log("axios")
async function getComment(URL){
    //how to send get req using axios
//     axios.get(URL).then((data)=>{
//         console.log(data);
//     }).catch(err=>console.log(err))

try{
    let comments =await axios.get(URL);
    console.log(comments);
}catch(error){
    console.log(error);

}
}
getComment("https://jsonplaceholder.typicode.com/comments");

// func to add new blog
addBlog("http://localhost:3000/","First Blog","First blog description")
async function addBlog(URL,title,description){
    try{let newBlog={
        title:title,
        description:description
    }
    let response=await axios.post(URL,newBlog);
    console.log(response);
}catch(error){
    console.log(error);
}
}