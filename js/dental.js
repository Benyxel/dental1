const sidebar = document.querySelector(".sidebar-nav");
const toggle = document.querySelector("#toggle-btn");
const hide = document.querySelector("#close-btn");

hide.addEventListener("click", function () {
  sidebar.classList.remove("active");
  document.body.style.overflow = "auto"; 
});

toggle.addEventListener("click", function () {
  sidebar.classList.add("active");
  document.body.style.overflow = "hidden"; 
});

// Close sidebar when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnToggle = toggle && toggle.contains(event.target);
  const isClickOnHide = hide && hide.contains(event.target);

  if (
    !isClickInsideSidebar &&
    !isClickOnToggle &&
    !isClickOnHide &&
    sidebar.classList.contains("active")
  ) {
    sidebar.classList.remove("active");
  }
});

// Close sidebar when window is resized to desktop
window.addEventListener("resize", function () {
  if (window.innerWidth > 996) {
    sidebar.classList.remove("active");
  }
});
