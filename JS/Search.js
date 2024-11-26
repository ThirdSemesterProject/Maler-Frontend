async function searchByNameOrItemNo() {
    const searchInput = document.getElementById("search-input").value.trim();

    if (searchInput.length === 0) {
        displayItems([], []); // Tøm visningen, hvis søgefeltet er tomt
        return;
    }

    try {
        const response = await fetch(`/api/search?query=${encodeURIComponent(searchInput)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Søgningen mislykkedes");
        }

        const results = await response.json();
        const paintNos = results.paintNos || [];
        const products = results.products || [];

        displayItems(paintNos, products);
    } catch (error) {
        console.error("Fejl under søgning:", error);
    }
}

// displayItems-funktion til at vise resultater fra begge arrays
function displayItems(paintNos, products) {
    // Clear eksisterende resultater
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = "";

    // Vis PaintNos
    paintNos.forEach(paintNo => {
        const div = document.createElement("div");
        div.textContent = `ItemNo: ${paintNo.itemNo}`;
        resultsContainer.appendChild(div);
    });

    // Vis Products
    products.forEach(product => {
        const div = document.createElement("div");
        div.textContent = `Name: ${product.name}`;
        resultsContainer.appendChild(div);
    });
}