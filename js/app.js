// js/app.js

// Function to update cart count in the nav
export function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const countElement = document.getElementById('cart-count');
    if (countElement) countElement.innerText = cart.length;
}

// Global function for buttons
window.addToCart = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert("Added to cart!");
};

window.addToWishlist = (id) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.includes(id)) {
        wishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert("Added to wishlist!");
    }
};

// Initialize count on load
document.addEventListener('DOMContentLoaded', updateCartCount);