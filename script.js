const navLinks = document.querySelectorAll(".nav-links li");
const menuHam = document.querySelector(".mobile-menu_btn");
const mobileLinks = document.querySelectorAll(".mobile-links li");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

menuHam.addEventListener("click", () => {
  const icon = document.querySelector(".mobile-menu_btn img");
  menuHam.classList.toggle("active-btn");
  mobileMenu.classList.toggle("active-menu");
  overlay.classList.toggle("active-menu");
  if (menuHam.classList.contains("active-btn")) {
    icon.src = "./images/icon-close-menu.svg";
  } else {
    icon.src = "./images/icon-menu.svg";
  }
});

navLinks.forEach((link) => {
  const subMenu = link.querySelector(".sub-menu");
  link.addEventListener("mouseover", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("active-menu");
  });
});

mobileLinks.forEach((link) => {
  const submenu = link.querySelector(".mobile-sub");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    submenu.classList.toggle("active-menu");
  });
});
