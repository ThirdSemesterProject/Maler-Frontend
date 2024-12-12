const colorSection1 = [
    // Række 1
    { name: "346 Ekte hvit", hex: "#F1F1F1" }, // S 0300-N
    { name: "351 Perlehvit", hex: "#F3F3F3" }, // S 0500-N
    { name: "301 Blanco", hex: "#F4F5F2" }, // 0401-G42Y
    { name: "302 Hvitveis", hex: "#F5F4F2" }, // 0501-Y01R
    { name: "305 Egghvit", hex: "#F5F2E9" }, // 0502-Y
    { name: "333 Myrull", hex: "#ECE8E1" }, // S 0502-Y
    { name: "303 Kalkhvit", hex: "#EFE5DE" }, // 0801-Y25R
    { name: "334 Hyasint", hex: "#EFE3DD" }, // 1102-Y10R
    { name: "306 Lys Antikk", hex: "#EDE8D4" }, // 0802-G98Y
    { name: "417 Smooth beige", hex: "#E5DFCF" }, // 1203-Y19R

    // Række 2
    { name: "340 Velvet", hex: "#E0DCCC" }, // S 1002-Y
    { name: "341 Basalt", hex: "#D6D0C0" }, // S 1502-Y
    { name: "418 Warm shadow", hex: "#CCC4B2" }, // S 2002-Y
    { name: "419 Soulmate", hex: "#D1CBB3" }, // 2003-G96Y
    { name: "420 Soft grey", hex: "#D0C7B2" }, // 2703-Y19R
    { name: "416 Antikkgrå", hex: "#C4BAA8" }, // S 2502-Y
    { name: "421 Warm grey", hex: "#BAB09E" }, // S 3502-Y
    { name: "422 Iconic grey", hex: "#A89E8C" }, // S 4502-Y
    { name: "344 Grafitti", hex: "#91897A" }, // S 5502-Y
    { name: "423 Soft dark", hex: "#6E6456" }, // S 7502-Y

    // Række 3
    { name: "424 Illusion", hex: "#E3DBCC" }, // 1202-Y26R
    { name: "335 Skygge", hex: "#D8CAB5" }, // 1603-Y31R
    { name: "425 Satin love", hex: "#D1C1AB" }, // 1805-Y20R
    { name: "426 Perfect beige", hex: "#CABAA6" }, // 1704-Y19R
    { name: "427 Essential beige", hex: "#BBAF9B" }, // S 2005-Y20R
    { name: "342 Akasie", hex: "#A59684" }, // 2903-Y30R
    { name: "343 Aroma", hex: "#9C8D7B" }, // 3504-Y19R
    { name: "324 Jord", hex: "#8C7A68" }, // S 5005-Y50R
    { name: "428 True brown", hex: "#6E5D4C" }, // S 6005-Y50R
    { name: "429 Burnt pepper", hex: "#5A4A39" }, // S 7005-Y50R

    // Række 4
    { name: "336 Cumulus", hex: "#DED2C3" }, // 2303-Y14R
    { name: "430 Chic beige", hex: "#D2C6B4" }, // 2305-Y22R
    { name: "431 Timeless", hex: "#C6B8A6" }, // 2805-Y27R
    { name: "339 Eikenøtt", hex: "#B2A48C" }, // 3606-Y29R
    { name: "323 Krydder", hex: "#8F7D66" }, // 4207-Y42R
    { name: "404 Silke", hex: "#786955" }, // 2306-Y47R
    { name: "405 Slør", hex: "#6F5E4B" }, // S 3010-Y50R
    { name: "432 Golden nude", hex: "#5E503D" }, // 2914-Y53R
    { name: "406 Duggrose", hex: "#4C3E2D" }, // 3923-Y74R
    { name: "407 Chili", hex: "#3A2C1F" }, // 4436-Y81R
];

