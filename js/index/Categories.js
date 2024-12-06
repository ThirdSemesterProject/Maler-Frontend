const categories = {
    "Farveuniverset": {
        subcategories: [],
        image: null, // Placeholder
    },
    "Indendørs maling": {
        subcategories: [
            { name: "Vægmaling", image: null },
            { name: "Loftmaling", image: null },
            { name: "Træmaling", image: null },
            { name: "Gulvmaling", image: null },
            { name: "Specialmaling", image: null },
        ],
        image: null, // Placeholder
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

window.categories = categories;

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Kategori-sektion
    window.categoriesSection = document.getElementById("categories-section");

    // Render kategorier
    const renderCategories = () => {
        window.categoriesSection.innerHTML = ""; // Ryd placeholderen

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

            card.addEventListener("click", () => window.renderSubcategories(category));
            grid.appendChild(card);
        });

        window.categoriesSection.appendChild(grid);
    };

    // Gem funktionen globalt
    window.renderCategories = renderCategories;

    // Først hent billeder og derefter rendér kategorier
    await loadCategoryImages();
    renderCategories();

    // 2. Dropdown-knap
    const dropdownBtn = document.getElementById("categories-dropdown-btn");
    const dropdownMenu = document.getElementById("categories-dropdown-menu");

    // Toggle dropdown visibility
    dropdownBtn.addEventListener("click", () => {
        dropdownMenu.classList.toggle("hidden");
    });

    // Dynamisk oprettelse af dropdown-menuens kategorier
    Object.keys(window.categories).forEach((category) => {
        const li = document.createElement("li");
        li.className = "px-4 py-2 hover:bg-gray-200 cursor-pointer text-gray-800";
        li.textContent = category;

        // Klik på kategori
        li.addEventListener("click", () => {
            dropdownMenu.classList.add("hidden"); // Skjul dropdown
            window.renderSubcategories(category); // Vis underkategorier
            scrollToCategories(); // Scroll til kategorisektionen
        });

        dropdownMenu.appendChild(li);
    });
});

// Scroll til kategorisektionen
function scrollToCategories() {
    const categoriesSection = document.getElementById("categories-section");
    if (categoriesSection) {
        categoriesSection.scrollIntoView({ behavior: "smooth" });
    }
}

// Hent billeder til kategorierne
async function loadCategoryImages() {
    for (const categoryName in categories) {
        const category = categories[categoryName];

        // Hent billede til hovedkategori
        try {
            console.log(`Henter billede for kategori: ${categoryName}`);
            category.image = await fetchImageByName(categoryName) || "/images/default-placeholder.png";
        } catch (error) {
            console.error(`Fejl ved hentning af billede for kategori ${categoryName}:`, error);
            category.image = "/images/default-placeholder.png"; // Fallback
        }

        // Hent billeder for underkategorier
        for (const subcategory of category.subcategories) {
            try {
                console.log(`Henter billede for underkategori: ${subcategory.name}`);
                subcategory.image = await fetchImageByName(subcategory.name) || "/images/default-placeholder.png";
            } catch (error) {
                console.error(`Fejl ved hentning af billede for underkategori ${subcategory.name}:`, error);
                subcategory.image = "/images/default-placeholder.png"; // Fallback
            }
        }
    }
}

// Fetch billede fra serveren
async function fetchImageByName(name) {
    try {
        const response = await fetch(`http://localhost:8080/api/upload/images/search?name=${encodeURIComponent(name)}`);
        if (!response.ok) {
            throw new Error(`Billede ikke fundet for navn: ${name}`);
        }
        const image = await response.json();
        return image.data || image.imageUrl;
    } catch (error) {
        console.error("Fejl ved hentning af billede:", error);
        return null;
    }
}
