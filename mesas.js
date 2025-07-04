//Estilos del botón de mesas
// document.querySelectorAll(".reservation__button").forEach((btn) => {
//   btn.addEventListener("click", function () {
//     btn.classList.toggle("active");
//   });
// });

const botones = document.querySelectorAll(".reservation__button");
let mesaSeleccionada = null;

const modal = document.getElementById("modalReserva");
const cerrarModal = document.getElementById("cerrarModal");

botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;

    if (mesaSeleccionada === id) {
      btn.classList.remove("active");
      mesaSeleccionada = null;
      return;
    }

    if (mesaSeleccionada) return;

    btn.classList.add("active");
    mesaSeleccionada = id;

    // Mostrar el modal
    modal.style.display = "flex";
  });
});

// Cerrar el modal
cerrarModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// También puedes cerrarlo haciendo clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Formulario de envío (puedes luego enviarlo a backend o mostrar mensaje)
document.getElementById("formReserva").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Reserva enviada correctamente ✅");
  modal.style.display = "none";

  window.location.href = "../index.html";
});
