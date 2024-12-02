function createProductModal() {
    const modalHTML = '            <!-- Modal start -->\n' +
        '            <div id="login-modal" class="hidden fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">\n' +
        '                <div class="bg-white w-96 rounded-lg shadow-lg">\n' +
        '                    <div class="border-b px-4 py-2 flex justify-between items-center">\n' +
        '                        <h3 id="modal-title" class="text-lg font-semibold">Login</h3>\n' +
        '                        <button onclick="toggleModal()" class="text-gray-600 hover:text-gray-800">&times;</button>\n' +
        '                    </div>\n' +
        '                    <div class="p-4">\n' +
        '                        <form>\n' +
        '                            <div class="mb-4">\n' +
        '                                <label for="username-field" class="block text-gray-700 font-semibold">Name</label>\n' +
        '                                <input type="text" id="username-field" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200">\n' +
        '                            </div>\n' +
        '                            <div class="mb-4">\n' +
        '                                <label for="password-field" class="block text-gray-700 font-semibold">Password</label>\n' +
        '                                <input type="password" id="password-field" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200">\n' +
        '                            </div>\n' +
        '                        </form>\n' +
        '                    </div>\n' +
        '                    <div class="border-t px-4 py-2 flex justify-end">\n' +
        '                        <button onclick="toggleModal()" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">\n' +
        '                            Cancel\n' +
        '                        </button>\n' +
        '                        <button id="btn-form-login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">\n' +
        '                            Login\n' +
        '                        </button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <!-- modal end -->';
    return modalHTML;
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
                    <th class="border border-gray-300 px-4 py-2">Field</th>
                    <th class="border border-gray-300 px-4 py-2">Input</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Name</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <input type="text" id="product-name" placeholder="Name" class="w-full p-2 border rounded">
                    </td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">URL</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <input type="text" id="product-url" placeholder="Url" class="w-full p-2 border rounded">
                    </td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Price</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <input type="number" id="product-price" placeholder="Price" class="w-full p-2 border rounded">
                    </td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Description</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <textarea id="product-description" placeholder="Description" class="w-full p-2 border rounded"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Category</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <input type="text" id="product-category" placeholder="Category" class="w-full p-2 border rounded">
                    </td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Brand</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <input type="text" id="product-brand" placeholder="Brand" class="w-full p-2 border rounded">
                    </td>
                </tr>
                </tbody>
            </table>
            <button onclick="createProduct()" class="bg-blue-500 text-white py-2 px-4 rounded">Create Product</button>
            <button onclick="updateProduct()" class="bg-green-500 text-white py-2 px-4 rounded">Update Product</button>
            <button onclick="clearProductForm()" class="bg-gray-500 text-white py-2 px-4 rounded">Clear</button>
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

// fetch product data
async function fetchProducts() {
    const response = await fetch('http://localhost:8080/api/products/getAllProducts');
    const products = await response.json();
    const productsList = document.querySelector('#products-list');

    productsList.innerHTML = `
        <table class="table-auto border-collapse border border-gray-300 w-full text-sm">
            <thead class="bg-gray-200">
                <tr>
                    <th class="border border-gray-300 px-4 py-2">ID</th>
                    <th class="border border-gray-300 px-4 py-2">Name</th>
                    <th class="border border-gray-300 px-4 py-2">URL</th>
                    <th class="border border-gray-300 px-4 py-2">Price</th>
                    <th class="border border-gray-300 px-4 py-2">Description</th>
                    <th class="border border-gray-300 px-4 py-2">Category</th>
                    <th class="border border-gray-300 px-4 py-2">Brand</th>
                    <th class="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                ${products.map(product => `
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">${product.id}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.name}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.url}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.price}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.description}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.category}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.brand}</td>
                        <td class="border border-gray-300 px-4 py-2">
                            <button onclick='populateProductForm(${JSON.stringify(product)})' 
                                class="bg-orange-400 text-white py-1 px-2 rounded">Edit</button>
                            <button onclick="deleteProduct(${product.id})" 
                                class="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

/* CRUD Functions */

// Create product function
async function createProduct() {
    const name = document.querySelector('#product-name').value;
    const url = document.querySelector('#product-url').value;
    const price = document.querySelector('#product-price').value;
    const description = document.querySelector('#product-description').value;
    const category = document.querySelector('#product-category').value;
    const brand = document.querySelector('#product-brand').value;

    await fetch('http://localhost:8080/api/products/createProduct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, url, price, description, category, brand }),
    });
    fetchProducts();
}

// Populate product data for editing
function populateProductForm(product) {
    document.querySelector('#product-name').value = product.name;
    document.querySelector('#product-url').value = product.url;
    document.querySelector('#product-price').value = product.price;
    document.querySelector('#product-description').value = product.description;
    document.querySelector('#product-category').value = product.category;
    document.querySelector('#product-brand').value = product.brand;

    // Store the product ID for updating
    document.querySelector('#product-management').dataset.editingId = product.id;
}

// Update an existing product
async function updateProduct() {
    const editingId = document.querySelector('#product-management').dataset.editingId;
    if (!editingId) {
        alert('No product selected for editing.');
        return;
    }

    const name = document.querySelector('#product-name').value;
    const url = document.querySelector('#product-url').value;
    const price = document.querySelector('#product-price').value;
    const description = document.querySelector('#product-description').value;
    const category = document.querySelector('#product-category').value;
    const brand = document.querySelector('#product-brand').value;

    const response = await fetch(`http://localhost:8080/api/products/${editingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, url, price, description, category, brand }),
    });

    if (response.ok) {
        alert('Product updated successfully.');
        fetchProducts();
        clearProductForm();
    } else {
        alert('Failed to update product.');
    }
}

// delete product by id function
async function deleteProduct(id) {
    await fetch(`http://localhost:8080/api/products/${id}`, { method: 'DELETE' });
    fetchProducts();
}

// Clear the form inputs
function clearProductForm() {
    document.querySelector('#product-name').value = '';
    document.querySelector('#product-url').value = '';
    document.querySelector('#product-price').value = '';
    document.querySelector('#product-description').value = '';
    document.querySelector('#product-category').value = '';
    document.querySelector('#product-brand').value = '';
    delete document.querySelector('#product-management').dataset.editingId; // Remove editing ID
}
