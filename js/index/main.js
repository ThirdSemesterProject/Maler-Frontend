import { loadFrontPageContent } from "./frontPageContent.js";
import { renderAboutPage } from "./aboutPage.js";

// Funktion til at parse hash og hente route
function parseHash(hash) {
    const [route, queryString] = hash.split("?");
    const params = new URLSearchParams(queryString);
    return { route, params };
}

// Funktion til at navigere mellem "sider"
function navigate() {
    const hash = window.location.hash.substring(1) || 'home'; // Standard til forsiden
    const { route } = parseHash(hash);

    const mainContent = document.getElementById('main-content-container');
    mainContent.innerHTML = ''; // Rydder det gamle indhold

    switch (route) {
        case 'home':
            loadFrontPageContent(); // Indlæs forsiden
            break;
        case 'subCategory':
            loadSubCategory(); // Indlæs subCategory
            break;
        case 'products':
            loadProductPageContent(); // Indlæs produkter til en enkelte subCategory
            break;
        case 'about':
            renderAboutPage(); // Indlæs "Om os"-siden
            break;
        default:
            mainContent.innerHTML = `<p class="text-center text-red-500">Siden blev ikke fundet!</p>`;
    }
}

// Event listeners for navigation
document.addEventListener('DOMContentLoaded', () => {
    navigate(); // Indlæs initial side
    window.addEventListener('hashchange', navigate); // Lyt efter hashændringer
});



