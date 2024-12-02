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