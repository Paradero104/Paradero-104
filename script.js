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

// Funciones del modal

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

// Mostrar modal automáticamente al cargar la página
window.onload = () => {
  modal.style.display = "block";
};

// Botón de apertura manual (por si quieres mantenerlo)
openBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};