const colorSection2 = [
    // Række 1
    { name: "410 Lind", hex: "#A48F80" }, // S 1002-Y50R
    { name: "433 Nude", hex: "#B8958A" }, // S 1505-Y80R
    { name: "434 Pink love", hex: "#BC8C83" }, // S 1510-Y80R
    { name: "435 Pink glow", hex: "#D69086" }, // 2911-Y82R
    { name: "412 Daggry", hex: "#D0B2A3" }, // S 3005-Y80R
    { name: "413 Cuzco", hex: "#B29484" }, // S 5005-Y80R
    { name: "414 Pepperkorn", hex: "#977766" }, // S 6005-Y80R
    { name: "415 Koriander", hex: "#7C5E51" }, // 7003-R01B
    { name: "436 Burnt rose", hex: "#87524D" }, // S 6020-R10B
    { name: "437 Burgundy", hex: "#6D3D3A" }, // S 7010-R10B

    // Række 2
    { name: "438 Sjøluft", hex: "#C8C2C6" }, // S 1502-R
    { name: "439 Nordisk lys", hex: "#B8B2B5" }, // S 2502-R
    { name: "440 Smokey grey", hex: "#A19A9D" }, // S 3502-R
    { name: "441 Evening grey", hex: "#888185" }, // S 4502-R
    { name: "322 Aubergine", hex: "#765F6B" }, // S 4005-R20B
    { name: "442 Bliss", hex: "#6D5C64" }, // S 5005-R20B
    { name: "481 Plomme", hex: "#59414F" }, // S 6005-R20B
    { name: "366 Harmoni", hex: "#4A4C57" }, // S 6005-R50B
    { name: "367 Enebær", hex: "#4E4950" }, // 6309-R37B
    { name: "443 Diva", hex: "#393643" }, // S 7010-R50B

    // Række 3
    { name: "357 Skjellsand", hex: "#F0EFEA" }, // S 1000-N
    { name: "318 Dis", hex: "#E6E5E0" }, // S 1500-N
    { name: "352 Grålut", hex: "#DCDAD6" }, // S 2000-N
    { name: "347 Sementgrå", hex: "#CAC7C3" }, // S 3000-N
    { name: "359 Leire", hex: "#B8B5B1" }, // S 4000-N
    { name: "354 Jerngrå", hex: "#A6A29E" }, // S 5000-N
    { name: "349 Kvartsgrå", hex: "#8C8884" }, // S 6000-N
    { name: "350 Anis", hex: "#615F5B" }, // S 7500-N
    { name: "356 Sort oliven", hex: "#4D4B48" }, // S 8000-N
    { name: "362 Varg", hex: "#3A3936" }, // S 8500-N

    // Række 4
    { name: "444 Sølvgrå", hex: "#DDE3E5" }, // S 2002-B
    { name: "445 Gråskimmer", hex: "#CAD0D4" }, // S 2502-B
    { name: "446 Delikat grå", hex: "#B8BDC2" }, // S 3502-B
    { name: "447 Horisont", hex: "#A6ADB3" }, // S 4502-B
    { name: "377 Aftenbris", hex: "#89A0B5" }, // S 3010-B
    { name: "448 Fjordblå", hex: "#6E90A8" }, // S 3020-B
    { name: "384 Korall", hex: "#4D738E" }, // S 4020-B
    { name: "383 Jade", hex: "#49788F" }, // S 4020-B10G
    { name: "386 Dråpe", hex: "#345C77" }, // S 6020-B
    { name: "449 Blåtinde", hex: "#1C3F5A" }, // S 7020-B
];

