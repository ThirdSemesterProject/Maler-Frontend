function createHeroSection() {
    return '<!-- Hero Section -->\n' +
        '<section class="relative bg-cover bg-center h-[400px]" style="background-image: url(\'../images/forsideBilledeIkkeVores.png\');">\n' +
        '    <div class="absolute inset-0 bg-white opacity-70"></div>\n' +
        '    <div class="relative z-10 text-center flex items-center justify-center h-full">\n' +
        '        <div>\n' +
        '            <h1 class="text-4xl font-bold tracking-wide text-gray-900">Spar op til 50% på vores mest populære produkter!</h1>\n' +
        '            <p class="mt-4 text-gray-700">Gå ikke glip af de fantastiske tilbud - kun i en begrænset periode.</p>\n' +
        '            <button class="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full mt-6">Shop tilbud</button>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</section>'
}

// Append the Product Modal to the body
(function initializeHeroSection() {
    const heroSection = createHeroSection();
    document.body.insertAdjacentHTML('beforeend', heroSection);
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