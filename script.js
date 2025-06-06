// Simulación de envío de formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    this.reset();
});

const btnOpen = document.getElementById('btn__open');
const btnClose = document.getElementById('btn__close');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('.menu__link');


function menuHamburger() {
    menu.classList.toggle('menu--active');
}

btnOpen.addEventListener('click', menuHamburger)
btnClose.addEventListener('click', menuHamburger)

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove("menu--active");
        document.body.classList.remove("body--no-scroll");
    })
});

const header = document.querySelector(".header");
let lastScroll = 0;

window.onscroll = () => {
    const current = scrollY;
    header.style.transform = current > lastScroll ? "translateY(-100%)" : "translateY(0)";
    lastScroll = current;
    header.style.backgroundColor = current > 0 ? "#0E65E5" : "transparent";
};

function menuHamburger() {
    menu.classList.toggle('menu--active');
    document.body.classList.toggle('body--no-scroll');
}


