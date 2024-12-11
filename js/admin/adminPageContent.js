export function loadAdminDashboard(orders) {
    const categories = {
        MODTAGET: "Modtagede",
        IGANGVÆRENDE: "Igangværende",
        AFSLUTTET: "Afsluttede",
    };

    const content = `
        <div class="flex">
            <main class="p-8">
                <h1 class="text-2xl font-bold text-gray-900 mb-6">Ordre Overblik</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${Object.entries(categories)
        .map(
            ([status, title]) => `
                                <div class="bg-white shadow-lg rounded-lg p-6">
                                    <h2 class="text-lg font-bold text-gray-800 mb-2">${title}</h2>
                                    <div id="${status.toLowerCase()}-orders">
                                        ${orders
                .filter((order) => order.orderStatus === status)
                .map((order) => `
                    <div class="p-4 border rounded mb-4">
                        <p><strong>Navn:</strong> ${order.customerName}</p>
                        <p><strong>Ordredato:</strong> ${order.orderDate}</p>
                        <p><strong>Status:</strong> ${order.orderStatus}</p>
                       <button class="bg-blue-500 text-white py-1 px-2 rounded edit-btn" data-id="${order.orderId}" data-status="${order.orderStatus}">Rediger Status</button>
                    </div>`
                )
                .join("")}
                     </div>
                </div>`
        )
        .join("")}
                </div>
            </main>
        </div>
    `;

    const container = document.getElementById("main-content-container");
    if (container) {
        container.innerHTML = content;

        // Attach click listeners for edit buttons
        const editButtons = document.querySelectorAll(".edit-btn");
        editButtons.forEach((btn) =>
            btn.addEventListener("click", (e) => {
                const id = btn.dataset.id;
                const status = btn.dataset.status;
                showEditForm(id, status);
            })
        );
    }
}

function showEditForm(orderId, currentStatus) {
    const formHTML = `
        <section class="p-8">
            <h2 class="text-2xl font-bold mb-4">Edit Order Status</h2>
            <form id="edit-order-form">
                <input type="hidden" id="order-id" value="${orderId}">
                <div class="mb-4">
                    <label class="block text-sm font-bold mb-2" for="status">Status</label>
                    <select id="order-status" class="border p-2 rounded w-full">
                        <option value="MODTAGET" ${currentStatus === "MODTAGET" ? "selected" : ""}>Modtagede</option>
                        <option value="IGANGVÆRENDE" ${currentStatus === "IGANGVÆRENDE" ? "selected" : ""}>Igangværende</option>
                        <option value="AFSLUTTET" ${currentStatus === "AFSLUTTET" ? "selected" : ""}>Afsluttede</option>
                    </select>
                </div>
                <button type="submit" class="bg-green-500 text-white py-2 px-4 rounded">Save</button>
            </form>
        </section>
    `;

    const container = document.getElementById("main-content-container");
    container.innerHTML = formHTML;

    document.getElementById("edit-order-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const newStatus = document.getElementById("order-status").value;

        await updateOrderStatus(orderId, newStatus);
        await loadOrdersAndDashboard();
    });
}

async function updateOrderStatus(orderId, newStatus) {
    try {
        const response = await fetch(`http://localhost:8080/api/orders/${orderId}/status`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus }),
        });

        if (!response.ok) {
            throw new Error("Failed to update order status");
        }
    } catch (error) {
        console.error(error.message);
    }
}

async function loadOrdersAndDashboard() {
    try {
        const response = await fetch("http://localhost:8080/api/orders/getAllOrders");
        const orders = await response.json();
        // kunne smide den i local storage her
        loadAdminDashboard(orders);
        loadAdminSidebar();
    } catch (error) {
        console.error("Failed to fetch orders:", error.message);
    }
}

document.addEventListener("DOMContentLoaded", loadOrdersAndDashboard);

