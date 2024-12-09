
function loadOrderPage(cartItems) {

// Dynamisk HTML-generering
    document.body.innerHTML = `
  <div class="container mx-auto bg-white shadow-md rounded-md p-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Leveringsadresse -->
          <div>
              <h2 class="text-lg font-bold border-b pb-2 mb-4 text-gray-700">🏠 LEVERINGSADRESSE</h2>
             <form id="customerForm" class="space-y-4">
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
                      <input type="text" id="street" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300" placeholder="Gade/vej">
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                      <div>
                          <label class="block text-sm font-medium text-gray-600">By</label>
                          <input type="text" id="city" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300" placeholder="By">
                      </div>
                      <div>
                          <label class="block text-sm font-medium text-gray-600">Postnummer</label>
                          <input type="text" id="postNo" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300" placeholder="Postnummer">
                      </div>
                  </div>
                  <div>
                      <label class="block text-sm font-medium text-gray-600">Land</label>
                      <select id="country" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300">
                          <option>Danmark</option>
                          <option>Sverige</option>
                          <option>Norge</option>
                      </select>
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
                  <button type="submit" class="w-full bg-blue-500 text-white rounded-lg p-2 mt-4 hover:bg-blue-600 transition">Send</button>
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
                        <h2 class="text-lg font-bold border-b pb-2 mt-6 mb-4 text-gray-700">🏪 Vælg en butik</h2>
                        <div id="shop-options" class="space-y-4">
                            <!-- Radio-knapper til butikker -->
                        </div>
                    </div>
                </div>
            </div>
     `;
    fetchAndDisplayShops();
    }

    // Event listener for form submission
    document.getElementById('customerForm').addEventListener('submit', async function (event) {
        event.preventDefault();

        // Collect form data
        const customerData = {
            email: document.getElementById('email').value,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            address: document.getElementById('street').value,
            postNo: document.getElementById('postNo').value,
            city: document.getElementById('city').value,
            country: document.getElementById('country').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
        };

        // Validate data
        if (!customerData.email || !customerData.firstName || !customerData.lastName) {
            alert('Udfyld venligst alle påkrævede felter.');
            return;
        }

        console.log("Opretter kunde:", customerData);

        // Send POST request to backend
        try {
            const response = await fetch('http://localhost:8080/api/customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customerData),
            });

            if (response.ok) {
                alert('Kunde oprettet med succes!');
                document.getElementById('customerForm').reset(); // Reset form after submission
            } else {
                alert('Noget gik galt ved oprettelsen af kunden.');
            }
        } catch (error) {
            console.error('Fejl:', error);
            alert('Kunne ikke oprette kunden. Prøv igen senere.');
        }
    });

    // Hent og vis shops som radio-knapper
    async function fetchAndDisplayShops() {
        console.log("fetchAndDisplayShops kaldt");
        try {
            const response = await fetch('http://localhost:8080/api/shop');
            if (response.ok) {
                const shops = await response.json();
                renderShopOptions(shops); // Render shops as radio buttons
            } else {
                console.error('Failed to fetch shops:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching shops:', error);
        }
    }

    // Render shops as radio buttons
    function renderShopOptions(shops) {
        const shopContainer = document.getElementById('shop-options');
        shopContainer.innerHTML = ''; // Ryd eksisterende indhold

        shops.forEach(shop => {
            const shopOption = `
                <label class="flex items-center">
                    <input type="radio" name="shop" value="${shop.id}" class="mr-2">
                    ${shop.name} - ${shop.address}
                </label>
            `;
            shopContainer.insertAdjacentHTML('beforeend', shopOption);
        });
    }

    // Kald denne funktion, når ordresiden indlæses
    fetchAndDisplayShops();
