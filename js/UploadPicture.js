// Dynamisk HTML Generering
document.body.innerHTML = `
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-white"></nav>
        <div class="p-5 text-center bg-light">
            <h1 class="mb-3">Her kan du vælge et billede, give det et navn og tilknytte et hero navn</h1>
        </div>
    </header>

    <div class="container mt-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Vælg fil</h5>
                <input type="file" id="imageInput" class="form-control" accept="image/*" />
                <input type="text" id="imageNameInput" class="form-control mt-2" placeholder="Indtast billedets navn" />
                <input type="text" id="heroNameInput" class="form-control mt-2" placeholder="Indtast hero navn" />
                <button id="uploadButton" class="btn btn-primary mt-3">Upload</button>
                <div class="mt-3" id="message" style="height: 150px; overflow-y: auto; border: 1px solid #ccc; padding: 10px;"></div>
            </div>
        </div>
    </div>
`;

// FileHandler Class
class FileHandler {
    constructor() {
        this.base64Files = new Map();
    }

    convertBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => resolve(fileReader.result);
            fileReader.onerror = (error) => reject(error);
        });
    }

    async handleFile(file, imageName, heroName) {
        const messageDiv = document.getElementById('message');
        const startTime = performance.now();
        try {
            const base64 = await this.convertBase64(file);
            const endTime = performance.now();

            this.base64Files.set(imageName, base64);
            messageDiv.innerHTML += `<div>Encoded ${imageName} (${file.name}) in ${(endTime - startTime).toFixed(2)} ms</div>`;

            // Send to server
            await this.uploadToServer(base64, imageName, heroName);
        } catch (error) {
            messageDiv.innerHTML += `<div>Error encoding ${file.name}: ${error.message}</div>`;
        }
    }

    async uploadToServer(base64Data, imageName, heroName) {
        try {
            const response = await fetch('http://localhost:8080/api/upload', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: imageName,
                    data: base64Data,
                    heroName: heroName // Inkluder heroName i data
                }),
            });

            if (response.ok) {
                document.getElementById('message').innerHTML += `<div>${imageName} uploaded successfully with Hero Name "${heroName}".</div>`;
            } else {
                document.getElementById('message').innerHTML += `<div>Failed to upload ${imageName}.</div>`;
            }
        } catch (error) {
            document.getElementById('message').innerHTML += `<div>Error uploading ${imageName}: ${error.message}</div>`;
        }
    }
}

// Event Listeners
const fileHandler = new FileHandler();

document.getElementById('uploadButton').addEventListener('click', () => {
    const files = document.getElementById('imageInput').files;
    const imageName = document.getElementById('imageNameInput').value.trim();
    const heroName = document.getElementById('heroNameInput').value.trim();

    if (files.length === 0) {
        alert('Please select a file to upload.');
    } else if (!imageName) {
        alert('Please enter a name for the image.');
    } else if (!heroName) {
        alert('Please enter a hero name.');
    } else {
        for (const file of files) {
            fileHandler.handleFile(file, imageName, heroName);
        }
    }
});
