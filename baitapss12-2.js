// Bài 1 : Chuyển từ độ C sang độ F //

// let degreeNumber = Number(prompt("Nhập vào độ C"));
// let x = 1.8;
// let y = 32;
// let Fahrenheit = (degreeNumber * x) + y;

// alert (`Độ F sẽ là : ${Fahrenheit}`);

// Bài 2 : Chuyển từ mét sang feet

// let meterNumber = Number(prompt("Nhập vào số mét"));

// let feetNumber = meterNumber * 3.28084;

// alert(`Số feet sẽ là ${feetNumber}`);


// Bài 3: Tính diện tích hình vuông 
// let sideNumber = Number(prompt("Nhập cạnh a"));

// let areaNumber = sideNumber * sideNumber;
//  alert(`Diện tích hình vuông là :${areaNumber}`);

// Bài 4 : Tính diện tích hình chữ nhật khi biết 02 cạnh a, b

// let aNumber = Number(prompt("Nhập chiều dài"));
// let bNumber = Number(prompt("Nhập chiều rộng"));


// let areaNumber = aNumber * bNumber;

// alert(`Diện tích hình chữ nhật là : ${areaNumber}`);


// Bài 5 : Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.

// let aNumber = Number(prompt("Nhập cạnh a"));
// let bNumber = Number(prompt("Nhập cạnh b"));

// let areaNumber = 0.5 * aNumber * bNumber ;

// alert(`Diện tích hình tam giác vuông là : ${areaNumber}`);


// Bài 6 : Giải phương trình bậc 1.

// let aNumber = Number(prompt("Nhập hệ số a"));
// let bNumber = Number(prompt("Nhập hệ số b"))
// let xNumber = -bNumber / aNumber ;


// if (aNumber === 0 ) {
//     if (bNumber === 0) {
//         alert("Phương trình có vô số nghiệm");
//     } else {
//         alert("Phương trình vô nghiệm");
//     }

// } else {
//     alert(`Phương trình có nghiệm duy nhất là: ${xNumber} `);
// }

// Bài 7 : Giải phương trình bậc 2 

// Phương trình bậc 2 1 ẩn 
// let a = Number(prompt("Nhập vào hệ số a"));
// let b = Number(prompt("Nhập vào hệ số b"));
// let c = Number(prompt("Nhập vào hệ số c"));
// let xNumber = -c / b;

// let deta = b *b  - 4 * (a * c);
// let x = - b / (2 * a);
// let x1 = (- b + Math.sqrt(deta)) / (2 * a);
// let x2 = (- b - Math.sqrt(deta)) / (2 * a);


// if (a === 0) {
//     if (b === 0) {
//         if (c === 0) {
//             alert("Phương trình có vô số nghiệm");

//         } else {
//             alert("Phương trình vô nghiệm");

//         } 
//     }else {
//             alert(`Phương trình bậc 1 có nghiệm là X = ${xNumber}` );
//         }

//     } else if (deta < 0) {
//         alert  (`Phương trình vô nghiệm thực`);

//     } else if (deta === 0) {
//         alert  (`Phương trình có  nghiệm kép là : ${x}`)

//     } else {
//         alert (`Phương trình có 2 nghiệm phân biệt là : ${x1} và ${x2}`);
//     }


// Bài 8 : Kiểm tra độ tuổi hợp lệ của 1 người


// let ageNumber = Number(prompt("Nhập vào độ tuổi của bạn"));


// if (ageNumber > 0 && ageNumber < 120 ) {
//     alert ("Tuổi của bạn hợp lệ");
// }
// else {
//     alert ("Tuổi của bạn không hợp lệ");
// }


