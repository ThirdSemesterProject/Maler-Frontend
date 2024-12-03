// ADMIN REDIGERE HEROSECTION

document.getElementById('hero-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Forhindre siden i at genindlæse ved formularindsendelse

    // Hent værdier fra formularfelterne
    const title = document.getElementById('hero-title').value;
    const subtitle = document.getElementById('hero-subtitle').value;
    const image = document.getElementById('hero-image').value;

    try {
        // Send en PUT-forespørgsel til backend for at opdatere Hero-data
        const response = await fetch('/api/hero', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, subtitle, image }) // Send data som JSON
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        alert('Hero-sektionen er opdateret!'); // Vis en succesmeddelelse
    } catch (error) {
        console.error('Kunne ikke opdatere sektionen:', error);
        alert('Der opstod en fejl ved opdatering af sektionen.');
    }
});
