// Hent Hero-data fra backend
async function fetchHeroImageByName(heroName) {
    try {
        const response = await fetch(`http://localhost:8080/api/upload/findByHeroName?name=${encodeURIComponent(heroName)}`);
        if (response.ok) {
            const base64Image = await response.text();
            console.log("Fetched Hero Image:", base64Image);
            return base64Image;
        } else {
            console.error(`Billede med navnet "${name}" blev ikke fundet.`);
            return null;
        }
    } catch (error) {
        console.error("Fejl ved hentning af billedet:", error);
        return null;
    }
}



// Hent kategorier fra backend
async function fetchCategories() {
    try {
        const response = await fetch('/api/categories'); // API-endpoint for kategorier
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json(); // Returnér kategoridata som JSON
    } catch (error) {
        console.error("Kunne ikke hente kategorier:", error);
        return [];
    }
}

export async function renderFrontPageContent() {
    const app = document.getElementById('app');

    // Hent Hero-data
    const heroData = await fetchHeroData();

    // Brug standardværdier, hvis Hero-data ikke kan hentes
    const heroTitle = heroData?.title || "Spar op til 50% på vores mest populære produkter!";
    const heroSubtitle = heroData?.subtitle || "Gå ikke glip af de fantastiske tilbud - kun i en begrænset periode.";
    const heroImage = heroData?.image || "/images/default-hero-image.png";

    /*
    const heroImage = heroData?.image || null;
const heroBackgroundStyle = heroImage
    ? `background-image: url('${heroImage}');`
    : `background-color: #f3f4f6;`; // Neutral grå baggrund
     */


    // Hero Section
    const heroSection = `
        <section class="relative bg-cover bg-center h-[400px]" style="background-image: url('${heroImage}');">
            <div class="absolute inset-0 bg-white opacity-70"></div>
            <div class="relative z-10 text-center flex items-center justify-center h-full">
                <div>
                    <h1 class="text-4xl font-bold tracking-wide text-gray-900">${heroTitle}</h1>
                    <p class="mt-4 text-gray-700">${heroSubtitle}</p>
                    <button class="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full mt-6">Shop tilbud</button>
                </div>
            </div>
        </section>
    `;

    // Info Section
    const infoSection = `
        <section class="bg-white py-8">
            <div class="container mx-auto flex justify-around">
                <div class="text-center">
                    <h3 class="text-lg font-bold">Hurtig levering</h3>
                    <p class="text-gray-600">1-4 hverdage</p>
                </div>
                <div class="text-center">
                    <h3 class="text-lg font-bold">Prisgaranti</h3>
                    <p class="text-gray-600">På alle vores varer</p>
                </div>
                <div class="text-center">
                    <h3 class="text-lg font-bold">Gratis fragt</h3>
                    <p class="text-gray-600">Ved køb for min. 499,-</p>
                </div>
                <div class="text-center">
                    <h3 class="text-lg font-bold">Trustpilot</h3>
                    <p class="text-gray-600">Fremragende - 4.7 ud af 5 stjerner</p>
                </div>
            </div>
        </section>
    `;

    // Hent kategorier
    const categories = await fetchCategories();

    // Dynamisk generering af kategorier
    const categoriesHTML = categories.map(category => `
        <div class="text-center">
            <a href="#subCategory?name=${category.name}" class="block">
                <img src="${category.image}" alt="${category.name}" 
                    class="rounded-md shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
            </a>
            <p class="mt-4 text-lg font-semibold text-gray-800">${category.name}</p>
        </div>
    `).join('');

    // Kombiner alt indhold og indsæt det i app-elementet
    app.innerHTML = `
        ${heroSection}
        ${infoSection}
        <!-- Kategorier -->
        <section class="container mx-auto mt-12 mb-12">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                ${categoriesHTML}
            </div>
        </section>
    `;
}