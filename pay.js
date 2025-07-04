document
  .getElementById("formulario-compra")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Detiene el envío real del formulario

    alert("Gracias por tu compra ✅");

    // Redirige al inicio (index.html)
    window.location.href = "../index.html";
  });
