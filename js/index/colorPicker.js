async function loadColorPickerSection() {
    // Skjul sektioner, der ikke skal vises
    const heroSection = document.getElementById('heroSection');
    const infoSection = document.querySelector('section.bg-white');
    const categorySection = document.getElementById('categories-section');

    if (heroSection) heroSection.style.display = 'none';
    if (infoSection) infoSection.style.display = 'none';
    if (categorySection) categorySection.style.display = 'none';

    // Ryd hovedindhold
    const mainContentContainer = document.getElementById('main-content-container');
    mainContentContainer.innerHTML = '';

    // Billeder og farver
    const imageData = [
        { name: "Stue", src: null, width: 1667, height: 1227 },
        { name: "Bedroom", src: null, width: 1232, height: 1793 },
        { name: "Sofa", src: null, width: 1240, height: 1920 },
    ];
    const colors = [
        // Første kolonne
        { name: "346 Rice bric", hex: "#F8F1E4" },
        { name: "351 Pedrixit", hex: "#F5F0EB" },
        { name: "301 Blanco", hex: "#F6F5F3" },
        { name: "302 Ibiotecis", hex: "#F6F5F1" },
        { name: "305 Eqlokit", hex: "#F4EFE7" },
        { name: "333 Myall", hex: "#E8E5DE" },
        { name: "303 Kubiwt", hex: "#E8E3D8" },
        { name: "331 Jyisti", hex: "#EEE7E1" },
        { name: "306 Lyx Antik", hex: "#E8DFD5" },
        { name: "417 Smooth beige", hex: "#E5DDD5" },

// Anden kolonne
        { name: "340 Velvet", hex: "#EDE6DB" },
        { name: "341 Brush", hex: "#EAE2DA" },
        { name: "418 Warm shadow", hex: "#E1D7C4" },
        { name: "419 Soulmate", hex: "#DCD2BF" },
        { name: "420 Soft grey", hex: "#D5CDC2" },
        { name: "416 Antikgrej", hex: "#D2C9BE" },
        { name: "421 Warm grey", hex: "#D8CEC3" },
        { name: "422 Ionic grey", hex: "#D1C8C2" },
        { name: "344 Grafin", hex: "#CFC6BE" },
        { name: "423 Soft dark", hex: "#CCC4BE" },

// Tredje kolonne
        { name: "434 Illusion", hex: "#D8CBB9" },
        { name: "353 Stagger", hex: "#E5DCCC" },
        { name: "425 Satin love", hex: "#D9CFBA" },
        { name: "426 Perfect beige", hex: "#D6C7A8" },
        { name: "427 Essential beige", hex: "#CABEA4" },
        { name: "342 Alsine", hex: "#C1B4A2" },
        { name: "343 Arena", hex: "#C0B1A0" },
        { name: "324 Joel", hex: "#BBAE9E" },
        { name: "438 Tree brown", hex: "#AD9E8B" },
        { name: "429 Burnt pepper", hex: "#A79483" },

// Fjerde kolonne
        { name: "336 Camulos", hex: "#BFB6A3" },
        { name: "430 Chic beige", hex: "#D0C6B1" },
        { name: "431 Timeless", hex: "#CFC3A5" },
        { name: "339 Eflacent", hex: "#BEB29B" },
        { name: "323 Krylder", hex: "#B1A492" },
        { name: "404 Slik", hex: "#ADA390" },
        { name: "405 Sler", hex: "#A99E8F" },
        { name: "406 Sly dark", hex: "#9E9184" },
        { name: "407 Chili", hex: "#8F8276" },
        { name: "437 Burgundy", hex: "#835F55" },

// Femte kolonne
        { name: "357 Skylband", hex: "#C4C1BA" },
        { name: "318 Dia", hex: "#CAC6C0" },
        { name: "352 Celus", hex: "#D5D1CC" },
        { name: "347 Succnep", hex: "#D6D1CB" },
        { name: "441 Evening grey", hex: "#C3BCB5" },
        { name: "442 Bliss", hex: "#B6AFA9" },
        { name: "414 Peppercorn", hex: "#B3AAA4" },
        { name: "413 Cuoso", hex: "#AEA7A1" },
        { name: "436 Burn rose", hex: "#A1948D" },
        { name: "415 Korroko", hex: "#967F79" },

// Sjette kolonne
        { name: "444 Selgraph", hex: "#B6B1A9" },
        { name: "446 Delux pat", hex: "#A7A49F" },
        { name: "447 Hotscot", hex: "#989490" },
        { name: "349 Kuropit", hex: "#8F8C87" },
        { name: "436 Burn rose", hex: "#7A6A66" },
        { name: "464 Nature", hex: "#D0C5AC" },
        { name: "457 Sigrness", hex: "#C4B9A6" },
        { name: "450 Shelbrige", hex: "#E2DFD8" },
        { name: "455 Leg mint", hex: "#D8D7D4" },
        { name: "372 Summerset", hex: "#C9C4BC" },

// Syvende kolonne
        { name: "371 Mystic blue", hex: "#A9A8A4" },
        { name: "353 Lagoon deep", hex: "#98A2A0" },
        { name: "460 Green spirit", hex: "#748678" },
        { name: "471 Flaskgreen", hex: "#667A66" },
        { name: "479 Casual", hex: "#8E7748" },
        { name: "461 Tropical green", hex: "#628F76" },
        { name: "452 Shilo", hex: "#516E68" },
        { name: "380 Kayfall", hex: "#3D3E46" },
        { name: "480 Soltan", hex: "#9F7B61" },

// Otte kolonne
        { name: "465 Myk nose", hex: "#C3B18F" },
        { name: "475 Summerstand", hex: "#D2C39F" },
        { name: "473 Drapet jod", hex: "#BEA56F" },
        { name: "477 Mustard", hex: "#C7A65B" },
        { name: "468 Nature glow", hex: "#B7A059" },
        { name: "470 Shelwood", hex: "#84763E" },
        { name: "469 Leaf glow", hex: "#738644" },
        { name: "474 Sunset touch", hex: "#A98453" },
        { name: "479 Calm sage", hex: "#97945E" },
        { name: "475 Golden oak", hex: "#D3B87F" },

// Niende kolonne
        { name: "388 Norby", hex: "#5A6F76" },
        { name: "391 Poppy", hex: "#55796D" },
        { name: "466 Go green", hex: "#4E6E56" },
        { name: "468 Deepest green", hex: "#405946" },
        { name: "469 Donut moss", hex: "#354F40" },
        { name: "471 Flaskgreen", hex: "#2D4736" },
        { name: "479 Casual", hex: "#705E40" },
        { name: "475 Summerstand", hex: "#BA9C6A" },
        { name: "477 Mustard", hex: "#D0A055" },
        { name: "474 Sunset touch", hex: "#C78E4E" },

// Tiende kolonne
        { name: "480 Soltan", hex: "#84662E" },
        { name: "479 Calm sage", hex: "#736C48" },
        { name: "478 Drapet jod", hex: "#6F623A" },
        { name: "469 Leaf glow", hex: "#5C5C3A" },
        { name: "470 Shelwood", hex: "#4B4F33" },
        { name: "467 Organic", hex: "#3D4734" },
        { name: "466 Nature", hex: "#314032" },
        { name: "468 Go green", hex: "#4A6B4F" },
        { name: "461 Tropical green", hex: "#3E6856" },
        { name: "460 Green spirit", hex: "#365746" },

// Elvte kolonne
        { name: "457 Sigrness", hex: "#4F7C5C" },
        { name: "456 Fresh mint", hex: "#77A78C" },
        { name: "455 Leg mint", hex: "#A8C6A7" },
        { name: "450 Shelbrige", hex: "#BACCB7" },
        { name: "444 Selgraph", hex: "#D4E0D0" },
        { name: "446 Delux pat", hex: "#DBE1D6" },
        { name: "447 Hotscot", hex: "#E5EAE4" },
        { name: "436 Burn rose", hex: "#CEB4AC" },
        { name: "437 Burgundy", hex: "#AB6D63" },
        { name: "435 Pink glow", hex: "#D0B4A5" },

// Tolvte kolonne
        { name: "433 Nude", hex: "#E6D2CB" },
        { name: "431 Timeless", hex: "#C4B9A3" },
        { name: "426 Perfect beige", hex: "#B6A492" },
        { name: "425 Satin love", hex: "#B3A497" },
        { name: "424 Essential beige", hex: "#8E7E6A" },
        { name: "423 Soft dark", hex: "#6D5B46" },
        { name: "422 Ionic grey", hex: "#524839" },
        { name: "421 Warm grey", hex: "#413829" },
        { name: "419 Soulmate", hex: "#3C3225" },
        { name: "418 Warm shadow", hex: "#2E291D" }

    ];

    try {
        // Hent billeder fra API'et
        for (const image of imageData) {
            const response = await fetch(`http://localhost:8080/api/upload/images/search?name=${image.name}`);
            if (!response.ok) {
                throw new Error(`Kunne ikke hente billede: ${image.name}`);
            }
            const img = await response.json();
            image.src = img.data;  // Sørg for at src bliver opdateret korrekt
        }

        // HTML-struktur
        mainContentContainer.innerHTML = `
            <div id="color-picker-section" class="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
                <!-- Venstre kolonne -->
                <div class="image-layout flex flex-col gap-4 w-full md:w-2/3">
                    <!-- Stort billede -->
                    <div id="main-image-box" class="relative" style="width: 100%; aspect-ratio: 3 / 2;">
                        <div class="absolute inset-0" id="stue-box" style="background-color: #ffffff;" data-name="Stue">
                            <img src="${imageData[0].src}" alt="Stue" class="rounded-md w-full h-full object-cover cursor-pointer" data-name="Stue">
                        </div>
                    </div>

                    <!-- To små billeder -->
                    <div class="flex gap-4">
                        ${imageData.slice(1).map((image, index) => `
                            <div class="relative" style="width: 50%; aspect-ratio: 2 / 3;">
                                <div class="absolute inset-0" style="background-color: #ffffff;" data-name="${image.name}">
                                    <img src="${image.src}" alt="${image.name}" 
                                         class="rounded-md w-full h-full object-cover cursor-pointer" data-name="${image.name}">
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Højre kolonne (farvekort) -->
                <div class="color-layout grid grid-cols-3 md:grid-cols-4 gap-2 w-full md:w-1/3">
                    ${colors.map(color => `
                        <div class="color-option cursor-pointer rounded-md w-full h-12 shadow-md"
                             style="background-color: ${color.hex};" data-color="${color.hex}">
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Tilbage-knap -->
            <div class="text-center mt-6">
                <button id="back-to-home" class="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600">
                    Tilbage til forsiden
                </button>
            </div>
        `;

        // Event listeners til farver
        const colorOptions = document.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            option.addEventListener('click', (event) => {
                const color = event.target.getAttribute('data-color');
                updateBackgroundColors(color);
            });
        });

        // Event listeners til billeder
        const imageBoxes = document.querySelectorAll('.image-layout div > div');
        imageBoxes.forEach(box => {
            box.addEventListener('click', (event) => {
                const imageName = box.getAttribute('data-name'); // Brug data-name til at identificere billede
                const image = imageData.find(img => img.name === imageName); // Find billedet baseret på name
                openFullscreenImage(image.src, box.style.backgroundColor);
            });
        });

        // Tilbage-knap
        document.getElementById('back-to-home').addEventListener('click', restoreDefaultSections);
    } catch (error) {
        console.error(error);
        mainContentContainer.innerHTML = `<p class="text-red-500">Der opstod en fejl: ${error.message}</p>`;
    }
}

