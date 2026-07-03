export const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", category: "Electronics" },
    { id: 2, name: "Smart Watch", price: 199.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", category: "Electronics" },
    { id: 3, name: "Running Shoes", price: 79.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", category: "Fashion" },
    { id: 4, name: "Leather Wallet", price: 29.99, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500", category: "Fashion" },
    { id: 5, name: "Coffee Maker", price: 49.99, image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500", category: "Home" },
    { id: 6, name: "Gaming Mouse", price: 59.99, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500", category: "Electronics" }
];

export function renderProducts(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = productList.map(product => `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="window.addToCart(${product.id})">Add to Cart</button>
            <button class="secondary" onclick="window.addToWishlist(${product.id})">❤ Wishlist</button>
            <a href="product.html?id=${product.id}">View Details</a>
        </div>
    `).join('');
}

// --- RUN LOGIC ON PAGE LOAD ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Logic for Home Page (Featured)
    if (document.getElementById('featured-products')) {
        renderProducts('featured-products', products.slice(0, 3)); // Show only first 3
    }

    // 2. Logic for Products Page (All)
    if (document.getElementById('product-grid')) {
        renderProducts('product-grid', products);
    }

    // 3. Logic for Single Product Page
    const params = new URLSearchParams(window.location.search);
    const prodId = params.get('id');
    const displayContainer = document.getElementById('product-display');
    
    if (prodId && displayContainer) {
        const product = products.find(p => p.id == prodId);
        if (product) {
            displayContainer.innerHTML = `
                <img src="${product.image}" style="width:300px">
                <div class="product-info">
                    <h1>${product.name}</h1>
                    <h2>$${product.price}</h2>
                    <p>Category: ${product.category}</p>
                    <button onclick="window.addToCart(${product.id})">Add to Cart</button>
                </div>
            `;
        }
    }
});