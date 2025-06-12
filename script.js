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

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwP78RITYDcc7Hr0k47VcWJIHx99ZL77nYCOjOku5YJatUDfA6qVPtvMSmhUhRA7g6xZQ/exec';
  const form = document.getElementById("formulario");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = {
      nombre: document.getElementById("nombre").value,
      correo: document.getElementById("correo").value,
      telefono: document.getElementById("telefono").value,
    };

    fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(response => {
      alert("¡Datos enviados con éxito!");
      form.reset();
    })
    .catch(error => {
      alert("Ocurrió un error: " + error.message);
    });
  });

