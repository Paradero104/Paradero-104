// Obtener los platos

const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.getAttribute("data-product");
    const price = parseFloat(button.getAttribute("data-price"));
    const image =
      button
        .closest(".card__white")
        ?.querySelector("img")
        ?.getAttribute("src") || "";

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Buscar si ya existe el producto
    const existing = cart.find((item) => item.product === product);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ product, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html"; // redireccionar al carrito
  });
});

// --- Lógica del carrito de compras ---
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const continueBtn = document.querySelector(".btn__white");

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const div = document.createElement("div");
    div.classList.add("cart__item");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.product}" class="cart__image">
      <div class="cart__details">
        <p class="cart__product">${item.product}</p>
        <div class="cart__qty">
          <button class="btn__less" onclick="changeQty(${index}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="btn__more" onclick="changeQty(${index}, 1)">+</button>
        </div>
        <p class="cart__subtotal">Subtotal: S/ ${subtotal.toFixed(2)}</p>
      </div>
      <hr>
    `;
    cartItems.appendChild(div);
  });

  cartTotal.textContent = total.toFixed(2);
  localStorage.setItem("cart", JSON.stringify(cart));

  // Deshabilita el botón "Continuar" si no hay productos
  if (cart.length === 0) {
    continueBtn.disabled = true;
    continueBtn.classList.add("btn__disabled");
  } else {
    continueBtn.disabled = false;
    continueBtn.classList.remove("btn__disabled");
  }
}

function changeQty(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  updateCart();
}

updateCart();
