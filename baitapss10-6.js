let mathScore = Number(prompt("Nhập điểm Toán của bạn(0-10)"));
let physicsScore = Number(prompt("Nhập điểm Lý của bạn(0-10)"));
let chemistryScore= Number(prompt("Nhập điểm Hóa của bạn(0-10)"));


let averageScore = (+ mathScore + physicsScore + chemistryScore) / 3;

console.log("Điểm trung bình của bạn là :", averageScore);