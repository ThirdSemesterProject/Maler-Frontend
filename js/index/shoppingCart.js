document.addEventListener('DOMContentLoaded', () => {
    // Funktion til at generere indkøbskurvens HTML
    function createShoppingCartHTML() {
        const shoppingCartHTML = `
        <!-- Shopping cart -->
        <div id="shopping-cart" class="hidden fixed inset-0 z-50">
            <div class="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <!-- Background overlay -->
                <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
                <!-- Cart panel -->
                <div class="fixed inset-0 overflow-hidden">
                    <div class="absolute inset-0 overflow-hidden">
                        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <div class="pointer-events-auto w-screen max-w-md">
                                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <!-- Header -->
                                    <div class="flex items-start justify-between px-4 py-6 sm:px-6">
                                        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button type="button" class="close-button relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">Close panel</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <!-- Cart items -->
                                    <div class="mt-8">
                                        <div class="flow-root">
                                            <ul id="cart-items" role="list" class="-my-6 divide-y divide-gray-200">
                                                <!-- Produkter tilføjes dynamisk via JavaScript -->
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- Footer -->
                                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p id="cart-total">$0.00</p>
                                        </div>
                                        <div class="mt-6">
                                            <button id="checkout-btn" class="flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                                Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', shoppingCartHTML);
    }

    // Generer HTML for indkøbskurven
    createShoppingCartHTML();

    // Hent elementer
    const cartButton = document.getElementById('cart-button');
    const shoppingCart = document.getElementById('shopping-cart');
    const closeButton = shoppingCart.querySelector('.close-button');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-btn');

    // Åbn/luk indkøbskurven
    cartButton.addEventListener('click', () => {
        shoppingCart.classList.toggle('hidden');
    });

    closeButton.addEventListener('click', () => {
        shoppingCart.classList.add('hidden');
    });

    // Hent kurvens data fra backend
    async function fetchCartItems() {
        try {
            const response = await fetch('http://localhost:8080/api/cart');
            const cartItems = await response.json();
            renderCartItems(cartItems);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    }

    // Dynamisk visning af kurvens produkter
    function renderCartItems(cartItems) {
        cartItemsContainer.innerHTML = '';
        let total = 0;

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
                </div>`;
            cartItemsContainer.appendChild(li);
        });

        cartTotalElement.textContent = `$${total.toFixed(2)}`;
    }

    // Fjern et produkt fra kurven
    async function removeFromCart(productId) {
        try {
            await fetch(`http://localhost:8080/api/cart/${productId}`, { method: 'DELETE' });
            fetchCartItems(); // Opdater kurvens data
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    }

    // Håndter fjernelse af produkter
    cartItemsContainer.addEventListener('click', async (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const productId = e.target.getAttribute('data-id');
            await removeFromCart(productId);
        }
    });

    // Håndter checkout-processen
    checkoutButton.addEventListener('click', async () => {
        try {
            const response = await fetch('http://localhost:8080/api/cart/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ customerName: 'John Doe', customerEmail: 'john.doe@example.com' })
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

    // Initialiser ved første visning
    fetchCartItems();
});