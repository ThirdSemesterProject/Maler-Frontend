
function loadOrderPage(cartItems) {

// Dynamisk HTML-generering
    document.body.innerHTML = `
  <div class="container mx-auto bg-white shadow-md rounded-md p-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Leveringsadresse -->
          <div>
              <h2 class="text-lg font-bold border-b pb-2 mb-4 text-gray-700">🏠 LEVERINGSADRESSE</h2>
             <form id="orderForm" class="space-y-4">
                  <div>
                      <label class="block text-sm font-medium text-gray-600">Emailadresse <span class="text-red-500">*</span></label>
                      <input type="email" id="email" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300" placeholder="Indtast din email">
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                      <div>
                          <label class="block text-sm font-medium text-gray-600">Fornavn</label>
                          <input type="text" id="firstName" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300" placeholder="Fornavn">
                      </div>
                      <div>
                          <label class="block text-sm font-medium text-gray-600">Efternavn</label>
                          <input type="text" id="lastName" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300" placeholder="Efternavn">
                      </div>
                  </div>
                  <div>
                      <label class="block text-sm font-medium text-gray-600">Gade/vej</label>
                      <input type="text" id="address" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300" placeholder="Gade/vej">
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                      <div>
                          <label class="block text-sm font-medium text-gray-600">Postnummer</label>
                          <input type="text" id="postNo" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300" placeholder="Postnummer">
                      </div>
                  </div>
                  <div>
                      <label class="block text-sm font-medium text-gray-600">Telefonnummer</label>
                      <input type="text" id="phone" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300" placeholder="Telefonnummer">
                  </div>
                  <div>
                      <label class="block text-sm font-medium text-gray-600">Firma</label>
                      <input type="text" id="company" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300" placeholder="Firma">
                  </div>

                  <!-- Leveringsmetoder -->
                  <h2 class="text-2xl font-semibold border-b pb-2 mt-6 mb-4 text-gray-700">🚚 Leveringsmetoder</h2>
                  <div id="deliveryMethods" class="space-y-4">
                      <label class="flex items-center">
                          <input type="radio" name="deliveryMethod" value="Express levering - Storkøbenhavn" class="mr-2">
                          0,00DKK - Express levering - Storkøbenhavn
                      </label>
                      <label class="flex items-center">
                          <input type="radio" name="deliveryMethod" value="Pakkeshop - GLS" class="mr-2">
                          0,00DKK - Pakkeshop - GLS
                      </label>
                      <label class="flex items-center">
                          <input type="radio" name="deliveryMethod" value="Hjemmelevering - Post Nord" class="mr-2">
                          0,00DKK - Hjemmelevering - Post Nord
                      </label>
                      <label class="flex items-center">
                          <input type="radio" name="deliveryMethod" value="Afhentning i butik - Amagerbrogade" class="mr-2">
                          0,00DKK - MALING.DK Amagerbrogade - Afhentning i butik
                      </label>
                  </div>
                  <div>
                      <label class="block text-sm font-medium text-gray-600">Kommentarer</label>
                      <textarea id="comments" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300" rows="3" placeholder="Tilføj kommentarer..."></textarea>
                  </div>
                  <button type="ordersumit" class="w-full bg-blue-500 text-white rounded-lg p-2 mt-4 hover:bg-blue-600 transition">Send</button>
              </form>
          </div>

          <!-- Betalingsmetoder og Ordreoversigt -->
          <div>
              <h2 class="text-lg font-bold border-b pb-2 mb-4 text-gray-700">💳 BETALINGSMETODER</h2>
              <div class="space-y-4">
                  <div>
                      <label class="flex items-center">
                          <input type="radio" name="paymentMethod" value="bank" class="mr-2">
                          Bankoverførsel
                      </label>
                  </div>
                  <div>
                      <label class="flex items-center">
                          <input type="radio" name="paymentMethod" value="creditCard" class="mr-2" checked>
                          Kreditkort
                      </label>
                  </div>
                  <div>
                      <label class="flex items-center">
                          <input type="radio" name="paymentMethod" value="ean" class="mr-2">
                          EAN
                      </label>
                  </div>
              </div>

               <h2 class="text-lg font-bold border-b pb-2 mb-4 text-gray-700">📦 ORDREOVERSIGT</h2>
                <ul class="space-y-4">
                    ${cartItems.map(item => `
                        <li class="flex justify-between items-center">
                            <div>
                                <p class="text-gray-900 font-medium">${item.name}</p>
                                <p class="text-gray-500 text-sm">Mængde: ${item.quantity}</p>
                                <p class="text-gray-500 text-sm">Pris: ${item.price.toFixed(2)} DKK</p>
                            </div>
                            <p class="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)} DKK</p>
                        </li>
                    `).join('')}
                </ul>
                <div class="mt-4">
                    <p class="text-lg font-bold text-gray-900">
                        Total: ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)} DKK
                    </p>
                </div>
             <!-- Butiksvalg -->
                     <div class="container mx-auto bg-white shadow-md rounded-md p-6">
                             <div>
                                <h2 class="text-lg font-bold text-gray-700">🏪 Vil du hente i en butik?</h2>
                                
                                <div id="shop-options" class="space-y-4 mt-4 hidden">
                                    <!-- Butikker vil blive vist her -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     `;
    document.addEventListener('DOMContentLoaded', fetchAndDisplayShops);

    document.getElementById('orderForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        const orderRequest = {
            phoneNR: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            address: document.getElementById('address').value,
            postNo: document.getElementById('postNo').value,
            shopId: localStorage.getItem('selectedShopId'),
            itemIds: cartItems.map(item => item.id)
        };

        try {
            // Send ordreoprettelse
            const response = await fetch('http://localhost:8080/api/orders/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderRequest)
            });

            if (!response.ok) {
                throw new Error('Noget gik galt ved ordreoprettelse.');
            }

            const responseData = await response.json();
            console.log('Ordre oprettet:', responseData);

            // Gem ordredata i sessionStorage
            sessionStorage.setItem('orderDetails', JSON.stringify({
                customer: {
                    firstName: orderRequest.firstName,
                    lastName: orderRequest.lastName,
                    email: orderRequest.email
                },
                order: responseData // Ordredetaljer fra backend
            }));

            console.log('Response Data:', responseData);

            sessionStorage.setItem('orderData', JSON.stringify(responseData));


            // Send anmodning for at rydde kurven
            const clearCartResponse = await fetch('http://localhost:8080/api/cart/clear', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!clearCartResponse.ok) {
                throw new Error('Noget gik galt ved rydning af kurven.');
            }

            const clearCartMessage = await clearCartResponse.text();
            console.log(clearCartMessage); // "Cart cleared."

            // Kald thank you-funktion
            console.log('Order ID to be saved:', responseData.id);
                thankYouForOrdre();

        } catch (error) {
            console.error('Fejl:', error);
        }
    });

    async function fetchAndDisplayShops() {
        try {
            // Hent data fra en API eller lokal fil
            const response = await fetch('http://localhost:8080/api/shop'); // Skift til korrekt endpoint eller filsti
            if (!response.ok) throw new Error('Fejl ved indlæsning af butikker');

            const shops = await response.json();

            // Find elementet, hvor butikkerne skal vises
            const shopOptionsContainer = document.getElementById('shop-options');

            // Tøm containeren og gør den synlig
            shopOptionsContainer.innerHTML = '';
            shopOptionsContainer.classList.remove('hidden');

            // Dynamisk generer HTML for butikkerne
            shops.forEach(shop => {
                const shopElement = document.createElement('div');
                shopElement.className = 'flex items-center space-x-4 border p-4 rounded-md';

                shopElement.innerHTML = `
                <input type="radio" name="shop" id="shop-${shop.id}" value="${shop.id}" class="mr-2">
                <label for="shop-${shop.id}" class="text-gray-700">
                    <span class="font-bold">${shop.name}</span><br>
                    <span class="text-sm text-gray-500">${shop.address}</span>
                </label>
            `;

                shopOptionsContainer.appendChild(shopElement);
            });

            document.querySelectorAll('input[name="shop"]').forEach(radio => {
                radio.addEventListener('change', (event) => {
                    const selectedShopId = event.target.value;

                    // Gem det valgte shop ID i localStorage
                    localStorage.setItem('selectedShopId', selectedShopId);

                    console.log(`Valgt butik ID: ${selectedShopId} er gemt i localStorage.`);
                });
            });

        } catch (error) {
            console.error(error);
        }
    }

    fetchAndDisplayShops();
}
