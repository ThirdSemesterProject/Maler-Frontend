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

// Tilføj Hero-sektionen
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
        '            <h3 class="text-lg font-bold">Hurtig levering</h3>\n' +
        '            <p class="text-gray-600">1-4 hverdage</p>\n' +
        '        </div>\n' +
        '        <div class="text-center">\n' +
        '            <h3 class="text-lg font-bold">Prisgaranti</h3>\n' +
        '            <p class="text-gray-600">På alle vores varer</p>\n' +
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
        '<section class="container mx-auto mt-12 mb-12">\n' +
        '    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">\n' +
        '\n' +
        '        <!-- Dit online farveunivers -->\n' +
        '        <div class="text-center">\n' +
        '            <a href="/farveunivers" class="block">\n' +
        '                <img src="/images/farveuniversKategori.png" alt="Dit online farveunivers" class="rounded-md shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300">\n' +
        '            </a>\n' +
        '            <p class="mt-4 text-lg font-semibold text-gray-800">Dit online farveunivers</p>\n' +
        '        </div>\n' +
        '\n' +
        '        <!-- Indendørs maling -->\n' +
        '        <div class="text-center">\n' +
        '            <a href="/indendørs-maling" class="block">\n' +
        '                <img src="/images/indendørsKategori.png" alt="Indendørs maling" class="rounded-md shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300">\n' +
        '            </a>\n' +
        '            <p class="mt-4 text-lg font-semibold text-gray-800">Indendørs maling</p>\n' +
        '        </div>\n' +
        '\n' +
        '        <!-- Udendørs maling -->\n' +
        '        <div class="text-center">\n' +
        '            <a href="/udendørs-maling" class="block">\n' +
        '                <img src="/images/udendørsKategori.png" alt="Udendørs maling" class="rounded-md shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300">\n' +
        '            </a>\n' +
        '            <p class="mt-4 text-lg font-semibold text-gray-800">Udendørs maling</p>\n' +
        '        </div>\n' +
        '\n' +
        '        <!-- Tilbehør -->\n' +
        '        <div class="text-center">\n' +
        '            <a href="/tilbehør" class="block">\n' +
        '                <img src="/images/tilbehørKategori.png" alt="Tilbehør" class="rounded-md shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300">\n' +
        '\n' +
        '            </a>\n' +
        '            <p class="mt-4 text-lg font-semibold text-gray-800">Tilbehør</p>\n' +
        '        </div>\n' +
        '        <div class="text-center">\n' +
        '            <a href="/værktøj" class="block">\n' +
        '                <img src="/images/toolsKategori.png" alt="Værktøj" class="rounded-md shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300">\n' +
        '            </a>\n' +
        '            <p class="mt-4 text-lg font-semibold text-gray-800">Værktøj</p>\n' +
        '        </div>\n' +
        '\n' +
        '        <!-- Isenkram -->\n' +
        '        <div class="text-center">\n' +
        '            <a href="/isenkram" class="block">\n' +
        '                <img src="/images/isenkramKategori.png" alt="Isenkram" class="rounded-md shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300">\n' +
        '            </a>\n' +
        '            <p class="mt-4 text-lg font-semibold text-gray-800">Isenkram</p>\n' +
        '        </div>\n' +
        '\n' +
        '        <!-- Rengøring -->\n' +
        '        <div class="text-center">\n' +
        '            <a href="/rengøring" class="block">\n' +
        '                <img src="/images/rengøringKategori.png" alt="Rengøring" class="rounded-md shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300">\n' +
        '            </a>\n' +
        '            <p class="mt-4 text-lg font-semibold text-gray-800">Rengøring</p>\n' +
        '        </div>\n' +
        '\n' +
        '\n' +
        '        <!-- Dit kreative univers -->\n' +
        '        <div class="text-center">\n' +
        '            <a href="/kreativt-univers" class="block">\n' +
        '                <img src="/images/kreativtUniversKategori.png" alt="Dit kreative univers" class="rounded-md shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300">\n' +
        '\n' +
        '            </a>\n' +
        '            <p class="mt-4 text-lg font-semibold text-gray-800">Dit kreative univers</p>\n' +
        '        </div>\n' +
        '        <!-- Tilføj de øvrige kategorier -->\n' +
        '    </div>\n' +
        '</section>'
}

// Append the Product Modal to the body
(function initializeCategorySection() {
    const categorySection = createCategorySection();
    document.body.insertAdjacentHTML('beforeend', categorySection);
})();

// Event Listeners for Modal
document.addEventListener('DOMContentLoaded', () => {
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
            const response = await fetch('http://localhost:8080/api/upload');
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
        modalImageContainer.innerHTML = ''; // Ryd eksisterende indhold
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.data; // Base64-data
            imgElement.alt = image.name;
            imgElement.className = 'w-full h-24 rounded shadow-md cursor-pointer';
            imgElement.addEventListener('click', () => selectImageForHero(image.data));
            modalImageContainer.appendChild(imgElement);
        });
    }

    // Vælg billede og opdater Hero Sektion
    function selectImageForHero(imageData) {
        const heroSection = document.getElementById('heroSection');
        heroSection.style.backgroundImage = `url('${imageData}')`;

        // Send valget til backend
        saveSelectedImage(imageData);

        // Luk modal
        modal.classList.add('hidden');
    }
    async function saveSelectedImage(imageId) {
        try {
            const response = await fetch('http://localhost:8080/api/upload/hero-new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(imageId), // Send kun ID som rå JSON-værdi
            });

            if (!response.ok) {
                throw new Error('Kunne ikke gemme billedet.');
            }

            alert('Hero-billedet er gemt!');
        } catch (error) {
            console.error('Fejl ved gemning:', error);
            alert('Noget gik galt ved gemning af billedet.');
        }
    }

    async function loadHeroImage() {
        try {
            const response = await fetch('http://localhost:8080/api/upload/hero');
            if (response.ok) {
                const data = await response.json();
                const heroSection = document.getElementById('heroSection');
                heroSection.style.backgroundImage = `url('${image.data}')`;
            } else {
                console.warn('Intet Hero-billede fundet på serveren.');
            }
        } catch (error) {
            console.error('Fejl ved hentning af Hero-billede:', error);
        }
    }

// Kald funktionen, når siden indlæses
    document.addEventListener('DOMContentLoaded', loadHeroImage);

});