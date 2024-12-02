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
            <img src="${product.url || '/images/default.jpg'}" alt="${product.name}" class="w-full max-h-80 object-contain rounded-md shadow mb-6">
            <p class="text-lg text-gray-700 mb-4">${product.description || "No description available"}</p>
            <div class="text-lg text-gray-800">
                <p><strong class="font-semibold">Pris:</strong> ${product.price ? product.price.toFixed(2) : "N/A"} kr.</p>
                <p><strong class="font-semibold">Kategori:</strong> ${product.category || "Unknown"}</p>
                <p><strong class="font-semibold">Mærke:</strong> ${product.brand || "Unknown"}</p>
                ${
        product.paintNo
            ? `<p><strong class="font-semibold">Varenummer:</strong> ${product.paintNo.itemNo}</p>
                           <p><strong class="font-semibold">Liters:</strong> ${product.paintNo.liters}</p>`
            : ""
    }
            </div>
            <button id="goBack" class="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200">
                Tilbage til oversigten
            </button>
        </div>
    `;

    // Add a "Go Back" button to reset the view
    const goBackButton = document.getElementById("goBack");
    goBackButton.addEventListener("click", () => {
        location.reload(); // Reload the page to show the product list again
    });
}
