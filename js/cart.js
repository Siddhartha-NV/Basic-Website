import { products } from './products.js';
import { getStorage, setStorage, formatCurrency } from './utils.js';
import { updateCartCount } from './app.js';

function renderCart() {
    const cartIds = getStorage('cart');
    const container = document.getElementById('cart-items-list');
    if (!container) return;

    // Get product objects for IDs in cart
    const cartItems = cartIds.map(id => products.find(p => p.id == id));

    container.innerHTML = cartItems.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>${formatCurrency(item.price)}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        </div>
    `).join('');

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total-amount').innerText = total.toFixed(2);
}

window.removeFromCart = (index) => {
    let cart = getStorage('cart');
    cart.splice(index, 1);
    setStorage('cart', cart);
    renderCart();
    updateCartCount();
};

renderCart();