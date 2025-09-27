let cannang = Number(prompt(`Nhập vào cân nặng(kg)`));
let chieucao = Number(prompt(`Nhập vào chiều cao(m)`))


let BMInumber =  cannang  / (chieucao * chieucao);

if (BMInumber < 18.5) {
    alert (`BMI của bạn là : ${BMInumber} - Cân nặng thấp(gầy)`);
} else if (BMInumber < 25 ){
    alert (`BMI của bạn là : ${BMInumber} - Bình thường`);
} else if (BMInumber >= 25 ) {
    alert (`BMI của bạn là : ${BMInumber} - Thừa cân`);
} else if (BMInumber < 30 ) {
    alert (`BMI của bạn là : ${BMInumber} - Tiền béo phì`);
} else if (BMInumber < 35 ) {
    alert (`BMI của bạn là : ${BMInumber} - Béo phì độ I`);
} else if (BMInumber < 40 ) {
    alert (`BMI của bạn là : ${BMInumber} - Béo phì độ II`);
} else if (BMInumber >= 40 ) {
    alert (`BMI của bạn là : ${BMInumber} - Béo phì độ III`);
}






