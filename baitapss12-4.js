// Bài 1 : sử dụng vòng lặp để đếm từ 1 đến 100
// let i = 1; 

// while (i <= 100) {
//     i = i + 1;
//   console.log(i); 
//   if (i === 99) {
//     alert("Đã hoàn thành");
//   }

// }


// Bài 2 : Sử dụng hàm prompt lấy thông tin nhiệt độ hiện tại:


// let cNumber= Number(prompt("Nhập vào nhiệt độ hiện tại"));

// if (cNumber >= 100){
//     alert(`Nhiệt độ đang là ${cNumber} độ C: Cần giảm nhiệt độ`);
// } else if(cNumber <= 20) {
//     alert(`Nhiêt độ đang là ${cNumber} độ C:  Cần tăng nhiệt độ`);

// } else {
//     alert(`Nhiêt độ đang là ${cNumber} độ C: Nhiệt độ ổn định`);
// }

// Bài 3 : Hiển thi ra dãy 20 số trong dãy Fibonacci

// let n1 = 0;
// let n2 = 1;
// let n3 = 0;

// let i = 0;

// while (i < 20) {
//   console.log(n1);     
//   n3 = n1 + n2;         
//   n1 = n2;              
//   n2 = n3;
//   i = i + 1;            
// }


// Bài 4 : Tìm ra số dầu tiên trong dãy fubonacci chia hết cho 5 :

// let n1 = 0;
// let n2 = 1;
// let n3;
// let i = false;

// while (!i) {
//   n3 = n1 + n2;
//   if (n3 % 5 === 0) {
//     console.log("Số Fibonacci đầu tiên chia hết cho 5 là:", n3);
//     i = true; 
//   }
//   n1 = n2;
//   n2 = n3;
// }

// Bài 5 : TÍnh tổng 20 số đầu tiên trong dãy fibonacci

// let iNumber1 = 0;
// let iNumber2 = 1;
// let x = 0;
// let i = 0;

// while (x < 20) {
//     let y = iNumber1 + iNumber2;
//     iNumber1 = iNumber2;
//     iNumber2 = y;
//     x = x + 1;
//     i = i + iNumber1;

// }

// console.log("Tổng 20 số Fibonacci đầu tiên là:", i);


// Bài 6 : Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
// let count = 0;  
// let num = 1;    
// let sum = 0;    

// while (count < 30) {
//   if (num % 7 === 0) {
//     sum = sum + num;
//     count = count + 1;    
//   }
//   num++;
// }

// console.log(`Tổng của 30 số chia hết cho 7 đầu tiên là: ${sum}`);

// Bài 7 : Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ “FizzBuzz”


// let i = 0;

// while (i <= 100) {
//     if (i % 3 === 0 && i % 5 === 0) {

//         console.log("BuzzFizz");
//     } else if (i % 3 === 0) {

//         console.log("Buzz");
//     } else if (i % 5 === 0) {

//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }

//     i = i + 1;
// }
 