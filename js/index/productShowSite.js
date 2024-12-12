function showProductDetails() {
    // Retrieve the selected product from localStorage
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (!product) {
        console.error("No product found in localStorage.");
        return;
    }

    // Overhaul the page by clearing the body and showing product details
    const categoriesSection = document.getElementById("categories-section");
    categoriesSection.innerHTML = `
<div class="relative">
        <button 
            id="goBack" 
            class="absolute top-4 left-4 bg-green-500 text-white p-2 rounded-full hover:brightness-110 transition-colors z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <div class="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">  
        <h1 class="text-4xl font-bold text-gray-800 mb-6">${product.name}</h1> 
            <div class="relative w-full max-h-80 mb-6">
                <!-- Spinner for loading feedback -->
                <div id="image-spinner" class="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-md">
                    <svg class="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                </div>
                <!-- Image with hidden class until fully loaded -->
                <img 
                    id="product-image" 
                    src="${product.url}" 
                    alt="${product.name}" 
                    class="w-40 max-h-40 object-contain rounded-md shadow hidden" 
                    loading="lazy"
                /></div>
            <p class="text-lg text-gray-700 mb-4">${product.description || "No description available"}</p>
            <div class="text-lg text-gray-800">
                <p><strong class="font-semibold">Kategori:</strong> ${product.category || "Unknown"}</p>
                <p><strong class="font-semibold">Mærke:</strong> ${product.brand || "Unknown"}</p>
            </div>
            <!-- Add to Cart Button -->
            <button 
                id="addToCart" 
                class="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200 flex items-center space-x-2"
                data-id="${product.id}" 
                data-name="${product.name}" 
                data-price="${product.price}" 
                data-url="${product.url}" 
                data-quantity="1">
                <i class="fas fa-shopping-cart"></i> <!-- Cart Icon -->
                <span>${product.price ? product.price.toFixed(2) : "N/A"} kr.</span>
            </button>
            <button id="" class="mt-6 px-6 py-3 text-white font-semibold rounded-md transition duration-200" 
                style="background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo);">
                Farve Univers
            </button>  
           
        
        </div>
        </div>
    `;


    const productImage = document.getElementById("product-image");
    const imageSpinner = document.getElementById("image-spinner");

    productImage.addEventListener("load", () => {
        setTimeout(() => {
            imageSpinner.classList.add("hidden");
            productImage.classList.remove("hidden");
        }, 600);
    });

    const goBackButton = document.getElementById("goBack");
    goBackButton.addEventListener("click", () => {
        if (window.lastSubcategory) {
            renderProductsBySubcategory(window.lastSubcategory);
        } else if (window.lastCategory) {
            renderSubcategories(window.lastCategory);
        } else {
            renderCategories();
        }
    });

    const addToCartButton = document.getElementById("addToCart");
    addToCartButton.addEventListener("click", async () => {
        const productData = {
            productId: product.id,
            name: product.name,
            price: product.price,
            url: product.url,
            quantity: 1,
        };

        try {
            const response = await fetch('https://malingdk-dhd0fxe9bxeffdem.northeurope-01.azurewebsites.net/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            if (response.ok) {
                alert(`${product.name} er tilføjet til kurven!`);
                fetchCartItems(); // Dynamisk opdatering af kurven
                showCartNotification(`${product.name} er tilføjet til kurven!`);
            } else {
                const errorText = await response.text();
                console.error("Backend error response:", errorText);
                alert('Kunne ikke tilføje produktet til kurven.');
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    });
}

// Feedback notifikation
function showCartNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}