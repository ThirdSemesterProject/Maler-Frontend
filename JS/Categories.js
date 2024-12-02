// JavaScript til dynamisk rendering af kategorier og underkategorier
document.addEventListener("DOMContentLoaded", () => {
    const categories = {
        "Farveuniverset": {
            subcategories: [],
            image: "/images/farveuniversetKategori.png",
        },
        "Indendørs maling": {
            subcategories: [
                { name: "Vægmaling", image: "/images/vaegmaling.png" },
                { name: "Loftmaling", image: "/images/loftmaling.png" },
                { name: "Træmaling", image: "/images/traemaling.png" },
                { name: "Gulvmaling", image: "/images/gulvmaling.png" },
                { name: "Specialmaling", image: "/images/specialmaling.png" },
            ],
            image: "/images/indendoersKategori.png",
        },
        "Udendørs maling": {
            subcategories: [
                { name: "Træolie", image: "/images/traeolie.png" },
                { name: "Træbeskyttelse", image: "/images/traebeskyttelse.png" },
                { name: "Sokkelmaling", image: "/images/sokkelmaling.png" },
                { name: "Facademaling", image: "/images/facademaling.png" },
                { name: "Rustbeskyttelse", image: "/images/rustbeskyttelse.png" },
            ],
            image: "/images/udendoersKategori.png",
        },
        "Tilbehør": {
            subcategories: [
                { name: "Pensler", image: "/images/pensler.png" },
                { name: "Malerruller", image: "/images/malerruller.png" },
                { name: "Malerullesæt", image: "/images/malerullesaet.png" },
                { name: "Tape", image: "/images/tape.png" },
                { name: "Afdækning", image: "/images/afdaekning.png" },
            ],
            image: "/images/tilbehoerKategori.png",
        },
        "Værktøj": {
            subcategories: [
                { name: "Håndværktøj", image: "/images/haandvaerktoej.png" },
                { name: "Elværktøj", image: "/images/elvaerktoej.png" },
                { name: "Belysning", image: "/images/belysning.png" },
            ],
            image: "/images/vaerktoejKategori.png",
        },
        "Isenkram": {
            subcategories: [
                { name: "Låse", image: "/images/loese.png" },
                { name: "Stiger", image: "/images/stiger.png" },
                { name: "Biludstyr", image: "/images/biludstyr.png" },
                { name: "Cykeludstyr", image: "/images/cykeludstyr.png" },
                { name: "Sikkerhedsudstyr", image: "/images/sikkerhedsudstyr.png" },
            ],
            image: "/images/isenkramKategori.png",
        },
        "Rengøring": {
            subcategories: [
                { name: "Specielrens", image: "/images/specielrens.png" },
                { name: "Sæber", image: "/images/saeber.png" },
                { name: "Kemivarer", image: "/images/kemivarer.png" },
                { name: "Plejeprodukter", image: "/images/plejeprodukter.png" },
                { name: "Vinduesvask", image: "/images/vinduesvask.png" },
                { name: "Spande & Baljer", image: "/images/spande_baljer.png" },
                { name: "Moppesæt", image: "/images/moppesaet.png" },
                { name: "Kost & Skrubber", image: "/images/kost_skrubber.png" },
                { name: "Svampe & Klude", image: "/images/svampe_klude.png" },
                { name: "Tøjpleje & Vask", image: "/images/toejpleje_vask.png" },
            ],
            image: "/images/rengoeringKategori.png",
        },
        "Dit kreative univers": {
            subcategories: [
                { name: "Posca", image: "/images/posca.png" },
                { name: "Akrylmaling", image: "/images/akrylmaling.png" },
                { name: "Akvarelfarver", image: "/images/akvarelfarver.png" },
                { name: "Farveblyanter", image: "/images/farveblyanter.png" },
                { name: "Pensler", image: "/images/kreative_pensler.png" },
                { name: "Paletter", image: "/images/paletter.png" },
                { name: "Lærreder", image: "/images/laerreder.png" },
                { name: "Staffelier", image: "/images/staffelier.png" },
                { name: "Årets Julegavesæt", image: "/images/julegavesaet.png" },
            ],
            image: "/images/kreativtUniversKategori.png",
        },
    };


// Hent placeholder sektionen
    const categoriesSection = document.getElementById("categories-section");

// Funktion til at vise hovedkategorier
    const renderCategories = () => {
        categoriesSection.innerHTML = ""; // Ryd placeholderen

        const grid = document.createElement("div");
        grid.className = "grid grid-cols-2 md:grid-cols-4 gap-6";

        Object.keys(categories).forEach((category) => {
            const { image } = categories[category];

            const card = document.createElement("div");
            card.className =
                "text-center bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow cursor-pointer";

            card.innerHTML = `
            <div>
                <img src="${image}" alt="${category}" class="rounded-md w-full h-48 object-cover mb-4">
            </div>
            <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-800">${category}</h3>
            </div>
        `;

            card.addEventListener("click", () => renderSubcategories(category));
            grid.appendChild(card);
        });

        categoriesSection.appendChild(grid);
    };


// Funktion til at vise underkategorier
    const renderSubcategories = (category) => {
        const { subcategories } = categories[category];

        categoriesSection.innerHTML = ""; // Ryd placeholderen

        const header = document.createElement("div");
        header.className = "flex justify-between items-center mb-6";

        const backButton = document.createElement("button");
        backButton.className =
            "bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors";
        backButton.textContent = "Tilbage";
        backButton.addEventListener("click", renderCategories);

        const title = document.createElement("h2");
        title.className = "text-2xl font-bold text-gray-800 text-center w-full";
        title.textContent = category;

        header.appendChild(backButton);
        header.appendChild(title);
        categoriesSection.appendChild(header);

        if (subcategories.length === 0) {
            // Ingen underkategorier - vis en besked
            const message = document.createElement("p");
            message.className = "text-center text-gray-600 text-lg mt-6";
            message.textContent = "Denne kategori har ingen underkategorier.";
            categoriesSection.appendChild(message);
            return;
        }

        const grid = document.createElement("div");
        grid.className = "grid grid-cols-2 md:grid-cols-4 gap-6";

        subcategories.forEach(({ name, image }) => {
            const card = document.createElement("div");
            card.className =
                "text-center bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow cursor-pointer";

            card.innerHTML = `
            <div>
                <img src="${image}" alt="${name}" class="rounded-md w-full h-48 object-cover mb-4">
            </div>
            <div class="p-4">
                <h4 class="text-md font-semibold text-gray-800">${name}</h4>
            </div>
        `;
            card.addEventListener("click", () => renderProductsBySubcategory(name));

            grid.appendChild(card);
        });

        categoriesSection.appendChild(grid);
    };

    const renderProductsBySubcategory = (subcategory) => {
        // Filtrer produkterne baseret på underkategori
        const filteredProducts = products.filter(product =>
            product.subcategory === subcategory
        );

        // Ryd kategorisektionen
        categoriesSection.innerHTML = "";

        // Tilføj en overskrift og tilbageknap
        const header = document.createElement("div");
        header.className = "flex justify-between items-center mb-6";

        const backButton = document.createElement("button");
        backButton.className =
            "bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors";
        backButton.textContent = "Tilbage";
        backButton.addEventListener("click", renderCategories);

        const title = document.createElement("h2");
        title.className = "text-2xl font-bold text-gray-800 text-center w-full";
        title.textContent = subcategory;

        header.appendChild(backButton);
        header.appendChild(title);
        categoriesSection.appendChild(header);

        // Hvis der ikke er nogen produkter, vis en besked
        if (filteredProducts.length === 0) {
            const noProductsMessage = document.createElement("p");
            noProductsMessage.className = "text-center text-gray-600 text-lg mt-6";
            noProductsMessage.textContent = "Ingen produkter fundet for denne underkategori.";
            categoriesSection.appendChild(noProductsMessage);
            return;
        }

        // Opret et grid til produkterne
        const grid = document.createElement("div");
        grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";

        // Loop gennem de filtrerede produkter og opret kort
        filteredProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className =
                "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow";

            productCard.innerHTML = `
            <div>
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            </div>
            <div class="p-4">
                <h3 class="text-lg font-bold text-gray-800 mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                <div class="flex items-center justify-between">
                    <span class="text-lg font-bold text-red-500">${product.price} DKK</span>
                    <button class="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                        Køb
                    </button>
                </div>
            </div>
        `;

            grid.appendChild(productCard);
        });

        categoriesSection.appendChild(grid);
    };



// Start med at vise hovedkategorierne
    renderCategories();
});
