let userContainer= document.querySelector(".user-container");
function getUsersData(url){
    fetch(url)
    .then((res)=>{
        console.log(res);
        return res.json()
        
    })
    .then((data)=>{
        console.log(data);
        data.forEach(user=>{
            displayUser(user);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

function displayUser(user){
    let li= document.createElement("li");
    li.setAttribute("class","user-item")
    li.innerHTML=         `   <div class="user-info">
                <h1>
                    ${user.name}
                </h1>
                <p>
                    ${user.username}
                </p>
            </div>
            <div class="user-btn">
                <button class="user-delete">delete</button>
                                <button class="user-edit">edit</button>
            </div>`
            userContainer.appendChild(li);
}
getUsersData("https://jsonplaceholder.typicode.com/users")
