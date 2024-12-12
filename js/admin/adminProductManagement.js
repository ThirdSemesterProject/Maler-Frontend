function createProductModal() {
    return '            <!-- Modal start -->\n' +
    '            <div id="login-modal" class="hidden fixed z-50 inset-0 items-center justify-center bg-gray-800 bg-opacity-50">\n' +
    '                <div class="bg-white w-96 rounded-lg shadow-lg">\n' +
    '                    <div class="border-b px-4 py-2 flex justify-between items-center">\n' +
    '                        <h3 id="modal-title" class="text-lg font-semibold text-gray-800">Login</h3>\n' +
    '                        <button onclick="toggleModal()" class="text-gray-600 hover:text-gray-800">&times;</button>\n' +
    '                    </div>\n' +
    '                    <div class="p-4">\n' +
    '                        <form>\n' +
    '                            <div class="mb-4">\n' +
    '                                <label for="username-field" class="block text-gray-800 font-semibold">Name</label>\n' +
    '                                <input type="text" id="username-field" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300">\n' +
    '                            </div>\n' +
    '                            <div class="mb-4">\n' +
    '                                <label for="password-field" class="block text-gray-800 font-semibold">Password</label>\n' +
    '                                <input type="password" id="password-field" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300">\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                    </div>\n' +
    '                    <div class="border-t px-4 py-2 flex justify-end">\n' +
    '                        <button onclick="toggleModal()" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">\n' +
    '                            Cancel\n' +
    '                        </button>\n' +
    '                        <button id="btn-form-login" class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2">\n' +
    '                            Login\n' +
    '                        </button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <!-- modal end -->';
}

// Append the Product Modal to the body
(function initializeProductModal() {
    const modalHTML = createProductModal();
    document.body.insertAdjacentHTML('beforeend', modalHTML);
})();

function createProductManagementSection() {
    const sectionHTML = `
        <section id="product-management" class="hidden p-8">
            <h1 class="text-2xl font-bold mb-6">Administrer Produkter</h1>
            <table class="table-auto border-collapse border border-gray-300 w-full text-sm mb-4 shadow-lg rounded-lg">
                <thead>
                <tr class="bg-gray-200">
                    <th class="border border-gray-300 px-4 py-2">Felt</th>
                    <th class="border border-gray-300 px-4 py-2">Input</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Navn</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <input type="text" id="product-name" placeholder="Navn" class="w-full p-2 border rounded">
                    </td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Url</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <input type="text" id="product-url" placeholder="Url" class="w-full p-2 border rounded">
                    </td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Pris</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <input type="number" id="product-price" placeholder="Pris" class="w-full p-2 border rounded">
                    </td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Beskrivelse</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <textarea id="product-description" placeholder="Beskrivelse" class="w-full p-2 border rounded"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Kategori</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <input type="text" id="product-category" placeholder="Kategori" class="w-full p-2 border rounded">
                    </td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Underkategori</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <input type="text" id="product-subcategory" placeholder="Underkategori" class="w-full p-2 border rounded">
                    </td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Mærke</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <input type="text" id="product-brand" placeholder="Mærke" class="w-full p-2 border rounded">
                    </td>
                </tr>
                </tbody>
            </table>
            <button onclick="createProduct()" class="bg-blue-500 text-white py-2 px-4 rounded">Opret Produkt</button>
            <button onclick="updateProduct()" class="bg-green-500 text-white py-2 px-4 rounded">Opdater Produkt</button>
            <button onclick="clearProductForm()" class="bg-gray-500 text-white py-2 px-4 rounded">Ryd</button>
            <div id="products-list" class="mt-6">
                <!-- Fetched products will be displayed here -->
            </div>
        </section>
    `;
    document.body.insertAdjacentHTML('beforeend', sectionHTML);
}

// Call the function during initialization
(function initializeProductManagement() {
    createProductManagementSection();
})();

// Show section for Products
function showProductSection() {
    const productManagement = document.querySelector('#product-management');
    if (!productManagement) {
        createProductManagementSection();
    }
    productManagement.classList.remove('hidden');
    fetchProducts();
}

// Wait for the DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    const addProductsLink = document.getElementById('add-products-link');
    if (addProductsLink) {
        addProductsLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            showProductSection(); // Call the function to show the product section
        });
    }
});

// fetch product data and added pagination
let currentPage = 0; // This tracks the current page
const pageSize = 10; // Items per page

