function createHeroSection() {
    return '<!-- Hero Section -->\n' +
        '<!-- Hero Section -->\n' +
        '<section id="heroSection" class="relative bg-cover bg-center h-[400px]" style="background-image: url(\'../images/forsideBilledeIkkeVores.png\');">\n' +
        '    <div class="absolute inset-0 bg-white opacity-70"></div>\n' +
        '    <div class="relative z-10 text-center flex items-center justify-center h-full">\n' +
        '        <div>\n' +
        '            <h1 class="text-4xl font-bold tracking-wide text-gray-900">Spar op til 50% på vores mest populære produkter!</h1>\n' +
        '            <p class="mt-4 text-gray-700">Gå ikke glip af de fantastiske tilbud - kun i en begrænset periode.</p>\n' +
        '            <button id="openImageSelector" class="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full mt-6">Vælg billede</button>\n' +
        '            <button id="tilbud" class="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full mt-6">Find dine tilbud her</button>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</section>';
}

// Modal til billedvalg
function createImageSelectorModal() {
    return '<!-- Modal -->\n' +
        '<div id="imageSelectionModal" class="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center z-50">\n' +
        '    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">\n' +
        '        <div class="flex justify-between items-center mb-4">\n' +
        '            <h2 class="text-xl font-bold">Vælg et billede</h2>\n' +
        '            <button id="closeModal" class="text-gray-500 hover:text-gray-700">&times;</button>\n' +
        '        </div>\n' +
        '        <div id="modalImageContainer" class="grid grid-cols-2 sm:grid-cols-3 gap-4"></div>\n' +
        '    </div>\n' +
        '</div>';
}

// Append the Product Modal to the body
(function initializeHeroSection() {
    const heroSection = createHeroSection();
    document.body.insertAdjacentHTML('beforeend', heroSection);
})();

// Tilføj Modal til DOM
(function initializeModal() {
    const modal = createImageSelectorModal();
    document.body.insertAdjacentHTML('beforeend', modal);
})();

function createInfoSection() {
    return '<!-- Info Sektion -->\n' +
        '<section class="bg-white py-8">\n' +
        '    <div class="container mx-auto flex justify-around">\n' +
        '        <div class="text-center">\n' +
        '            <h3 class="text-lg font-bold">GRØN - BILLIG - PROFESSIONEL</h3>\n' +
        '            <p class="text-gray-600">Den billigste vej til den professionelle løsning med miljø rigtige produkter</p>\n' +
        '        </div>\n' +
        '        <div class="text-center">\n' +
        '            <h3 class="text-lg font-bold">Hurtig levering</h3>\n' +
        '            <p class="text-gray-600">1-4 hverdage</p>\n' +
        '        </div>\n' +
        '        <div class="text-center">\n' +
        '            <h3 class="text-lg font-bold">Gratis fragt</h3>\n' +
        '            <p class="text-gray-600">Ved køb for min. 499,-</p>\n' +
        '        </div>\n' +
        '        <div class="text-center">\n' +
        '            <h3 class="text-lg font-bold">Trustpilot</h3>\n' +
        '            <p class="text-gray-600">Fremragende - 4.7 ud af 5 stjerner</p>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</section>'
}

// Append the Product Modal to the body
(function initializeInfoSection() {
    const infoSection = createInfoSection();
    document.body.insertAdjacentHTML('beforeend', infoSection);
})();

function createCategorySection() {
    return '<!-- Kategorier -->\n' +
        '<section id="categories-section" class="container mx-auto mt-12 mb-12 px-6">'
    '<!-- Indhold genereres via JavaScript -->'
    ' </section>'
}

// Append the Product Modal to the body
(function initializeCategorySection() {
    const categorySection = createCategorySection();
    document.body.insertAdjacentHTML('beforeend', categorySection);
})();

// Tilføj Hero-sektion og modal til DOM
document.addEventListener('DOMContentLoaded', () => {
    // Tjek, om Hero-sektionen allerede eksisterer
    if (!document.getElementById('heroSection')) {
        document.body.insertAdjacentHTML('beforeend', createHeroSection());
    }

    // Tjek, om modal allerede eksisterer
    if (!document.getElementById('imageSelectionModal')) {
        document.body.insertAdjacentHTML('beforeend', createImageSelectorModal());
    }

    // Initialiser event listeners og hent Hero-billede
    initializeEventListeners();
    fetchAndUpdateHeroImage();
});

// Initialiser event listeners
function initializeEventListeners() {
    const modal = document.getElementById('imageSelectionModal');
    const closeModalBtn = document.getElementById('closeModal');
    const openModalBtn = document.getElementById('openImageSelector');
    const modalImageContainer = document.getElementById('modalImageContainer');

    // Åbn modal
    openModalBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        fetchAllImagesForModal();
    });

    // Luk modal
    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Hent billeder til modal
    async function fetchAllImagesForModal() {
        try {
            const response = await fetch('https://malingdk-dhd0fxe9bxeffdem.scm.northeurope-01.azurewebsites.net/api/upload');
            if (response.ok) {
                const images = await response.json();
                displayImagesInModal(images);
            } else {
                alert('Ingen billeder fundet.');
            }
        } catch (error) {
            console.error('Fejl ved hentning af billeder:', error);
        }
    }

    // Vis billeder i modal
    function displayImagesInModal(images) {
        modalImageContainer.innerHTML = '';
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.data; // Base64-data
            imgElement.alt = image.name;
            imgElement.className = 'w-full h-24 rounded shadow-md cursor-pointer';
            imgElement.addEventListener('click', () => selectImageForHero(image.id, image.data));
            modalImageContainer.appendChild(imgElement);
        });
    }

    // Vælg billede og opdater Hero-sektion
    function selectImageForHero(imageId, imageData) {
        updateHeroSectionBackground(imageData); // Opdater UI
        saveSelectedImageToBackend(imageId);    // Opdater backend
        modal.classList.add('hidden');          // Luk modal
    }
}

// Opdater Hero-sektionens baggrund
function updateHeroSectionBackground(imageData) {
    const heroSection = document.getElementById('heroSection');
    heroSection.style.backgroundImage = `url('${imageData}')`;
}

// Send valgt billede til backend
async function saveSelectedImageToBackend(imageId) {
    try {
        const response = await fetch('https://malingdk-dhd0fxe9bxeffdem.scm.northeurope-01.azurewebsites.net/api/upload/hero-new', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(imageId),
        });

        if (!response.ok) {
            throw new Error('Kunne ikke opdatere Hero-billedet.');
        }
        alert('Hero-billedet er opdateret!');
    } catch (error) {
        console.error('Fejl ved opdatering:', error);
        alert('Noget gik galt ved opdatering af billedet.');
    }
}

// Hent aktuelt Hero-billede og opdater UI
async function fetchAndUpdateHeroImage() {
    try {
        const response = await fetch('https://malingdk-dhd0fxe9bxeffdem.scm.northeurope-01.azurewebsites.net/api/upload/hero');
        if (response.ok) {
            const heroImage = await response.json();
            updateHeroSectionBackground(heroImage.data);
        } else {
            console.warn('Ingen Hero-billede fundet, bruger fallback.');
        }
    } catch (error) {
        console.error('Fejl ved hentning af Hero-billede:', error);
    }
}