// Obtener los platos

const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.getAttribute("data-product");
    const price = parseFloat(button.getAttribute("data-price"));

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Buscar si ya existe el producto
    const existing = cart.find((item) => item.product === product);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ product, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html"; // redireccionar al carrito
  });
});

// Lógica del carrito de compras

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const div = document.createElement("div");
    div.innerHTML = `
        <p>${item.product}</p>
        <button onclick="changeQty(${index}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="changeQty(${index}, 1)">+</button>
        <p>Subtotal: S/ ${subtotal.toFixed(2)}</p>
        <hr>
      `;
    cartItems.appendChild(div);
  });

  cartTotal.textContent = total.toFixed(2);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function changeQty(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  updateCart();
}

updateCart();
