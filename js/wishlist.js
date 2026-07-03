import { products } from './products.js';
import { getStorage, setStorage } from './utils.js';

function renderWishlist() {
    const wishlistIds = getStorage('wishlist');
    const container = document.getElementById('wishlist-grid');
    if (!container) return;

    const wishlistItems = products.filter(p => wishlistIds.includes(p.id));

    container.innerHTML = wishlistItems.map(item => `
        <div class="card">
            <img src="${item.image}">
            <h3>${item.name}</h3>
            <button onclick="window.addToCart(${item.id})">Move to Cart</button>
            <button class="remove-btn" onclick="removeFromWishlist(${item.id})">Delete</button>
        </div>
    `).join('');
}

window.removeFromWishlist = (id) => {
    let wishlist = getStorage('wishlist').filter(prodId => prodId !== id);
    setStorage('wishlist', wishlist);
    renderWishlist();
};

renderWishlist();