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

async function deleteProduct(id) {
    await fetch(`http://localhost:8080/api/products/${id}`, { method: 'DELETE' });
    fetchProducts();
}

function showProductSection() {
    document.querySelector('#product-management').classList.remove('hidden');
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
