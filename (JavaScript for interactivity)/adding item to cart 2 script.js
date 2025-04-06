// Retrieve the cart data from localStorage
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Dynamically display the cart items
const cart = document.getElementById('cart');
cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ID: ${item.id}, Name: ${item.name}`;
    cart.appendChild(listItem);
});
