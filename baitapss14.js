// Bài 1 : Tạo một đối tượng tên là person có các thuộc tính sau:


// let person = {
//     name : "John Doe",
//     age : 25,
//     job :  "Developer",
// } 

// console.log(person.name);
// console.log(person.age);
// console.log(person.job);

// Bài 2: Tạo một đối tượng car với các thuộc tính sau:

// brand: "Toyota"
// model: "Corolla"
// year: 2020

// let car = {
// brand: "Toyota",
// model: "Corolla",
// year: 2020,
// }

// car.color = "red";
// console.log(car);
// car.year = 2022;
// console.log(car);

// Bài 3 : Luyện tập xóa thuộc tính trong đối tượng trong javascript


// let book = {
//     title: "JavaScript Basics",
//     author: "John Smith",
//     page: 200,
// }

// console.log(book);
// delete book.page;
// console.log(book);


// Bài 4 : Luyện tập sao chép đối tượng trong javascript

let original = {
    name: "Bob",
    age: 30,
}

let copy = {...original};

copy.name = "Charlie";


console.log(original);
console.log(copy);