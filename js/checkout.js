const checkoutForm = document.getElementById('checkout-form');

if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you for your purchase! Order placed.");
        localStorage.removeItem('cart'); // Clear cart
        window.location.href = 'index.html';
    });
}