// Updated JavaScript code with multi-language support, cart management, product color changes, and reviews system

// Multi-language support
const languages = {
    en: {
        welcome: "Welcome to our store!",
        cart: "Cart",
        addToCart: "Add to Cart",
        reviews: "Reviews"
    },
    es: {
        welcome: "¡Bienvenido a nuestra tienda!",
        cart: "Carro",
        addToCart: "Agregar al Carro",
        reviews: "Reseñas"
    }
};
let currentLang = 'en';

function changeLanguage(lang) {
    currentLang = lang;
    document.getElementById('welcome').innerText = languages[currentLang].welcome;
    // Update other translatable text similarly.
}

// Cart management
let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartDisplay = document.getElementById('cart-display');
    cartDisplay.innerHTML = ''; // Clear previous items
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerText = item.name;
        cartDisplay.appendChild(itemElement);
    });
}

// Product color changing
function changeProductColor(productId, color) {
    const productElement = document.getElementById(productId);
    productElement.style.backgroundColor = color;
}

// Reviews system
const reviews = {};

function submitReview(productId, reviewText) {
    if (!reviews[productId]) {
        reviews[productId] = [];
    }
    reviews[productId].push(reviewText);
    displayReviews(productId);
}

function displayReviews(productId) {
    const reviewList = document.getElementById(`reviews-${productId}`);
    reviewList.innerHTML = '';
    reviews[productId].forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.innerText = review;
        reviewList.appendChild(reviewElement);
    });
}

// Example usage
// addToCart({name: 'Product 1'});
// changeProductColor('product1', 'blue');
// submitReview('product1', 'Great product!');