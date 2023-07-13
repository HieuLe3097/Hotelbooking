function numberOneTriangle() {
  const n = prompt("Nhập một số từ 1 đến 10:");

  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

numberOneTriangle();
