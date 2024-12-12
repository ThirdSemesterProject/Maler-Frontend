let paints = []; // Variabel til at gemme malinger

// Hent malinger fra backend, når siden loader
let products = []; // Variabel til at gemme produkter

async function fetchAllProducts() {
    try {
        const response = await fetch('https://malingdk-dhd0fxe9bxeffdem.northeurope-01.azurewebsites.net/api/products/getAllProducts', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Fejl ved hentning af produkter");
        }

        products = await response.json(); // Gem produkter i den globale variabel
        console.log("Hentede produkter:", products); // Debugging
    } catch (error) {
        console.error("Fejl:", error);
    }
}



// Søgning ved input
function searchByNameOrItemNo() {
    const searchInput = document.getElementById("search-input").value.trim().toLowerCase();
    const resultsContainer = document.getElementById("results-container");

    if (searchInput.length === 0) {
        resultsContainer.classList.add("hidden"); // Skjul dropdown, hvis søgefeltet er tomt
        resultsContainer.innerHTML = "";
        return;
    }

    // Filtrer produkter baseret på søgning
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput) ||
        (product.paintNo && product.paintNo.itemNo.toLowerCase().includes(searchInput)) // Hvis produktet er maling
    );

    console.log("Filtrerede resultater:", filteredProducts); // Debugging

    if (filteredProducts.length > 0) {
        resultsContainer.classList.remove("hidden");
        displayItems(filteredProducts);
    } else {
        resultsContainer.classList.remove("hidden");
        resultsContainer.innerHTML = `<div class="p-2 text-gray-600">Ingen resultater fundet.</div>`;
    }
}


// Vis søgeresultater
function displayItems(results) {
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ""; // Clear previous results

    results.forEach(result => {
        const div = document.createElement("div");
        div.classList.add("flex", "items-center", "p-2", "hover:bg-gray-100", "cursor-pointer");

        div.innerHTML = `
            <img src="${result.url || '/images/default.jpg'}" alt="${result.name}" class="w-12 h-12 rounded-md object-cover mr-4">
            <div>
                <strong>${result.name}</strong> - ${result.category}
                <br>
                Pris: ${result.price.toFixed(2)} kr.
            </div>
        `;

        // Add click event listener to save to localStorage and display product
        div.addEventListener("click", () => {
            localStorage.setItem("selectedProduct", JSON.stringify(result));
            showProductDetails();

            // Scroll til categories-section
            const categoriesSection = document.getElementById("categories-section");
            if (categoriesSection) {
                categoriesSection.scrollIntoView({ behavior: "smooth" });
            }
            // Ryd søgefeltet
            const searchInput = document.getElementById("search-input");
            if (searchInput) {
                searchInput.value = "";
            }

            // Skjul resultaterne
            const resultsContainer = document.getElementById("results-container");
            if (resultsContainer) {
                resultsContainer.classList.add("hidden");
                resultsContainer.innerHTML = "";
            }
        });

        resultsContainer.appendChild(div);
    });
}


window.onload = () => {
    fetchAllProducts();

    const searchInput = document.getElementById("search-input");
    if (!searchInput) {
        console.error("Søgefeltet med id='search-input' blev ikke fundet.");
        return;
    }

    searchInput.addEventListener("input", searchByNameOrItemNo);
};