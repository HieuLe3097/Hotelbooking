/* const password = document.getElementById("password");
const username = document.getElementById("username");
const confirm = document.getElementById("confirm");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (password.value === confirm.value)
    return alert("Check your password again");
  alert("Register successfully");
});
*/

// const boxs = document.getElementsByClassName("box");

// for (let box of boxs) {
//   box.addEventListener("click", () => {
//     box.innerText = "X";
//   });
// }

// const array = [1, 2, 3, 4];
// const [x = 0, y = 0, ...z] = array;
// console.log(x, y, z);

const student = {
  name: "HieuLe",
  age: 18,
  course: {
    courseName: "C4JS140",
    lessons: 16,
  },
};
const {
  name,
  age,
  course: { courseName, lessons },
} = student;
console.log(courseName);

let x = 1,
  y = 2;
[x, y] = [y, x];
console.log(x, y);
