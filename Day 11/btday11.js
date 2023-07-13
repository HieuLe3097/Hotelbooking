// bat' duoc. click

/* const btn = document.getElementById("btn-id")

btn.addEventListener('click', () => {
console.log(btn)
});

const input = document.getElementById("input-id");
const text = document.getElementById("text");
// text.innerText = 'update Heading'
input.addEventListener("input", (e) => {
    text.innerText = e.target.value;
    // console.log(e.target.value)
}); */

/* const text = document.getElementById("text");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("btn-id");

button.addEventListener("click", (e) => {
  const user = userName.value;
  const pwd = password.value;
  if (!user || !pwd) {
    alert("User and Password need to be fill");
    text.innerHTML = "";
    return;
  }
  text.innerHTML = "Login Successfully!!";
});
*/

// userName.addEventListener("input", (e) => {
//  console.log(userName);
// });

/* cau A let myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", showAlert);

function showAlert() {
  let showAlert = alert("Thank you for clicking the button, Hiếu!");
} 
*/
// Get the input and h1 element using their IDs

/* cau 2 const input = document.getElementById("myInput");
const outputText = document.getElementById("outputText");

input.addEventListener("input", updateText);

function updateText() {
  const inputValue = input.value;
  outputText.textContent = inputValue;
}
*/
function togglePassword() {
  const passwordInput = document.getElementById("passwordInput");
  const toggleButton = document.getElementById("toggleButton");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Show";
  }
}
