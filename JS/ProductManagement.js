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
                        <td class="border border-gray-300 px-4 py-2">$${product.price}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.description}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.category}</td>
                        <td class="border border-gray-300 px-4 py-2">${product.brand}</td>
                        <td class="border border-gray-300 px-4 py-2">
                            <button onclick="deleteProduct(${product.id})" class="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

async function createProduct() {
    const name = document.querySelector('#product-name').value;
    const price = document.querySelector('#product-price').value;
    const description = document.querySelector('#product-description').value;
    const category = document.querySelector('#product-category').value;
    const brand = document.querySelector('#product-brand').value;

    await fetch('http://localhost:8080/api/products/createProduct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price, description, category, brand }),
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
