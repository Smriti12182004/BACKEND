// let el1=document.getElementById("heading");
// console.log(el1);
// let el2=document.getElementsByClassName("item");
// console.log(el2[0]);
// let el3=document.getElementsByTagName("p");
// console.log(el3[0]);
// let el4=document.querySelector("p");//returns element
let el4=document.querySelector("ul");

// let el5=document.querySelector(".item");
let el6=document.querySelectorAll("#container");
console.log(el4);
// console.log(el5);
console.log(el6);

// properties

// innerText
// innerHtml
// textContent

// let el4=document.querySelector("ul");
// let data = el4.innerText;
// console.log(data);
// el4.innerText = "changed using js";
// let data2 = el4.innerHTML;
// console.log(data2);
// let ul = document.querySelector("ul");
// let data3 = ul.innerText;
// let data4 = ul.textContent;
// console.log(data2);
// console.log(data3);
// console.log(data4);
// ul.innerHTML = `
{/* <li class="item">item4</li>
<li class="item">item5</li>
<li class="item">item6</li>
`; */}

/*
getAttribute
setAttribute
classList
*/
// let el5=document.querySelector(".item");
// console.log(el5);
// console.dir(el5.getAttribute("id"));
// console.log(el5.getAttribute("class"));
// el5.setAttribute("id","js");
// console.dir(el5.getAttribute("id"));
el5.classList.add("delete");
console.log(el5.classList.contains("delete"));
el5.classList.remove("item");
console.log(el5.classList);