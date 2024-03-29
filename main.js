// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
const text = document.getElementById("text")

text.style.color = "#777"
text.style.fontSize = "2rem"

let newElement = document.createElement("p")
newElement.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."
text.parentNode.replaceChild(newElement, text)

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
const ul1 = document.querySelector("ul").style.color = "#0404f5"

// Câu 3. Sử dụng javascript để thực hiện những công việc sau
// Truy cập vào thẻ ul
const ul2 = document.getElementById("list")
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
ul2.insertAdjacentHTML("beforeend", "<li>Item 8</li>")
ul2.insertAdjacentHTML("beforeend", "<li>Item 9</li>")
ul2.insertAdjacentHTML("beforeend", "<li>Item 10</li>")

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const li1 = document.querySelector("#list li:first-child").style.color = "red"
// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = document.querySelector("#list li:nth-child(3)").style.backgroundColor = "green"
// Remove thẻ <li> 4
const li4 = document.querySelector("#list li:nth-child(4)")
ul2.removeChild(li4)
// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const li44 = document.createElement("li");
li44.innerText = "New li 4";

const list = document.getElementById("list");
list.insertBefore(li44, list.children[3]);
