let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountSpan = document.getElementById('cart-count');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalSpan = document.getElementById('cart-total');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));

            if (name && !isNaN(price)) { 
                const existingItem = cart.find(item => item.name === name);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({ name, price, quantity: 1 });
                }

                updateCartUI();

                button.textContent = "Added! ✓";
                setTimeout(() => {
                    button.textContent = "Add to Cart";
                }, 1000);
            }
        });
    });

    function updateCartUI() {
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountSpan) {
            cartCountSpan.textContent = totalCount;
        }

        if (cartItemsList) {
            cartItemsList.innerHTML = '';
            if (cart.length === 0) {
                cartItemsList.innerHTML = '<li class="list-group-item text-muted">Your cart is currently empty.</li>';
            } else {
                cart.forEach((item) => {
                    const li = document.createElement('li');
                    li.className = 'list-group-item d-flex justify-content-between align-items-center';
                    li.innerHTML = `
                        <span>${item.name} (x${item.quantity})</span>
                        <span>₱${(item.price * item.quantity).toLocaleString()}</span>
                    `;
                    cartItemsList.appendChild(li);
                });
            }
        }

        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (cartTotalSpan) {
            cartTotalSpan.textContent = `₱${totalPrice.toLocaleString()}`;
        }
    }
});