
// Click On Toggle show ul links


let toggle = document.getElementById("togglebar");
let ul = document.querySelector(".links");
let switcherA = document.querySelectorAll(".links .nav-item .nav-link");
let icon = document.querySelector(".fa-bars")
toggle.addEventListener("click", function () {
  ul.classList.toggle("show-ul");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
});

