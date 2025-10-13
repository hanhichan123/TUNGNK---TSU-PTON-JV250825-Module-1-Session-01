// Bài tập 15-1:Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.

// let arr = [1, 3, 15, 27, 50, 11, 10, 7, 60, 90];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 10) {
//         console.log(arr[i]);
//     }
// }

// Bài 2: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau. Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.

// let arr2 = [5, 12, 8, 20, 15, 30, 25, 18, 10, 40];
// let max = arr2[0];
// let maxIndex = 0;

// for (let i = 1; i < arr2.length; i++) {
//     if (arr2[i] > max) {
//         max = arr2[i];
//         maxIndex = i;
//     }
// }

// console.log("Giá trị lớn nhất trong mảng là: " + max);
// console.log("Vị trí của phần tử lớn nhất là: " + maxIndex);

// Bài 3: Viết chương trình khởi tạo nhập vào một mảng số nguyên. Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình của các phần tử trong mảng.

// let arr3 = [5, 12, 8, 20, 15, 30, 25, 18, 10, 40];
// let max3 = arr3[0];
// let sum = 0;
// let avg = 0;
// let n = arr3.length;

// for (let i = 0; i < arr3.length; i++) {
//     if (arr3[i] > max3) {
//         max3 = arr3[i];
//     }
//     sum += arr3[i];
// }
// avg = sum / n;
// console.log("Giá trị lớn nhất trong mảng là: " + max3);
// console.log("Giá trị trung bình của các phần tử trong mảng là: " + avg);

// Bài 4: Viết chương trình khởi tạo nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.
// let arr4 = [5, 12, 8, 20, 15, 30, 25, 18, 10, 40];
// let reversedArr = [];
// for (let i = arr4.length - 1; i >= 0; i--) {
//     reversedArr.push(arr4[i]);
// }
// console.log("Mảng sau khi đảo ngược: " + reversedArr);

// Bài 5: Viết chương trình đếm số nguyên âm trong một chuỗi.
// let str = "-5 12 -8 20 -15 30 -25 18 -10 40";
// let arr5 = str.split(" ");
// let countNegative = 0;
// for (let i = 0; i < arr5.length; i++) {
//     if (parseInt(arr5[i]) < 0) {
//         countNegative++;
//     }
// }
// console.log("Số nguyên âm trong chuỗi là: " + countNegative);

// Bài 6: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Nhập phần tử số nguyên và tìm xem số đó có nằm trong mảng số nguyên không? Nếu có thuộc mảng số nguyên thì in ra "Number X is in the array" còn lại in ra "Number X is not in the array".
// let arr = Number(prompt("Nhập số phần tử của mảng:"));
// let arr6 = [5, 12, 8, 20, 15, 30, 25, 18, 10, 40];

// let found = false;
// for (let i = 0; i < arr6.length; i++) {
//     if (arr === arr6[i]) {
//         found = true;
//         break;
//     }

// }
// if (found) {
//     console.log("Number " + arr + " is in the array");
// } else {
//     console.log("Number " + arr + " is not in the array");
// }

// Bài 7: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.


// let arr = [];

// for (let i = 0; i < 10; i++) {
//     let num = Number(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
//     arr.push(num);
// }
// arr.sort(function (a, b) { 
//     return b - a 
// });
// console.log("Mảng sau khi sắp xếp giảm dần: " + arr);


// Bài 8: Viết chương trình khởi tạo nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b. Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên. Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c. Hiển thị mảng c.

// let arrA = [];
// let arrB = [];

// for (let i = 0; i < 10; i++) {
//     let numA = Number(prompt("Nhập phần tử thứ " + (i + 1) + " của mảng A:"));
//     arrA.push(numA);
// }
// for (let i = 0; i < 10; i++) {
//     let numB = Number(prompt("Nhập phần tử thứ " + (i + 1) + " của mảng B:"));
//     arrB.push(numB);
// }
// let arrC = arrA.concat(arrB);
// console.log("Mảng C sau khi nối mảng A và B: " + arrC);


function arrInput(arrName, n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let num = Number(prompt("Nhập phần tử thứ " + (i + 1) + " của mảng " + arrName + ":"));
        arr.push(num);
    }
    return arr;
}

let a = arrInput("A", 10);
let b = arrInput("B", 10);
let c = a.concat(b);
console.log("Mảng C sau khi nối mảng A và B: " + c);    