export function loadAdminSidebar() {
    const sidebarContent = `
        <div style="display: flex; height: 100vh; overflow: hidden">
    <!-- Sidebar -->
    <aside class="w-36 bg-white shadow-md h-full py-8 flex flex-col items-center">
        
        <a href="/admin/overblik" class="mb-8 text-center group">
            <div
                class="w-24 h-24 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-300">
                <span class="text-gray-800 font-bold text-sm">Overblik</span>
            </div>
        </a>

        <a href="#products" class="mb-8 text-center group" onclick="showProductManagement()">
            <div
                class="w-24 h-24 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-300">
                <span class="text-gray-800 font-bold text-sm">Tilføj produkter</span>
            </div>
        </a>

        <!-- Upload -->
        <a href="#upload" class="text-center group" id="upload-link">
            <div class="w-24 h-24 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-300">
                <span class="text-gray-800 font-bold text-sm">Upload</span>
            </div>
        </a>
    </aside>
</div>
    `;

    // Find eller opret en container til sidebaren
    const sidebarContainer = document.getElementById("sidebar-container");
    if (sidebarContainer) {
        sidebarContainer.innerHTML = sidebarContent;

        // Tilføj event listener for upload-sektionen
        const uploadLink = document.getElementById('upload-link');
        if (uploadLink) {
            uploadLink.addEventListener('click', (event) => {
                event.preventDefault();
                showUploadSection();
            });
        }
    } else {
        console.error("Container #sidebar-container ikke fundet.");
    }
}

export function loadContent(sectionHTML) {
    const container = document.getElementById("main-content-container");
    if (container) {
        container.innerHTML = sectionHTML;
    } else {
        console.error("Container #main-content-container ikke fundet.");
    }
}
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

    async handleFile(file, imageName) {
        const messageDiv = document.getElementById('message');
        const startTime = performance.now();
        try {
            const base64 = await this.convertBase64(file);
            const endTime = performance.now();

            this.base64Files.set(imageName, base64);
            messageDiv.innerHTML += `<div>Encoded ${imageName} (${file.name}) in ${(endTime - startTime).toFixed(2)} ms</div>`;

            // Indikator for uploadstatus
            messageDiv.innerHTML += `<div>Uploading ${imageName}...</div>`;

            // Send to server
            await this.uploadToServer(base64, imageName);
        } catch (error) {
            messageDiv.innerHTML += `<div>Error encoding ${file.name}: ${error.message}</div>`;
        }
    }

    async uploadToServer(base64Data, imageName) {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 60000);
        try {
            const response = await fetch('http://localhost:8080/api/upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: imageName, data: base64Data }),
                signal: controller.signal, // Timeout signal
            });

            clearTimeout(timeout); // Ryd timeout

            if (response.ok) {
                document.getElementById('message').innerHTML += `<div>${imageName} uploaded successfully.</div>`;
            } else {
                const errorText = await response.text();
                document.getElementById('message').innerHTML += `<div>Failed to upload ${imageName}: ${errorText}</div>`;
                console.error(`Failed to upload ${imageName}: ${errorText}`);
            }
        } catch (error) {
            clearTimeout(timeout); // Ryd timeout
            document.getElementById('message').innerHTML += `<div>Error uploading ${imageName}: ${error.message}</div>`;
        }
    }
}

const fileHandler = new FileHandler();

document.getElementById('uploadButton').addEventListener('click', () => {
    const files = document.getElementById('imageInput').files;
    const imageName = document.getElementById('imageNameInput').value.trim();

    if (files.length === 0) {
        alert('Please select a file to upload.');
    } else if (!imageName) {
        alert('Please enter a name for the image.');
    } else {
        for (const file of files) {
            fileHandler.handleFile(file, imageName);
        }
    }
});

function showUploadSection() {

    const uploadSectionHTML = `
        <section class="p-8">
            <h1 class="text-2xl font-bold mb-6">Upload Billeder</h1>
            <div class="bg-white shadow-lg rounded-lg p-6">
                <h5 class="text-lg font-bold mb-2">Vælg en fil</h5>
                <input type="file" id="imageInput" class="w-full p-2 border rounded mb-4" accept="image/*">
                <input type="text" id="imageNameInput" class="w-full p-2 border rounded mb-4" placeholder="Indtast billedets navn">
                <button id="uploadButton" class="bg-blue-500 text-white py-2 px-4 rounded">Upload</button>
                <div id="message" class="mt-4 p-4 border border-gray-300 rounded bg-gray-50 overflow-y-auto" style="height: 150px;"></div>
            </div>
        </section>
    `;

    const container = document.getElementById("main-content-container");
    if (container) {
        container.innerHTML = uploadSectionHTML;

        const fileHandler = new FileHandler();
        document.getElementById('uploadButton').addEventListener('click', () => {
            const files = document.getElementById('imageInput').files;
            const imageName = document.getElementById('imageNameInput').value.trim();
            if (files.length === 0) {
                alert('Vælg en fil at uploade.');
            } else if (!imageName) {
                alert('Indtast et navn til billedet.');
            } else {
                for (const file of files) {
                    fileHandler.handleFile(file, imageName);
                }
            }
        });
    } else {
        console.error("Container #main-content-container ikke fundet.");
    }
}