async function fetchProducts(page = 0, size = pageSize) {
    const response = await fetch(`https://malingdk-dhd0fxe9bxeffdem.northeurope-01.azurewebsites.net/api/products/getAllAdminProducts?page=${page}&size=${size}`);
    const data = await response.json();

    const productsList = document.querySelector('#products-list');
    productsList.innerHTML = `
        <table class="table-auto border-collapse border border-gray-300 w-full text-sm">
            <thead class="bg-gray-200">
                <tr>
                    <th class="border border-gray-300 px-4 py-2">Id</th>
                    <th class="border border-gray-300 px-4 py-2">Navn</th>
                    <th class="border border-gray-300 px-4 py-2">Url</th>
                    <th class="border border-gray-300 px-4 py-2">Pris</th>
                    <th class="border border-gray-300 px-4 py-2">Beskrivelse</th>
                    <th class="border border-gray-300 px-4 py-2">Kategori</th>
                    <th class="border border-gray-300 px-4 py-2">Underkategori</th>
                    <th class="border border-gray-300 px-4 py-2">Mærke</th>
                    <th class="border border-gray-300 px-4 py-2">Handlinger</th>
                </tr>
            </thead>
            <tbody>
                ${data.content.map(product => `
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">${product.id}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.name}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.url}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.price}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.description}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.category}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.subcategory}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.brand}</td>
                        <td class="border border-gray-300 px-4 py-2">
                            <button onclick='populateProductForm(${JSON.stringify(product)})' 
                                class="bg-orange-400 text-white py-1 px-2 rounded">Rediger</button>
                            <button onclick="deleteProduct(${product.id})" 
                                class="bg-red-500 text-white py-1 px-2 rounded">Slet</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    // Add pagination controls
    addPaginationControls(data);
}

function addPaginationControls(data) {
    const productsList = document.querySelector('#products-list');
    const paginationHTML = `
        <div class="flex justify-between mt-4">
            <button ${data.first ? 'disabled' : ''} onclick="changePage(${currentPage - 1})"
                class="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded">Forrige</button>
            <span>Page ${data.number + 1} of ${data.totalPages}</span>
            <button ${data.last ? 'disabled' : ''} onclick="changePage(${currentPage + 1})"
                class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Næste</button>
        </div>
    `;
    productsList.insertAdjacentHTML('beforeend', paginationHTML);
}

function changePage(page) {
    if (page < 0) return; // Prevent negative pages
    currentPage = page;
    fetchProducts(currentPage, pageSize);
}

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

/* CRUD Functions */

// Populate product data for editing
function populateProductForm(product) {
    document.querySelector('#product-name').value = product.name;
    document.querySelector('#product-url').value = product.url;
    document.querySelector('#product-price').value = product.price;
    document.querySelector('#product-description').value = product.description;
    document.querySelector('#product-category').value = product.category;
    document.querySelector('#product-subcategory').value = product.subcategory;
    document.querySelector('#product-brand').value = product.brand;

    // Store the product ID for updating
    document.querySelector('#product-management').dataset.editingId = product.id;
}

// Helper function to gather product details from the form
function getProductDetails() {
    return {
        name: document.querySelector('#product-name').value,
        url: document.querySelector('#product-url').value,
        price: document.querySelector('#product-price').value,
        description: document.querySelector('#product-description').value,
        category: document.querySelector('#product-category').value,
        subcategory: document.querySelector('#product-subcategory').value,
        brand: document.querySelector('#product-brand').value,
    };
}

// Helper function to send a product request
async function sendProductRequest(url, method, productData) {
    return await fetch(url, {
        method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(productData),
    });
}

// Create product function
async function createProduct() {
    const productData = getProductDetails();

    // Validate the price field
    const price = productData.price;
    if (isNaN(price) || price <= 0) {
        console.log('Please enter a valid price (a positive number).');
        return;
    }

    const response = await sendProductRequest(
        'https://malingdk-dhd0fxe9bxeffdem.northeurope-01.azurewebsites.net/api/products/createProduct',
        'POST',
        productData
    );

    if (response.ok) {
        await fetchProducts();
        console.log('Product created successfully.');
        clearProductForm();
    } else {
        console.log('Failed to create product.');
    }
}

document.getElementById('price').addEventListener('input', function (e) {
    const value = e.target.value;
    // Allow only digits, optional decimal point, and at most two decimal places
    const valid = /^(\d+(\.\d{0,2})?)?$/.test(value);
    if (!valid) {
        e.target.value = value.slice(0, -1); // Remove the last invalid character
    }
});

