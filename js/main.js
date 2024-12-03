import { renderFrontPageContent } from './frontPageContent.js';

window.addEventListener('hashchange', async () => {
    const route = window.location.hash.slice(1).split('?')[0];

    switch (route) {
        case '':
        case 'home':
            await renderFrontPageContent();
            break;
        case 'subCategory':
            renderSubCategoryPage();
            break;
        case 'product':
            renderProductPage();
            break;
        default:
            const app = document.getElementById('app');
            app.innerHTML = `<h1>404 - Siden blev ikke fundet</h1>`;
            break;
    }
});

// Indlæs forsiden som standard
(async function initialize() {
    const initialRoute = window.location.hash.slice(1).split('?')[0] || 'home';
    if (initialRoute === '' || initialRoute === 'home') {
        await renderFrontPageContent();
    }
})();
