const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu");
const btnOpenClose = document.querySelector(".header__button");
const links = document.querySelectorAll(".header__link");

btnOpenClose.addEventListener("click", () => {
    btnOpenClose.classList.toggle("header__button--active");
    headerMenu.classList.toggle("header__menu--active");
    document.body.classList.toggle("body--no-scroll");
})

//Función que elimina la clase del menú para que pueda acceder a la sección seleccionada y desaparecer.
links.forEach(link => {
    link.addEventListener('click', () => {
        headerMenu.classList.remove("header__menu--active");
        btnOpenClose.classList.remove("header__button--active");
        document.body.classList.remove("body--no-scroll");
    })
});

//Función que oculta el header

let lastScroll = 0;
window.onscroll = () => {
    const current = scrollY;
    header.style.transform = current > lastScroll ? "translateY(-100%)" : "translateY(0)";
    lastScroll = current;
    header.style.backgroundColor = current > 0 ? "var(--color-primario)" : "transparent";
};
