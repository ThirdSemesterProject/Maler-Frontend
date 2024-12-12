// Funktion til at hente og sætte Hero-billedet
async function loadHeroImage() {
    console.log("loadHeroImage called"); // Debugging
    try {
        const response = await fetch('https://malingdk-dhd0fxe9bxeffdem.northeurope-01.azurewebsites.net/api/upload/hero');
        if (response.ok) {
            const image = await response.json();
            console.log("Fetched Hero Image:", image); // Debugging
            const heroSection = document.getElementById('heroSection');
            if (image.data) {
                heroSection.style.backgroundImage = `url('${image.data}')`; // Base64
            } else if (image.imageUrl) {
                heroSection.style.backgroundImage = `url('${image.imageUrl}')`; // URL
            } else {
                console.warn('No valid image data returned.');
                setFallbackImage();
            }
        } else {
            console.warn('Hero image not found.');
            setFallbackImage();
        }
    } catch (error) {
        console.error('Error fetching Hero image:', error);
        setFallbackImage();
    }
}

// Fallback funktion
function setFallbackImage() {
    const heroSection = document.getElementById('heroSection');
    heroSection.style.backgroundImage = `url('../images/default-hero.jpg')`; // Din fallback-URL
}

// Registrér event listener
document.addEventListener('DOMContentLoaded', loadHeroImage);
