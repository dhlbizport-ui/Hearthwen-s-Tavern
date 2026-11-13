document.addEventListener('DOMContentLoaded', () => {
    
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cart = []; 

    const cartCountSpan = document.getElementById('cart-count');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalSpan = document.getElementById('cart-total');

  
    function updateCartUI() {
        let totalCount = 0;
        let totalPrice = 0;

        if (cart.length === 0) {
            if (cartItemsList) {
                cartItemsList.innerHTML = '<li class="list-group-item text-muted">Your cart is currently empty.</li>';
            }
            if (cartTotalSpan) {
                cartTotalSpan.textContent = '₱0';
            }
            if (cartCountSpan) {
                cartCountSpan.textContent = '0';
            }
            return;
        }

        if (cartItemsList) {
            cartItemsList.innerHTML = '';
            cart.forEach((item, index) => {
                totalCount++;
                totalPrice += parseFloat(item.price);

                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                li.innerHTML = `
                    <span>${item.name}</span>
                    <div>
                        <span class="fw-bold me-3">₱${Number(item.price).toLocaleString()}</span>
                        <button class="btn btn-sm btn-outline-danger py-0 px-1" onclick="window.removeFromCart(${index})">&times;</button>
                    </div>
                `;
                cartItemsList.appendChild(li);
            });
        }

        if (cartCountSpan) {
            cartCountSpan.textContent = totalCount;
        }

        if (cartTotalSpan) {
            cartTotalSpan.textContent = `₱${totalPrice.toLocaleString()}`;
        }
    }

    
    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        updateCartUI();
    };

    // Add to Cart Event Listeners
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');

            if (name && price) {
                cart.push({ name, price });
                updateCartUI();
                alert(`Successfully added "${name}" to your tavern cart!`);
            }
        });
    });

    // Contact Form Validation Logic
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent full page reload

            const nameInput = contactForm.querySelector('#name, input[name*="name"]');
            const emailInput = contactForm.querySelector('#email, input[type="email"]');
            const messageInput = contactForm.querySelector('#message, textarea');

            let isValid = true;
            let errorMessage = '';

            if (nameInput && nameInput.value.trim() === '') {
                isValid = false;
                errorMessage += 'Please enter your name.\n';
            }

            if (emailInput) {
                const emailValue = emailInput.value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailValue === '') {
                    isValid = false;
                    errorMessage += 'Please enter your email address.\n';
                } else if (!emailRegex.test(emailValue)) {
                    isValid = false;
                    errorMessage += 'Please enter a valid email address format (e.g., name@example.com).\n';
                }
            }

            if (messageInput && messageInput.value.trim() === '') {
                isValid = false;
                errorMessage += 'Please enter your message or inquiry.\n';
            }

            if (!isValid) {
                alert('Validation Error:\n\n' + errorMessage);
            } else {
                alert('Thank you! Your message has been sent successfully. We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
});