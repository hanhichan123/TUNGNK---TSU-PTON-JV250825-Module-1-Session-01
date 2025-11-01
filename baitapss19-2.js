let courses = [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm th`',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci ớt ớt',
    },
];



// Phân tích luồng 

// gọi form
let form = document.getElementById("form");

let tbody = document.getElementById("tbody");


// Gắn sự kiện cho form
   // C / U
form.onsubmit = function (event) {
    // ngăn chặn tính năng gửi thông tin mậc định của form
    event.preventDefault();
    // Thiết lập các tính năng C/R/U/D

    // Lấy dữ liệu từ form

    let id = Number(form.id.value);
    let content = (form.content.value);
    let dueDate = (form.dueDate.value);
    let status = (form.status.value);
    let assignedTo = (form.assignedTo.value);

//  Nếu có ID --> cập nhật
    if (id) {
        // Tìm idex trong mảng
        let index = courses.findIndex((el) => el.id === id);
        if (index !== -1) {
            courses[index] = {
                id, content, dueDate, status, assignedTo,
            };
            console.log("Cập nhật thành công");
        }
        // Nếu không có thêm mới Create - C
    } else {
        let newCourses = {
            id: courses[courses.length - 1].id + 1,
            content: form.content.value,
            dueDate: form.dueDate.value,
            status: form.status.value,
            assignedTo: form.assignedTo.value,
        }
        courses.push(newCourses);
        alert("Thêm mới thành công")
    }
    dataList();
    localStorage.setItem("courses",JSON.stringify(courses));
}
// Tính năng Update - U

function editCourses(id) {
    let course = courses.find((el) => el.id === id);
    alert ("Bạn có chắc chắn muốn sửa không?")

    if (course) {
        form.id.value = course.id;
        form.content.value = course.content;
        form.dueDate.value = course.dueDate;
        form.status.value = course.status;
        form.assignedTo.value = course.assignedTo;
    }
     dataList();
}


// Tính năng xóa Delete - D

function dellCourses(id) {
   
    if(confirm("Bạn có chắc muốn xóa không?")) {
        let index = courses.findIndex((el) => el.id === id);
        if (index !== -1) {
            courses.splice(index, 1);
            alert("Đã xóa thành công");
             dataList();
             localStorage.setItem("courses", JSON.stringify(courses));
        }
    }
}
// Tính năng R

// chuyển đổi các phần trong mảng dữ liệu thành các phần tử HTML

// Duyệt qua toàn bộ phần tử trong courses
function dataList() {
    let html = "";
    for (let i in courses) {
        html += `
        <tr>
            <td>${courses[i].id}</td>
            <td>${courses[i].content}</td>
            <td>${courses[i].dueDate}</td>
            <td>${courses[i].status}</td>
            <td>${courses[i].assignedTo}</td>
            <td class="btn-action">
            <button class="btn edit" onclick= "editCourses(${courses[i].id})">Sửa</button>
            <button class="btn dell" onclick = "dellCourses(${courses[i].id})">Xóa</button>
            </td>
        </tr>
   
    `;
        tbody.innerHTML = html;
    }

}
dataList();