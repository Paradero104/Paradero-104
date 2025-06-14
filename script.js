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



  // Mostrar el modal automáticamente
  window.addEventListener('load', function () {
    document.getElementById('modal').style.display = 'flex';
  });

  // Cerrar el modal al hacer clic en la "X"
  document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
  });

  // También cerrar si se hace clic fuera del contenido
  window.addEventListener('click', function (e) {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

 // Script de formulario

function enviarDatos(data) {
  fetch("https://script.google.com/macros/s/AKfycbxcYtXWcNfmh26Jku0RhzEKIVhETQASWfCUy1evto1TDm2QflsX0tT0AvfoCOTvT3rF7A/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

function manejarEnvioFormulario(formularioId) {
  document.getElementById(formularioId).addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    enviarDatos(data);
    this.reset();
  });
}

manejarEnvioFormulario("formulario-contacto");
manejarEnvioFormulario("formulario-modal");
