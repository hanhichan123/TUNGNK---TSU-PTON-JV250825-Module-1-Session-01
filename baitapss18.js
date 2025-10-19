// Bài tập 18.1


// Bài tập 1: Tạo một đối tượng chứa thông tin về một người bao gồm tên, tuổi, địa chỉ và số điện thoại. Sau đó truy xuất các thuộc tính của đối tượng trên

// let person = {
//     name: "Tùng",
//     age: 30,
//     address: "Quảng Trị",
//     phone: "07038715888",
// }

// for (let key in person) {
//     console.log(`${key} : ${person[key]}`);
// };


// Bài 2: Viết chương trình tạo đối tượng student có cặp key và value tương ứng như dưới đây, sau đó khởi tạo đối tượng newStudent có các thuộc tính tương tự (value tự điền). Sau đó tạo mảng “students” để chứa chúng. Cuối cùng truy xuất các thuộc tính của đối tượng “newStudent” sau khi thêm vào mảng “students”


// let student = {
//     id: 1,
//     name: "Nguyễn Văn A",
//     gender: "Nam",
//     age: 20,
//     mark: 8,
// }

// let newStudent = {
//     id: 2,
//     name: "Nguyễn Văn B",
//     gender: "Nam",
//     age: 25,
//     mark: 9,
// }

// let students = [student, newStudent];

// for (let student of students){
//     for(let key in student){
//         console.log(`${key} : ${student[key]}`);
//     }
// }

// Bài 3: Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm cao nhất và in ra toàn bộ thông tin của học sinh đó

// let topStudent = students[0];

// for (let stu in students ){
//     if(stu.mark > topStudent.mark){
//         topStudent = stu;
//     }

// }
// console.log("Học sinh có điểm cao nhất:");
// for (let key in topStudent) {
//     console.log(`${key} : ${topStudent[key]}`);
// }



// Bài tập 18 . 2
// Bài 1

// let products = [
//     {id: 1, name: 'Milk', count: 100},
//     {id: 2, name: 'Orange', count: 100},
//     {id: 3, name: 'Butter', count: 100},
// ];


// products.push({id: 4, name: 'Cherry', count: 100},)
// console.log(products);

// products.splice(1, 1);
// console.log(products);

// products[2] = {id: 3, name: 'Butter', count: 0};
// console.log(products);

// let InputKey = prompt("Nhập vào từ khóa");

// let keyword = "Butter";
// let found = false;


// for (let product of products){
//     if (InputKey === keyword){
//         console.log (products[2]);
//         found = true;
//         break;
//     }
// }
// if (!found) {
//     console.log("Không có dữ liệu bạn tìm kiếm");
// }

// Bài 2:

let contactList = [
    {
        Num: 1,
        Subject: "HTML",
        Complete: false,
    },
    {
        Num: 2,
        Subject: "CSS",
        Complete: false,
    },
    {
        Num: 3,
        Subject: "Basic of javascript",
        Complete: false,
    },
    {
        Num: 4,
        Subject: "Node package Manager(npm)",
        Complete: false,
    },
    {
        Num: 5,
        Subject: "Git",
        Complete: false,
    },
];



let menu = `------Menu-------
C - Thêm môn học
R - Hiển thị toàn bộ khóa học
U - Cập nhật tình trạng học tập
D - Nhập vi trí môn học muốn xóa
E - Thoát khỏi chương trình`
while (true) {
    let input = prompt(menu);

    if (input === "C") {
        let Subject = prompt("Nhập môn học mới");
        let Complete = prompt("Thêm tình trạng hoàn thành (true or flase)")
        let contact = {
            Num: contactList.length + 1,
            Subject: Subject,
            Complete: Complete
        }
        contactList.push(contact);
        displayContact()

    } else if (input === "R") {
        displayContact()


    } else if (input === "U") {
        let Subject = prompt("Nhập tên môn học mà bạn muốn cập nhật");
        let index = contactList.findIndex(function (el, i) {
            return el.Subject === Subject;
        });
        if (index === -1) {
            console.log("Môn học chưa được cập nhật");

        } else {
            let Complete = prompt(`Hãy nhập vào tình trạng hoàn thành cho ${Subject}`);
            contactList[index].Complete = Complete;
            displayContact()
        }
    } else if (input === "D") {
        let Subject = prompt("Nhập tên môn học muốn xóa");
        let index = contactList.findIndex(function (el, i) {
            return el.Subject = Subject;
        });
        if (index === -1) {
            console.log("Giá trị nhập vào không hợp lệ");
        } else {
            contactList.splice(index, 1);
            displayContact()
        }

    } else if (input === "E") {

        console.log("Cảm ơn bạn đã đến với Rikkei Academy");
        break;
    } else {
        cônsole.log("Giá trị nhập vào không hợp lệ")
    }

}


function displayContact() {
    console.log("Danh sách khóa học của bạn là : ");
    for (let index in contactList) {
        console.log("Num:", contactList[index].Num);
        console.log("Subject:", contactList[index].Subject);
        console.log("Complete:", contactList[index].Complete);
        console.log("------------------------------");

    }
}