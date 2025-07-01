// ------------------------- MENÚ -------------------------

const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu");
const btnOpenClose = document.querySelector(".header__button");
const links = document.querySelectorAll(".header__link");

btnOpenClose.addEventListener("click", () => {
  btnOpenClose.classList.toggle("header__button--active");
  headerMenu.classList.toggle("header__menu--active");
  document.body.classList.toggle("body--no-scroll");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    headerMenu.classList.remove("header__menu--active");
    btnOpenClose.classList.remove("header__button--active");
    document.body.classList.remove("body--no-scroll");
  });
});

// let lastScroll = 0;
// window.onscroll = () => {
//   const current = scrollY;
//   header.style.transform =
//     current > lastScroll ? "translateY(-100%)" : "translateY(0)";
//   lastScroll = current;
//   header.style.backgroundColor =
//     current > 0 ? "var(--color-secondary)" : "transparent";
// };

// ------------------------- MODAL -------------------------

window.addEventListener("load", function () {
  document.getElementById("modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ------------------------- FORMULARIO -------------------------

function enviarDatos(data) {
  fetch(
    "https://script.google.com/macros/s/AKfycbxcYtXWcNfmh26Jku0RhzEKIVhETQASWfCUy1evto1TDm2QflsX0tT0AvfoCOTvT3rF7A/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
}

function manejarEnvioFormulario(formularioId) {
  document
    .getElementById(formularioId)
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const data = {};
      formData.forEach((value, key) => (data[key] = value));

      enviarDatos(data);
      this.reset();

      // Ocultar todo el modal-content
      const formContainer = document.querySelector(".modal-content");
      const successMessage = document.getElementById("successMessage");

      formContainer.style.display = "none";
      successMessage.style.display = "block";

      setTimeout(() => {
        document.getElementById("modal").style.display = "none";
        formContainer.style.display = "block";
        successMessage.style.display = "none";
      }, 1500);
    });
}

manejarEnvioFormulario("formulario-modal");

// Botón de apertura manual del modal
document
  .getElementById("btn-open-modal")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("modal").style.display = "flex";
  });
