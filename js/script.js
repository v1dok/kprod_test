
let iconMenu = document.querySelector('.icon-menu');
let body = document.body;

if (iconMenu != null) {
  menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    body.classList.toggle('noscroll');
  });
}
