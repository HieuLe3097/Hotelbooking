// Find element
// ID
let firstItem = document.getElementById("first-item");
console.log(firstItem);
/* let secondItem = document.getElementById('second-item')
console.log(firstItem)

console.log(secondItem) */

// Class
let items = document.getElementsByClassName("item");
console.log(items);
console.log(items[0]);

// Tag
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// Selector
let select = document.querySelector(".item");
console.log(select);

// --- Edit Element Value (attribute, text ,....)
// firstItem.innerHTML = 'Hello, this is HieuLe'
// firstItem.style = 'background-color: violet'
// firstItem.style.backgroundColor = 'orange'

// // Add or remove element
// const todoList = ["Homework", "Jongging", "Shopping"]
// const ul = document.createElement ('ul')
//     for (let i = 0; i < todoList.length; i++) {
//     const li = document.createElement ('li')
//     li.innerHTML = todoList [i]
//     ul.appendChild (i)
// }

// document.body.appendChild(ul)

/* function sayHello() {
  alert("Hello, Hieu");
}

function changeButtonColor() {
  greetingButton.style.backgroundColor = "blue";
  greetingButton.style.color = "white";
}

const greetingButton = document.getElementsByClassName("greetingButton")[0];
// greetingButton.onclick = sayHello
greetingButton.addEventListener("click", sayHello);
greetingButton.addEventListener("click", changeButtonColor);

// remove
greetingButton.removeEventListener("click", sayHello);
*/
setTimeout(function () {
  alert(`It's time to make a cup of coffee`);
}, 3000);
