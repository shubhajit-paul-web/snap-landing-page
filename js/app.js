const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".header-main");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("show");

    if (mobileMenu.classList.contains("active")) {
        menuIcon.src = "./images/icon-close-menu.svg";
    } else {
        menuIcon.src = "./images/icon-menu.svg";
    }
});