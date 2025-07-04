const botones = document.querySelectorAll(".reservation__button");
let mesaSeleccionada = null;

const modal = document.getElementById("modalReserva");
const cerrarModal = document.getElementById("cerrarModal");

// Manejo de clic en mesas
botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;

    // Si haces clic en la misma mesa: desactivarla
    if (mesaSeleccionada === id) {
      btn.classList.remove("active");
      mesaSeleccionada = null;
      return; // No abrir el modal
    }

    // Si ya hay una mesa seleccionada, no permitir otra selección
    if (mesaSeleccionada) {
      return; // Ignora el clic
    }

    // Activar nueva mesa y mostrar modal
    btn.classList.add("active");
    mesaSeleccionada = id;
    modal.style.display = "flex";
  });
});

// Cerrar modal con la X
cerrarModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal haciendo clic fuera
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Enviar formulario
document.getElementById("formReserva").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Reserva enviada correctamente ✅");
  modal.style.display = "none";
  // Si quieres limpiar la selección después de enviar, puedes hacer esto:
  // limpiarSeleccion();
  window.location.href = "../index.html";
});
