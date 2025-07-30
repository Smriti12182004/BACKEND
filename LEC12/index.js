// 1. create a new element using creatElement() function//===>element can be created using this in DOM
// 2. Insert data in that element by iether using .innerText or inner.HTML
// 3. insert new element in parent container using appendChild or append method
let todo={
    id:1234,
    title:"Study at 9pm"
}
function addTodo(todo){
    let li=document.createElement("li");
    let todoContainer=document.querySelector(".todocontainer")
    li.innerHTML= `<div>
                <input type="checkbox" name="todo1" id="todo1" />
                <h1>${todo.title}</h1>
            </div>
            <div>
                <button>✖</button>
                <button>✏</button>
            </div>`
todoContainer.appendChild(li)
}
addTodo(todo);