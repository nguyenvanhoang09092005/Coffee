window.onload = function () {
  var startDate = new Date("2017-03-17");
  var endDate = new Date();
  var difference = endDate.getTime() - startDate.getTime();

  var seconds = Math.floor(difference / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  setInterval(updateTime, 1000);
};

function updateTime() {
  var startDate = new Date("2017-03-17");
  var endDate = new Date();
  var difference = endDate.getTime() - startDate.getTime();

  var seconds = Math.floor(difference / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}
//-----------------------------------------------------
// đổi đen trắng
// var checkbox_toggle = document.getElementById("light-dark");
// checkbox_toggle.addEventListener("change", function () {
// THêm class dark cho body
// document.body.classList.toggle("dark");
// });
//---------------------------------------------------
// chuyển màu cho cofee đá cuội
var text = document.getElementById("colorChangingText").textContent.trim();
var length = text.length;
var index = 0;

// Hàm thay đổi màu cho từng chữ
function changeColor() {
  var colors = ["#CC9966", "#CC9900"]; // Các màu sắc
  var char = text[index % length]; // Lấy ký tự tại vị trí index
  var color = colors[index % colors.length]; // Chọn màu cho ký tự

  // Đổi màu cho ký tự
  document.getElementById("colorChangingText").innerHTML =
    text.substring(0, index) +
    "<span style='color: " +
    color +
    "'>" +
    char +
    "</span>" +
    text.substring(index + 1, length);

  // Tăng index lên để chuyển sang ký tự tiếp theo
  index++;

  // Nếu đã duyệt hết chuỗi thì reset index để lặp lại từ đầu
  if (index === length) {
    index = 0;
  }
}

// Gọi hàm thay đổi màu mỗi 300ms (0.3 giây)
setInterval(changeColor, 800);
//---------------------------------------
