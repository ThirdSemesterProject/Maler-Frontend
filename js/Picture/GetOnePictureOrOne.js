// Dynamisk HTML Generering
document.body.innerHTML = `
    <header>
        <div class="p-5 text-center bg-light">
            <h1 class="mb-3">Hent billeder</h1>
            <p>Indtast et ID for at hente et specifikt billede, eller klik på knappen for at hente alle billeder.</p>
        </div>
    </header>

    <div class="container mt-4">
        <div class="card mb-3">
            <div class="card-body">
                <input type="number" id="imageIdInput" class="form-control" placeholder="Indtast billede-ID" />
                <button id="fetchImageButton" class="btn btn-primary mt-3">Hent billede</button>
                <button id="fetchAllImagesButton" class="btn btn-secondary mt-3">Hent alle billeder</button>
            </div>
        </div>
        <div id="imageContainer" class="mt-4"></div>
    </div>
`;

// Hent et specifikt billede baseret på ID
async function fetchImageById() {
    const id = document.getElementById('imageIdInput').value;
    if (!id) {
        alert('Indtast venligst et ID');
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/api/upload/${id}`);
        if (response.ok) {
            const image = await response.json();
            displaySingleImage(image);
        } else {
            alert('Billede ikke fundet.');
        }
    } catch (error) {
        console.error('Fejl ved hentning af billede:', error);
        alert('Noget gik galt under hentning af billedet.');
    }
}

// Hent alle billeder
async function fetchAllImages() {
    try {
        const response = await fetch('http://localhost:8080/api/upload');
        if (response.ok) {
            const images = await response.json();
            displayImages(images);
        } else {
            alert('Ingen billeder fundet.');
        }
    } catch (error) {
        console.error('Fejl ved hentning af billeder:', error);
        alert('Noget gik galt under hentning af billeder.');
    }
}

// Visning af ét billede
function displaySingleImage(image) {
    const container = document.getElementById('imageContainer');
    container.innerHTML = ''; // Ryd eksisterende indhold

    const imgElement = document.createElement('img');
    imgElement.src = image.data; // Base64-data
    imgElement.alt = image.name;
    imgElement.style.width = '200px';
    imgElement.style.display = 'block';
    imgElement.style.marginBottom = '10px';

    const nameElement = document.createElement('p');
    nameElement.textContent = `Name: ${image.name}`;

    container.appendChild(imgElement);
    container.appendChild(nameElement);
}

// Visning af flere billeder
function displayImages(images) {
    const container = document.getElementById('imageContainer');
    container.innerHTML = ''; // Ryd eksisterende indhold

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.data; // Base64-data
        imgElement.alt = image.name;
        imgElement.style.width = '200px';
        imgElement.style.margin = '10px';

        const nameElement = document.createElement('p');
        nameElement.textContent = `Name: ${image.name}`;

        container.appendChild(imgElement);
        container.appendChild(nameElement);
    });
}

// Tilføj event listeners til knapperne
document.getElementById('fetchImageButton').addEventListener('click', fetchImageById);
document.getElementById('fetchAllImagesButton').addEventListener('click', fetchAllImages);

export async function fetchImageByName(name) {
    try {
        const response = await fetch(`http://localhost:8080/api/upload/images/search?name=${encodeURIComponent(name)}`);
        if (!response.ok) {
            throw new Error(`Billede ikke fundet for navn: ${name}`);
        }
        const image = await response.json();
        return image.data || image.imageUrl; // Returner billedets URL eller Base64-data
    } catch (error) {
        console.error("Fejl ved hentning af billede:", error);
        return null; // Returner null ved fejl
    }
}