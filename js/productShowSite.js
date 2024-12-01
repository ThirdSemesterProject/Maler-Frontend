function showProductDetails() {
    // Retrieve the selected product from localStorage
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (!product) {
        console.error("No product found in localStorage.");
        return;
    }

    // Overhaul the page by clearing the body and showing product details
    const body = document.body;
    body.innerHTML = `
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
            <button id="addToCart" class="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200 flex items-center space-x-2">
                <i class="fas fa-shopping-cart"></i> <!-- Cart Icon -->
                <span>${product.price ? product.price.toFixed(2) : "N/A"} kr.</span>
            </button>
            <button id="" class="mt-6 px-6 py-3 text-white font-semibold rounded-md transition duration-200" 
                style="background: linear-gradient(90deg, #2C2C2C, #696969, #A52A2A, #8B4513, #D3D3D3);">
                Farve Univers
            </button>  
            <button id="goBack" class="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200">
                Tilbage til oversigten
            </button>
        
        </div>
    `;

    // Get image and spinner elements
    const productImage = document.getElementById("product-image");
    const imageSpinner = document.getElementById("image-spinner");

    // Add a delay to hide the spinner after the image is fully loaded
    productImage.addEventListener("load", () => {
        setTimeout(() => {
            imageSpinner.classList.add("hidden"); // Hide spinner
            productImage.classList.remove("hidden"); // Show image
        }, 6000); // Add a slight delay for smooth transition
    });

    // Add a "Go Back" button to reset the view
    const goBackButton = document.getElementById("goBack");
    goBackButton.addEventListener("click", () => {
        location.reload(); // Reload the page to show the product list again
    });
}