const colorSection3 = [
    // Række 1
    { name: "450 Sølvdråpe", hex: "#D0D3DA" }, // S 1005-R90B
    { name: "451 Østavind", hex: "#B8C1CF" }, // S 2005-R90B
    { name: "371 Skyggespill", hex: "#98A5B8" }, // S 3010-R90B
    { name: "452 Midnatt blå", hex: "#647B99" }, // 3908-B01G
    { name: "453 Stille sjø", hex: "#8396AA" }, // S 4010-R90B
    { name: "372 Sommernatt", hex: "#5E7088" }, // S 5010-R90B
    { name: "379 Blåstål", hex: "#4D6276" }, // 6108-B08G
    { name: "373 Tindeblå", hex: "#3E5571" }, // S 5020-R90B
    { name: "454 Navy blue", hex: "#2C3D57" }, // 6416-B02G
    { name: "380 Kaprifol", hex: "#1A2C41" }, // S 7010-R90B

// Række 2
    { name: "455 Lys mint", hex: "#D8E6D4" }, // S 1005-G10Y
    { name: "456 Fresh mint", hex: "#CFE3C6" }, // S 1005-G20Y
    { name: "387 Frost", hex: "#B7D4A6" }, // 1706-G15Y
    { name: "388 Nordlys", hex: "#A3C99A" }, // S 3005-G20Y
    { name: "457 Sjøgrønn", hex: "#85B7A3" }, // 3706-B93G
    { name: "458 Smokey green", hex: "#6E9D94" }, // S 4010-B50G
    { name: "391 Papaya", hex: "#608B87" }, // S 5010-B50G
    { name: "459 Urban green", hex: "#4A7A74" }, // S 6010-B50G
    { name: "460 Green spirit", hex: "#3A6B65" }, // S 7010-B50G
    { name: "461 Tropical green", hex: "#2D5C58" }, // S 7020-B50G

// Række 3
    { name: "462 Vårsøg", hex: "#E4E6CF" }, // S 1010-G70Y
    { name: "463 Urteblad", hex: "#D3D9B8" }, // S 1510-G60Y
    { name: "464 Stay green", hex: "#C1CE9D" }, // S 2010-G70Y
    { name: "465 Myk mose", hex: "#B3C88E" }, // S 2010-G80Y
    { name: "466 Nature", hex: "#A6C47E" }, // S 3010-G70Y
    { name: "467 Organic", hex: "#8BAE6B" }, // S 4010-G70Y
    { name: "468 Go green", hex: "#7B9B5D" }, // 3916-G73Y
    { name: "469 Dempet grønn", hex: "#687F50" }, // S 5010-G70Y
    { name: "470 Soft olive", hex: "#596F43" }, // S 6010-G70Y
    { name: "471 Flaskegrønn", hex: "#455F39" }, // 6711-G52Y

// Række 4
    { name: "472 Solbris", hex: "#F9F4E8" }, // S 0505-Y10R
    { name: "473 Silky signature", hex: "#F5EAD6" }, // S 0907-Y10R
    { name: "474 Satin touch", hex: "#EBD7C0" }, // S 1510-Y10R
    { name: "475 Sommervind", hex: "#E2C9AB" }, // S 2010-Y10R
    { name: "398 Ingefær", hex: "#D8B68F" }, // 2120-Y06R
    { name: "476 Solglød", hex: "#C9A176" }, // S 2030-Y10R
    { name: "477 Mustard", hex: "#B88A57" }, // S 3030-Y20R
    { name: "478 Dempet jord", hex: "#A97D4C" }, // 3713-Y18R
    { name: "479 Camel", hex: "#926845" }, // S 4020-Y20R
    { name: "480 Safran", hex: "#7D5733" }, // S 4030-Y20R
];

