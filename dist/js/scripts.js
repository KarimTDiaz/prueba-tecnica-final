const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", () => {
  if (menuIcon.dataset.icon === "hamburger") {
    menuIcon.src = "assets/shared/mobile/close.svg";
    menuIcon.dataset.icon = "close";
  } else {
    menuIcon.src = "assets/shared/mobile/menu.svg";
    menuIcon.dataset.icon = "hamburger";
  }
  menu.classList.toggle("menu--show");
});
