//Bài 16-1

// function processConfirm() {
//     let answer = confirm("Câu hỏi của bạn là gì?");
//     let result;

//     if (answer) {
//         result = "Excellent. We'll play a nice game of chess.";
//     } else {
//         result = "Maybe later then.";
//     }

//     return result;
// }

// alert(processConfirm());

// Bài 16-2

// function arrMin(arr) {
//     if (arr.length === 0) {
//         return "Mảng rỗng, không có giá trị nhỏ nhất.";
//     }

//     let min = arr[0]; 

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }

//     return min;
// }
// let arr1 = [3, 5, 1, 8, -3, 7, 8];
// let arr2 = [7, 12, 6, 9, 20, 56, 89];
// let arr3 = [];
// let arr4 = [0, 0, 0, 0, 0, 0];

// console.log(arrMin(arr1)); 
// console.log(arrMin(arr2)); 
// console.log(arrMin(arr3)); 
// console.log(arrMin(arr4)); 

// Bài 16-3

// let num1 = Number(prompt("Nhập số thứ nhất:"));
// let num2 = Number(prompt("Nhập số thứ hai:"));

// function sumNumber(num1, num2) {
//     return num1 + num2;
// }
// alert("Tổng hai số là: " + sumNumber(num1, num2));

// Bài 16-4

// let numTest = Number(prompt("Nhập số cần kiểm tra:"));

// function isEven(numTest) {
//     if (numTest % 2 === 0) {
//         return "số " + numTest + " là số chẵn";
//     } else {
//         return "số " + numTest + " là số lẻ";
//     }
    
// }
// let result = isEven(numTest);
// alert(result);


// Bài 16-5


// let str = prompt("Nhập chuỗi cần kiểm tra:");

// function isPalindrome(str) {
//     let reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }
// let result = isPalindrome(str);
// if (result) {
//     alert("Chuỗi '" + str + "' là chuỗi đối xứng");
// } else {
//     alert("Chuỗi '" + str + "' không phải là chuỗi đối xứng");
// }

// Bài 16-6


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [10, 20, 30, 40, 50];
let arr3 = [1, 3, 5, 7, 9];


let sum1 = arr1.reduce(function(arr,cur){
    return arr + cur;
})
let sum2 = arr2.reduce(function(arr,cur){
    return arr + cur;
})
let sum3 = arr1.reduce(function(arr,cur){
    return arr + cur;
});
console.log(sum1);
console.log(sum2);
console.log(sum3);