let currentSectionIndex = 0; // Start med den første sektion
const colorSections = [colorSection1, colorSection2, colorSection3];

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

    try {
        // Hent billeder fra API'et
        for (const image of imageData) {
            const response = await fetch(`https://malingdk-dhd0fxe9bxeffdem.scm.northeurope-01.azurewebsites.net/api/upload/images/search?name=${image.name}`);
            if (!response.ok) {
                throw new Error(`Kunne ikke hente billede: ${image.name}`);
            }
            const img = await response.json();
            image.src = img.data;  // Sørg for at src bliver opdateret korrekt
        }

        // HTML-struktur
        mainContentContainer.innerHTML = `
            <div id="main-content-container" style="margin: 0; padding: 0; width: 100%;">
                <div id="color-picker-section" class="flex flex-wrap md:flex-nowrap gap-6" style="margin: 0; padding: 0; width: 100%;">
                    <!-- Venstre kolonne -->
                    <div class="image-layout flex flex-col gap-4 w-full md:w-2/3">
                        <div id="main-image-box" class="relative" style="width: 100%; aspect-ratio: 3 / 2;">
                            <div class="absolute inset-0" id="stue-box" style="background-color: #ffffff;" data-name="Stue">
                                <img src="${imageData[0]?.src}" alt="Stue" class="rounded-md w-full h-full object-cover cursor-pointer" data-name="Stue">
                            </div>
                        </div>
                        <div class="flex gap-4">
                            ${imageData.slice(1).map((image) => `
                                <div class="relative" style="width: 48%; aspect-ratio: 3 / 2;">
                                    <div class="absolute inset-0" style="background-color: #ffffff;" data-name="${image.name}">
                                        <img src="${image.src}" alt="${image.name}" 
                                            class="rounded-md w-full h-full object-cover cursor-pointer" data-name="${image.name}">
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Højre kolonne (farvekort) -->
                    <div id="color-section-container" class="color-layout grid grid-cols-4 gap-4 w-full md:w-1/3">
                        ${renderColorSection(colorSections[currentSectionIndex])}
                    </div>
                </div>

                <!-- Navigationsknapper -->
                <div class="flex justify-between mt-4">
                    <button id="prev-section" aria-label="Forrige sektion" disabled>←</button>
                    <button id="next-section" aria-label="Næste sektion">→</button>
                </div>
            </div>
           
        `;
        updateNavigationButtons();

        // Event listeners til navigation
        document.getElementById('prev-section').addEventListener('click', () => changeSection(-1));
        document.getElementById('next-section').addEventListener('click', () => changeSection(1));


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

        updateNavigationButtons();
    } catch (error) {
        console.error(error);
        mainContentContainer.innerHTML = `<p class="text-red-500">Der opstod en fejl: ${error.message}</p>`;
    }
}

function renderColorSection(colors) {
    return colors.map(color => `
        <div class="color-option cursor-pointer rounded-md w-full h-12 shadow-md"
             style="background-color: ${color.hex};" data-color="${color.hex}">
        </div>
    `).join('');
}

// Funktion til at opdatere baggrundsfarver
function updateBackgroundColors(color) {
    const imageBoxes = document.querySelectorAll('.image-layout div > div');
    imageBoxes.forEach(box => {
        box.style.backgroundColor = color;
    });
}

// Funktion til at åbne modal med præcis billedstørrelse
function openFullscreenImage(imageSrc, backgroundColor) {
    const modal = document.createElement('div');
    modal.id = "image-modal";
    modal.className = "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50";
    modal.innerHTML = `
        <div class="relative" 
             style="background-color: ${backgroundColor}; display: inline-block; padding: 0; margin: 0; border-radius: 10px;">
            <img src="${imageSrc}" alt="Forstørret billede" 
                 style="display: block; max-width: 100vw; max-height: 100vh; object-fit: contain; margin: 0;">
            <button id="close-modal" 
                    class="absolute top-4 right-4 bg-gray-200 text-black py-1 px-4 rounded-md hover:bg-gray-300">
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

    // Luk modal ved klik uden for billedet
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });
}

// Funktion til at skifte sektion
function changeSection(direction) {
    currentSectionIndex += direction;

    // Opdater farvekortet
    const colorSectionContainer = document.getElementById('color-section-container');
    colorSectionContainer.innerHTML = renderColorSection(colorSections[currentSectionIndex]);

    // Genaktivér event listeners for farveændring
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            const color = event.target.getAttribute('data-color');
            updateBackgroundColors(color);
        });
    });

    updateNavigationButtons(); // Opdater navigationsknappernes tilstand
}

// Funktion til at opdatere navigationsknapper
function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-section');
    const nextButton = document.getElementById('next-section');

    // Første sektion
    if (currentSectionIndex === 0) {
        prevButton.disabled = true; // Deaktiver tilbage-knap
        nextButton.disabled = false; // Aktivér frem-knap
    }
    // Sidste sektion
    else if (currentSectionIndex === colorSections.length - 1) {
        prevButton.disabled = false; // Aktivér tilbage-knap
        nextButton.disabled = true; // Deaktiver frem-knap
    }
    // Mellemsektioner
    else {
        prevButton.disabled = false; // Aktivér tilbage-knap
        nextButton.disabled = false; // Aktivér frem-knap
    }
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
