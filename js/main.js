// get all elements here now
const navMenuClose = document.getElementById("menu-close");
const sideMenuClose = document.getElementById("sidebar-close");
const links = document.querySelector("header .navbar .navbar-links");
const menuLi = document.querySelectorAll("header .navbar .navbar-links .links > li");
const submenu = document.querySelectorAll("header .navbar .navbar-links .links li ul > li");


navMenuClose.addEventListener("click", () => {
    links.style.left = "0";
});

sideMenuClose.addEventListener("click", () => {
    links.style.left = "-100%";
});

document.addEventListener('click', (event) => {
    if (!links.contains(event.target) && !navMenuClose.contains(event.target)) {
        links.style.left = "-100%";
    }
  });


menuLi.forEach((item) => {
    item.addEventListener("click", (e) => {

        menuLi.forEach((li)   => {
            li.classList.remove("active");
        });

        submenu.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.currentTarget.classList.toggle("show-menu");
            });
        });

        e.currentTarget.classList.add("active");
    });
});