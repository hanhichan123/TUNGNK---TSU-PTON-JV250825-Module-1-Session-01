let yearNumber = Number(prompt("Nhập năm vào đây"));

if (yearNumber % 4 === 0 && yearNumber % 100 !== 0)  {
    alert(`${yearNumber} là năm nhuận`);
} else {
    alert(`${yearNumber} không phải là năm nhuận`);
}
