document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    const shoppingCart = document.getElementById('shopping-cart');
    const closeButton = shoppingCart.querySelector('button[type="button"]'); // Finder krydsknappen
    const cartItemsContainer = document.getElementById('cart-items'); // Kurv-liste container
    const cartTotalElement = document.getElementById('cart-total'); // Subtotal element
    const checkoutButton = document.getElementById('checkout-btn'); // Checkout-knap

    // Åbner/lukker indkøbskurven
    cartButton.addEventListener('click', () => {
        if (shoppingCart.classList.contains('hidden')) {
            shoppingCart.classList.remove('hidden');
            shoppingCart.classList.add('visible');
            fetchCartItems(); // Hent kurvens data, når den åbnes
        } else {
            shoppingCart.classList.remove('visible');
            shoppingCart.classList.add('hidden');
        }
    });

    // Lukker indkøbskurven
    closeButton.addEventListener('click', () => {
        shoppingCart.classList.remove('visible');
        shoppingCart.classList.add('hidden');
        window.history.back(); // Navigerer tilbage til den forrige side
    });

    // Hent kurvens data fra backend
    async function fetchCartItems() {
        try {
            const response = await fetch('http://localhost:8080/api/cart'); // Opdater URL hvis nødvendigt
            const cartItems = await response.json();
            renderCartItems(cartItems);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    }

    // Dynamisk visning af kurvens produkter
    function renderCartItems(cartItems) {
        cartItemsContainer.innerHTML = ''; // Ryd eksisterende produkter i kurven

        let total = 0; // Beregn subtotal

        cartItems.forEach(item => {
            total += item.price * item.quantity;

            const li = document.createElement('li');
            li.className = 'flex py-6 justify-between';

            li.innerHTML = `
                <div class="flex">
                    <img class="h-16 w-16 rounded-md border" src="${item.url}" alt="${item.name}">
                    <div class="ml-4">
                        <p class="font-medium text-gray-900">${item.name}</p>
                        <p class="text-sm text-gray-500">Price: $${item.price}</p>
                        <p class="text-sm text-gray-500">Quantity: ${item.quantity}</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <p class="font-semibold text-gray-900">$${(item.price * item.quantity).toFixed(2)}</p>
                    <button class="text-red-500 hover:underline remove-btn ml-4" data-id="${item.productId}">Remove</button>
                </div>
            `;

            cartItemsContainer.appendChild(li);
        });

        // Opdater subtotal
        cartTotalElement.textContent = `$${total.toFixed(2)}`;
    }

    // Håndter fjernelse af et produkt fra kurven
    cartItemsContainer.addEventListener('click', async (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const productId = e.target.getAttribute('data-id');
            await removeFromCart(productId);
            fetchCartItems(); // Opdater kurvens data
        }
    });

    // Fjern et produkt fra kurven
    async function removeFromCart(productId) {
        try {
            await fetch(`http://localhost:8080/api/cart/${productId}`, {
                method: 'DELETE',
            });
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    }

    // Håndter checkout-processen
    checkoutButton.addEventListener('click', async () => {
        try {
            const customerDetails = {
                customerName: 'John Doe', // Eksempel - hent fra brugerinput
                customerEmail: 'john.doe@example.com', // Eksempel - hent fra brugerinput
            };

            const response = await fetch('http://localhost:8080/api/cart/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customerDetails),
            });

            if (response.ok) {
                alert('Order placed successfully!');
                fetchCartItems(); // Tøm kurven
            } else {
                alert('Failed to place order.');
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    });
});