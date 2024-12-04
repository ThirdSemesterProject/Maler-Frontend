import { loadFrontPageContent } from "./frontPageContent.js";
import {loadAdminDashboard} from "./adminPageContent";

// Funktion til at parse hash og hente route
function parseHash(hash) {
    const [route, queryString] = hash.split('?');
    const params = new URLSearchParams(queryString);
    return { route, params };
}

// Funktion til at navigere mellem "sider"
function navigate() {
    const hash = window.location.hash.substring(1) || 'home'; // Standard til forsiden
    const { route } = parseHash(hash);

    const app = document.getElementById('app'); // Main-indhold container
    app.innerHTML = ''; // Rydder det gamle indhold

    switch (route) {
        case 'home':
            loadAdminDashboard(); // Indlæs forsiden
            break;
        case 'subCategory':
            loadSubCategory(); // Indlæs subCategory
            break;
        case 'products':
            loadProductPageContent(); // Indlæs produkter til en enkelte subCategory
            break;

        default:
            app.innerHTML = `<p class="text-center text-red-500">Siden blev ikke fundet!</p>`;
    }
}

// Event listeners for navigation
document.addEventListener('DOMContentLoaded', () => {
    navigate(); // Indlæs initial side
    window.addEventListener('hashchange', navigate); // Lyt efter hashændringer
});