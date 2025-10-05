// Bài 13.1 : Thực hiện tạo mảng và sử dụng các phương thức thêm phần tử vào mảng các phần tử ngẫu nhiên làm sao cho mảng đủ 10 phần tử, sau đó hiển thị mảng ra màn hình
// let number = [];

// let max = 100;


// for (let i = 0; i < 10; i++) {
//   number.push(Math.floor(Math.random() * max));
// }

// console.log(number);


// Bài 13.2 : 
// Tạo mảng có sẵn với các phần tử số. Cho người dùng nhập vào một số bất kỳ, sau đó tiến hành kiểm tra:
// Nếu số đó có trong mảng cho sẵn thì alert(“Bingo”)
// Nếu số đó không có trong mảng cho sẵn thì alert(“Chúc bạn may mắn lần sau”)

// let autoNumber = Number(prompt("Nhập vào một số bất kì"));

// let autoNumber1 = [12, 9, 5, 25, 16, 58, 70 , 99];

// if (autoNumber1.includes(autoNumber)){
//   alert ("Bingo");
// } else {
//   alert ("Chúc bạn may mắn lần sau");
// }

// Bài 13.3 : Hãy thực hiện cho người dùng nhập vào dãy số bất kỳ. Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array. Tiến hành đảo ngược các phần tử trong mảng

// let randomNumber = prompt("Nhập vào một dãy số bất kì");

// let randomNumber2 = randomNumber.split(" ");
// randomNumber2.reverse(" ");

// alert(`Dãy số của bạn là: ${randomNumber2}`);



// Bài 13.4 : Hãy thực hiện cho người dùng nhập vào dãy số bất kỳ. Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array. Tiến hành duyệt các phần tử và tìm ra phần tử có giá trị lớn nhất trong mảng và thực hiện in ra màn hình bằng alert()
// Bước 1: Nhập dãy số từ người dùng
let input = prompt("Nhập vào một dãy số bất kì (cách nhau bằng dấu cách)");

// Bước 2: Tách chuỗi thành mảng và chuyển thành số
let numbers = input.split(" ").map(Number);

// Bước 3: Khởi tạo max
let maxNumber = numbers[0];

// Bước 4: Duyệt mảng để tìm số lớn nhất
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}

// Bước 5: Hiển thị kết quả
alert(`Phần tử lớn nhất là: ${maxNumber}`);


