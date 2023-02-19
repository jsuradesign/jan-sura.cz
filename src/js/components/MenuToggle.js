function MenuToggle() {
    const toggler = document.getElementById('menu-toggler');
    const navbarLinks = document.getElementById('navbar-links');
    const navLinks = document.querySelectorAll('#navbar-links a');

    toggler.addEventListener("click", (e) => {
        e.preventDefault();
        toggler.classList.toggle("menu-toggler--active");
        navbarLinks.classList.toggle("menu--active");
    });

    navLinks.forEach((element) => {
        if (navbarLinks.classList.contains("menu--active")) {
            element.addEventListener("click", () => {
                toggler.classList.toggle("menu-toggler--active");
                navbarLinks.classList.toggle("menu--active");
            });
        }
    });
}

export default MenuToggle;