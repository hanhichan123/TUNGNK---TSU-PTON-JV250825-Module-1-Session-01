// Gọi 3 ô input + form 

let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let form = document.getElementById("form");
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let users = JSON.parse(localStorage.getItem('users')) || [];


// Gắn sự kiện cho form
form.onsubmit = function (event) {
    // Ngăn chặp tính năng gửi thông tin mặc định của 
    event.preventDefault();

    // Lấy thông tin trong ô input để đăng ký thông tin 

    // Kiểm tra tính hợp lệ của các ô input
    let emailError = "";
    let passwordError = "";
    let confirmpasswordError = "";

    if (email.value === "") {
        emailError = "Email không được để trống";
    } else if (emailRegex.test(email.value) === false) {
        emailError = "Email không hợp lệ";
    } else {
        emailError = "";
    };
    // kiểm tra tính hợp lệ của password 

    if (password.value === "") {
        passwordError = "Password không được để trống !";
    } else if (passwordRegex.test(password.value) === false) {
        passwordError = "Mật khẩu không hợp lệ!!!";
    } else {
        passwordError = "";
    }

    // Kiểm tra tính hợp lệ của confirmPassword

    if (confirmPassword.value === "") {
        confirmpasswordError = "Vui lòng xác nhận lại mật khẩu";
    } else if (confirmPassword.value !== password.value) {
        confirmpasswordError = "Xác nhận mật khẩu không đúng";

    } else {
        confirmpasswordError = "";
    }
    // Nếu email đã được đăng ký, báo lỗi
    let emailExists = users.some(user => user.email === email.value);

    if (emailExists) {
        Swal.fire({
            icon: "warning",
            title: "Email này đã được đăng ký rồi!",
        });
        return;
    }
    // Nếu toàn bộ input hợp lệ, tiến hành đăng ký thông tin người dùng
    if (emailError === "" && passwordError === "" && confirmpasswordError === "") {
        let newUser = {
            id: Math.floor(Math.random() * 10000),
            email: form.email.value,
            password: form.password.value,
        }
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        Swal.fire({
            icon: "success",
            title: "Đăng ký thành công!",

        });

        form.reset();
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            html: `
                <div>${emailError}</div>
                <div>${passwordError}</div>
                <div> ${confirmpasswordError}</div>
                `,
        });
    }

}

