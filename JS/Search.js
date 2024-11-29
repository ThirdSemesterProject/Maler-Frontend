let paints = []; // Variabel til at gemme malinger

// Hent malinger fra backend, når siden loader
async function fetchAllPaints() {
    try {
        const response = await fetch('http://localhost:8080/api/paint/getAllPaints', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Fejl ved hentning af malinger");
        }

        paints = await response.json(); // Gem malinger i variablen
        console.log("Hentede malinger:", paints); // Debugging
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

    // Filtrer malinger baseret på søgning
    const filteredPaints = paints.filter(paint =>
        paint.name.toLowerCase().includes(searchInput) ||
        paint.paintNo.itemNo.toLowerCase().includes(searchInput)
    );

    console.log("Filtrerede resultater:", filteredPaints); // Debugging

    if (filteredPaints.length > 0) {
        resultsContainer.classList.remove("hidden");
        displayItems(filteredPaints);
    } else {
        resultsContainer.classList.remove("hidden");
        resultsContainer.innerHTML = `<div class="p-2 text-gray-600">Ingen resultater fundet.</div>`;
    }
}

// Vis søgeresultater
function displayItems(results) {
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ""; // Ryd tidligere resultater

    results.forEach(result => {
        const div = document.createElement("div");
        div.classList.add("p-3", "hover:bg-gray-100", "cursor-pointer");

        div.innerHTML = `
            <strong>${result.name}</strong> - ${result.paintNo.itemNo} (${result.paintNo.liters}L)
            <br>
            <span class="text-sm text-gray-600">Kategori: ${result.category} - Pris: ${result.price} kr.</span>
        `;

        div.addEventListener("click", () => {
            productPageUrl = `/products/${result.paintNo.itemNo}`;
            window.location.href = productPageUrl;
        });

        resultsContainer.appendChild(div);
    });

    resultsContainer.classList.remove("hidden"); // Vis resultater
}

window.onload = () => {
    fetchAllPaints();

    const searchInput = document.getElementById("search-input");
    if (!searchInput) {
        console.error("Søgefeltet med id='search-input' blev ikke fundet.");
        return;
    }

    searchInput.addEventListener("input", searchByNameOrItemNo);
};