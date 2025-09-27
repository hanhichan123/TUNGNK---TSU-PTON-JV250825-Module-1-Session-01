let a = Number(prompt(`Mời bạn nhập vào số a`));
let b = Number(prompt(`Mời bạn nhập vào số b`));

let c = prompt(`Mời bạn nhập vào các phép tính(+ , -, *, /)`);

let sum;

switch (c) {
    case "+":
        sum = a + b;
        break;
    case "-":
        sum = a - b;
        break;
    case "*":
        sum = a * b;
        break;
    case "/":
        sum = b !== 0 ? a / b : "Không thể chia cho 0";
        break;
    default :
    alert (`Phép tính không hợp lệ`);

} alert (`Kết quả là ${sum}`);



