// gọi thành phần cấu tạo nên tính năng
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form");
let togglePassword = document.querySelector(".toggle-password i");
let userList = JSON.parse(localStorage.users);

// Gắn sự kiện cho form

form.onsubmit = function (event) {
    event.preventDefault();
    // tiến hành validate email và email 
    let findIndex = -1;
    // tạo ra biến findIndex = -1 để kiểm tra xem input có hợp lệ hay không
    for (let i = 0; i < userList.length; i = i + 1) {
        if (userList[i].email === email.value) {
            findIndex = i;
             break; 
        }
        
    }
    if (findIndex === -1) {
        alert("Email không tồn tại");
    } else {
        // Sau khi ktra xong email thì ktra đến MK
        if (userList[findIndex].password === password.value) {
            alert("Đăng nhập thành công");
        } else {
            alert("Sai mật khẩu");
        }
    }
}
// Ẩn/Hiện password 
// Gắn sự kiện click cho biểu tượng mắt 
togglePassword.addEventListener("click", function() {
    if(password.type === "password") {
        // Đổi sang hiện mật khẩu
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        // đổi icon sang mắt gạch
        togglePassword.classList.add("fa-eye-slash");
    }else {
        // đổi sang ẩn mật khẩu
        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
})