// Funktion til at opdatere baggrundsfarver
function updateBackgroundColors(color) {
    const imageBoxes = document.querySelectorAll('.image-layout div > div');
    imageBoxes.forEach(box => {
        box.style.backgroundColor = color;
    });
}

// Funktion til at åbne modal med forstørret billede
function openFullscreenImage(imageSrc, backgroundColor) {
    const modal = document.createElement('div');
    modal.id = "image-modal";
    modal.className = "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50";
    modal.innerHTML = `
        <div class="relative bg-white rounded-lg shadow-lg p-0 overflow-hidden"
             style="background-color: ${backgroundColor}; max-width: 95%; max-height: 95%; display: flex; justify-content: center; align-items: center;">
            <img src="${imageSrc}" alt="Forstørret billede" class="rounded-md" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            <button id="close-modal" 
                    class="absolute top-2 right-2 bg-gray-200 text-black py-1 px-4 rounded-md hover:bg-gray-300">
                Luk
            </button>
        </div>
    `;
    document.body.appendChild(modal);

    // Luk modal ved klik eller 'Esc'
    const closeModal = () => modal.remove();
    document.getElementById('close-modal').addEventListener('click', closeModal);
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeModal();
    }, { once: true });
}

// Funktion til at gendanne forsiden
function restoreDefaultSections() {
    const heroSection = document.getElementById('heroSection');
    const infoSection = document.querySelector('section.bg-white');
    const categorySection = document.getElementById('categories-section');
    const mainContentContainer = document.getElementById('main-content-container');

    if (heroSection) heroSection.style.display = 'block';
    if (infoSection) infoSection.style.display = 'block';
    if (categorySection) categorySection.style.display = 'block';

    mainContentContainer.innerHTML = '';
    if (typeof window.renderCategories === 'function') {
        window.renderCategories();
    }
}

// Gør funktioner globalt tilgængelige
window.loadColorPickerSection = loadColorPickerSection;
window.restoreDefaultSections = restoreDefaultSections;
