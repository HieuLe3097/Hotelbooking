// khối lệnh -> phạm vi khai báo, sử dngj biến
// 3 từ khóa khai báo biến
// phạm vi global (cứ không nằm trong phạm vi nào) -> su dung cho toan bo file
// phạm vi là gì?
// cứ khi dùng {} -> sẽ sinh ra 1 phạm vi (local)
// 


// let number = 10;

// // tạo 1 phạm vi
// {
//     const str = 'doraemon';
//     const number = 'abc'
//     console.log(str)
// }
// console.log(number)

// cấu trúc điều kiện (conditional)
// nếu ... thì ... | nếu cái gì ... thì ... | ngược lại thì ...
// -> if then
// -> vào lập trình: if (điều kiện) thực thi
// toán tử logic, so sánh
//  nếu điều kiện trong () true -> thực thi câu lệnh bên trong {} của
// if (10 > 5) {
// console.log('10 lớn hơn 5');
// }
// nếu số chia hết cho 2 (chia 2 dư 0)

// let numberTest = 17; //number
// // let strt = '10'; //string
// // else if: các điều kiện muốn xét thêm
// // kiểm tra về kết quả boolean
// if (numberTest % 2 === 0) {
//     console.log(numberTest, 'là số chẵn');
// } else if (numberTest === 15) {
//     console.log(numberTest, 'la so cua ngay trang tron');
// } else {
//     console.log(numberTest, 'khong phai so chan va la ngay trang tron');
// }
    // console.log(strt)
// } else {
//     // điều kiện ngược lại (chay else khi không điều nào thỏa mãn) 
//       console.log(numberTest, 'là số lẻ')
// }

//  so sánh == và ===
// '10'; 10

// && có nhiều điều kiện trong 1 lần so sánh
// if (10 % 2 === 0 && 10 > 8) {
// }

// switch case
// bên trong () không phải điều kiện mà là giá trị cần so sánh, cần xét
// switchcase là điều kiện tuyệt đối
// break nghĩa là không xét trường hợp phía sau nữa
// dùng switch và case thì nên có break;

// let number = '10';
// switch (number) {
//     case 10:
//         console.log(number)
//     break;
//     case 10:
//         console.log(number)
//     break;
//     case 10:
//         console.log(number)
//     break;
//     default:  // giống else 
//     console.log('đây là default')
//         break; 
// }

// try catch -> bắt được cái điều kiện trả ra (tìm hiểu thêm sau)

// vòng lặp: có thể dùng for hoặc while
// tác dụng: là để thực thi các đoạn logic có tính chất lặp đi lặp lại nhiều lần (cần xác định được lúc nào số lần lặp là bao nhiêu: điều kiện lặp là gì?)
// là để sẽ có nhiều hướng xử lý 1 bài toán
// là tư duy -> tiến; lùi 
// cú pháp vòng lặp
// có 3 thứ cần phải khởi tạo
// 1, bước lặp (bước lặp, chi mục lặp) -> bắt buộc phải là số
// 2, điều kiện lăp (thỏa mãn điều kiện này thì mới thực thi logic trong {})
// 3, logic tăng bước lặp -> giúp cho bước lặp tăng lên hoặc giảm đi

// for (let i = 10; i <= 100; i++) {
//     // code logic...
// console.log(i)
// }
for (let i = 100; i >= 1; i--) {
    // code logic...
// console.log(i)
if (i % 2 === 0){
console.log(i, 'là số chẵn')
}
}

// kết quả đầu ra là gì? >> là 1 số
// -> logic của bài toàn là gì? >> 1 + 2 + 3 + 4 + n + 100
// nên hướng về cấp số cộng 
// -> khởi tạo kết quả? 
// s0 = 0
// s1 = 0 + 1 >> s0 +1
// s1 = 0 + 1 + 2 >> s1 + 2
// s1 = 0 + 1 + 2 + 3 >> s2 + 3
// s100 = 0 + 1 + 2 + 3 + ... + 100 >> s99 + 100


// while, do while