var overlay = document.querySelector(".overlay");
var form = document.querySelector(".form");
var loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
  form.style.display = "block";
  overlay.style.display = "block";
});

var formBtn = document.getElementById("formBtn")
formBtn.addEventListener("click", function(){
    form.style.display = "none";
    overlay.style.display = "none";
});