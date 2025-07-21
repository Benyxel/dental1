const sidebar = document.querySelector(".sidebar-nav");
const toggle = document.querySelector("#toggle-btn");
const hide = document.querySelector("#close-btn");

hide.addEventListener("click", function () {
    sidebar.style.display = "none"  
})

toggle.addEventListener("click", function () {
  sidebar.style.display = "flex"
});

