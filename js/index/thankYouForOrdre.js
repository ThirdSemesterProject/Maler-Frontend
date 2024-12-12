async function thankYouForOrdre() {
    const orderData = JSON.parse(sessionStorage.getItem('orderData'));

    // Pak objektet ud
    const { orderId, customerName, orderDate, shopName, orderStatus, itemNames } = orderData;

    console.log('Order ID:', orderId);
    console.log('Customer Name:', customerName);
    console.log('Order Date:', orderDate);
    console.log('Shop Name:', shopName);
    console.log('Order Status:', orderStatus);
    console.log('Item Names:', itemNames);

    // Check om orderId eksisterer
    if (!orderId) {
        console.error('Ordre ID mangler!');
        return;
    }

    try {
        // Vis takkesektion
        showThankYouSection(orderId, customerName, shopName, orderStatus, orderDate, itemNames);
    } catch (error) {
        console.error('Fejl:', error);
        alert('Kunne ikke vise takkesektionen. Prøv igen.');
    }
}

// Funktion til at vise takkesektionen
function showThankYouSection(orderId, customerName, shopName, orderStatus, orderDate, itemNames) {
    // Opret takkesektion
    const thankYouSection = `
        <div class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div class="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
                <h1 class="text-2xl font-bold text-gray-900">Tak for din ordre, ${customerName}!</h1>
                <p class="text-gray-700 mt-4">Din ordre fra ${shopName} er registreret med status: <strong>${orderStatus}</strong>.</p>
                <p class="text-gray-700">Ordre dato: ${orderDate}</p>
                <p class="text-gray-700 mb-4">Ordre ID: <strong>${orderId}</strong></p>
                <h2 class="text-lg font-semibold mb-2">Ordredetaljer:</h2>
                <ul class="text-left list-disc list-inside mb-4">
                    ${itemNames.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <button id="goToHome" class="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">Tilbage til forsiden</button>
            </div>
        </div>
    `;

    // Tilføj takkesektionen til body
    document.body.insertAdjacentHTML('afterbegin', thankYouSection);

    // Tilføj eventlistener til knappen
    document.getElementById('goToHome').addEventListener('click', () => {
        window.location.reload();
    });
}
