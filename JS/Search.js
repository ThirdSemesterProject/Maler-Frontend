async function searchByNameOrItemNo() {
    const searchInput = document.getElementById("search-input").value.trim();
    const resultsContainer = document.getElementById("results-container");

    if (searchInput.length === 0) {
        resultsContainer.style.display = "none";
        resultsContainer.innerHTML = "";
        return;
    }

    try {
        const response = await fetch('http://localhost:8080/api/search?query=' + encodeURIComponent(searchInput), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Søgningen mislykkedes");
        }

        const results = await response.json();
        if (results.length > 0) {
            resultsContainer.style.display = "block";
            displayItems(results);
        } else {
            resultsContainer.style.display = "block";
            resultsContainer.innerHTML = `<div class="result-item">Ingen resultater fundet.</div>`;
        }
    } catch (error) {
        console.error("Fejl under søgning:", error);
    }
}

// displayItems-funktion til at vise resultater fra begge arrays
function displayItems(results) {
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ""; // Ryd tidligere resultater

    results.forEach(result => {
        const div = document.createElement("div");
        div.classList.add("result-item");

        div.innerHTML = `
            <strong>${result.name}</strong> - ${result.itemNo} (${result.liters}L)
            <br>
            <span>Kategori: ${result.category} - Pris: ${result.price} kr.</span>
            <br>
            Shine: ${result.shine}
        `;

        div.addEventListener("click", () => {
            const productPageUrl = `/products/${result.itemNo}`; // Dynamisk URL
            window.location.href = productPageUrl; // Naviger til produktsiden
        });

        resultsContainer.appendChild(div);
    });
}
async function fetchAllPaints() {
    const paintContainer = document.getElementById("paint-container");

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

        const paints = await response.json();

        paintContainer.innerHTML = "";
        paints.forEach(paint => {
            const paintDiv = document.createElement("div");
            paintDiv.classList.add("paint-item");

            paintDiv.innerHTML = `
                <strong>${paint.name}</strong> - ${paint.paintNo.itemNo} (${paint.paintNo.liters}L)
                <br>
                <span>Kategori: ${paint.category}</span>
                <br>
                Pris: ${paint.price} kr. - Shine: ${paint.shine}
                <br>
                <em>${paint.description}</em>
            `;
            paintContainer.appendChild(paintDiv);
        });
    } catch (error) {
        console.error("Fejl:", error);
        paintContainer.innerHTML = "<p>Kunne ikke hente malinger.</p>";
    }
}

// Kald funktionen, når siden loader
window.onload = fetchAllPaints;
