function addToCart(itemId, itemName) {
    // Get the current cart from localStorage or initialize an empty one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item (with its ID and name) to the cart
    cart.push({ id: itemId, name: itemName });

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${itemName} added to your cart!`);
}