// Update an existing product
async function updateProduct() {
    const editingId = document.querySelector('#product-management').dataset.editingId;
    if (!editingId) {
        console.log('No product selected for editing.');
        return;
    }

    const productData = getProductDetails();

    // Validate the price field
    const price = productData.price;
    if (isNaN(price) || price <= 0) {
        console.log('Please enter a valid price (a positive number).');
        return;
    }

    const response = await sendProductRequest(
        `https://malingdk-dhd0fxe9bxeffdem.northeurope-01.azurewebsites.net/api/products/${editingId}`,
        'PATCH',
        productData
    );

    if (response.ok) {
        console.log('Product updated successfully.');
        await fetchProducts();
        clearProductForm();
    } else {
        console.log('Failed to update product.');
    }
}


// delete an existing product
async function deleteProduct(id) {
    try {
        const response = await fetch(`https://malingdk-dhd0fxe9bxeffdem.northeurope-01.azurewebsites.net/api/products/${id}`, { method: 'DELETE' });

        if (response.ok) {
            console.log("Product successfully deleted!");
            await fetchProducts(); // Refresh the product list
        } else {
            console.log("Failed to delete product. Please try again.");
        }
    } catch (error) {
        console.error("Error while deleting product:", error);
        console.log("An error occurred. Please try again.");
    }
}

// Clear the form inputs
function clearProductForm() {
    document.querySelector('#product-name').value = '';
    document.querySelector('#product-url').value = '';
    document.querySelector('#product-price').value = '';
    document.querySelector('#product-description').value = '';
    document.querySelector('#product-category').value = '';
    document.querySelector('#product-subcategory').value = '';
    document.querySelector('#product-brand').value = '';
    delete document.querySelector('#product-management').dataset.editingId; // Remove editing ID
}
function showProductManagement() {
    const productManagementHTML = `
        <section class="p-8">
            <h1 class="text-2xl font-bold mb-6">Administrer Produkter</h1>
            <table class="table-auto border-collapse border border-gray-300 w-full text-sm mb-4 shadow-lg rounded-lg">
                <thead>
                    <tr class="bg-gray-200">
                        <th class="border border-gray-300 px-4 py-2">Felt</th>
                        <th class="border border-gray-300 px-4 py-2">Input</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Navn</td>
                        <td class="border border-gray-300 px-4 py-2">
                            <input type="text" id="product-name" placeholder="Navn" class="w-full p-2 border rounded">
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Url</td>
                        <td class="border border-gray-300 px-4 py-2">
                            <input type="text" id="product-url" placeholder="Url" class="w-full p-2 border rounded">
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Pris</td>
                        <td class="border border-gray-300 px-4 py-2">
                            <input type="number" id="product-price" placeholder="Pris" class="w-full p-2 border rounded">
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Beskrivelse</td>
                        <td class="border border-gray-300 px-4 py-2">
                            <textarea id="product-description" placeholder="Beskrivelse" class="w-full p-2 border rounded"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Kategori</td>
                        <td class="border border-gray-300 px-4 py-2">
                            <input type="text" id="product-category" placeholder="Kategori" class="w-full p-2 border rounded">
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Underkategori</td>
                        <td class="border border-gray-300 px-4 py-2">
                            <input type="text" id="product-subcategory" placeholder="Underkategori" class="w-full p-2 border rounded">
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Mærke</td>
                        <td class="border border-gray-300 px-4 py-2">
                            <input type="text" id="product-brand" placeholder="Mærke" class="w-full p-2 border rounded">
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onclick="createProduct()" class="bg-blue-500 text-white py-2 px-4 rounded">Opret Produkt</button>
            <button onclick="updateProduct()" class="bg-green-500 text-white py-2 px-4 rounded">Opdater Produkt</button>
            <button onclick="clearProductForm()" class="bg-gray-500 text-white py-2 px-4 rounded">Ryd</button>
            <div id="products-list" class="mt-6">
                <!-- Fetched products will be displayed here -->
            </div>
        </section>
    `;

    const container = document.getElementById('main-content-container');
    if (container) {
        container.innerHTML = productManagementHTML;
    } else {
        console.error('main-content-container ikke fundet.');
    }

    // Fetch products efter at indholdet er indlæst
    fetchProducts();
}

