function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(event) {
  event.preventDefault(); // Ngăn chặn gửi form đi và tải lại trang

  const numberA = parseInt(document.getElementById("numberA").value);
  const numberB = parseInt(document.getElementById("numberB").value);

  // Kiểm tra điều kiện a < b
  if (numberA >= numberB) {
    alert("Vui lòng nhập số a nhỏ hơn số b.");
    return;
  }

  let sum = 0;

  // Tính tổng các số nguyên tố
  for (let i = numberA; i <= numberB; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  document.getElementById(
    "result"
  ).textContent = `Tổng các số nguyên tố trong khoảng [${numberA}, ${numberB}]: ${sum}`;
}

document.getElementById("inputForm").addEventListener("submit", sumPrimes);
