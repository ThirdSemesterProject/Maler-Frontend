
    const renderSubcategories = (category) => {
        window.lastCategory = category;
        const { subcategories } = window.categories[category];

        window.categoriesSection.innerHTML = ""; // Ryd placeholderen

        const header = document.createElement("div");
        header.className = "flex justify-between items-center mb-6";

        const backButton = document.createElement("button");
        backButton.className =
            "flex items-center justify-center bg-green-500 text-white p-2 rounded-full hover:brightness-110 transition-colors";
        backButton.style.backgroundColor = "#00c853";
        // Brug en ikon-pil i stedet for tekst
        backButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        
`;

        backButton.addEventListener("click", () => {
            window.renderCategories(); // Kalder funktionen til at vise hovedkategorier
        });

        const title = document.createElement("h2");
        title.className = "text-2xl font-bold text-gray-800 text-center w-full";
        title.textContent = category;

        header.appendChild(backButton);
        header.appendChild(title);
        window.categoriesSection.appendChild(header);

        if (subcategories.length === 0) {
            const message = document.createElement("p");
            message.className = "text-center text-gray-600 text-lg mt-6";
            message.textContent = "Denne kategori har ingen underkategorier.";
            window.categoriesSection.appendChild(message);
            return;
        }

        const grid = document.createElement("div");
        grid.className = "grid grid-cols-2 md:grid-cols-4 gap-6";

        subcategories.forEach(({ name, image }) => {
            const card = document.createElement("div");
            card.className =
                "text-center bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow cursor-pointer";

            card.innerHTML = `
                <div>
                    <img src="${image}" alt="${name}" class="rounded-md w-full h-48 object-cover mb-4">
                </div>
                <div class="p-4">
                    <h4 class="text-md font-semibold text-gray-800">${name}</h4>
                </div>
            `;
            card.addEventListener("click", () => renderProductsBySubcategory(name));

            grid.appendChild(card);
        });

        window.categoriesSection.appendChild(grid);
    };

    window.renderSubcategories = renderSubcategories;


    async function fetchProductsBySubcategory(subcategory) {
        try {
            const response = await fetch(`http://localhost:8080/api/products/getBySubcategory?subcategory=${subcategory}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Fejl ved hentning af produkter for underkategori.");
            }

            const products = await response.json();
            console.log(`Produkter for underkategori "${subcategory}":`, products); // Debugging
            return products;
        } catch (error) {
            console.error("Fejl:", error);
            return [];
        }
    }


    const renderProductsBySubcategory = async (subcategory) => {
        const products = await fetchProductsBySubcategory(subcategory);

        const itemsPerPage = 8; // Antal produkter pr. side
        let currentPage = 1; // Start på side 1

        const renderPage = () => {
            // Beregn start- og slutindeks for produkterne på den aktuelle side
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const productsToShow = products.slice(startIndex, endIndex);

            window.categoriesSection.innerHTML = ""; // Ryd sektionen

            // Tilføj overskrift og tilbageknap
            const header = document.createElement("div");
            header.className = "flex justify-between items-center mb-6";

            const backButton = document.createElement("button");
            backButton.className =
                "flex items-center justify-center bg-green-500 text-white p-2 rounded-full hover:brightness-110 transition-colors";
            backButton.style.backgroundColor = "#00c853"; // Grøn farve fra billedet

            // Indsæt kun pil-ikonet (SVG)
            backButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            `;

            backButton.addEventListener("click", () => {
                window.renderSubcategories(window.lastCategory);
            });
            const title = document.createElement("h2");
            title.className = "text-2xl font-bold text-gray-800 text-center w-full";
            title.textContent = subcategory;

            header.appendChild(backButton);
            header.appendChild(title);
            window.categoriesSection.appendChild(header);

            // Hvis der ikke er produkter
            if (productsToShow.length === 0) {
                const noProductsMessage = document.createElement("p");
                noProductsMessage.className = "text-center text-gray-600 text-lg mt-6";
                noProductsMessage.textContent = "Ingen produkter fundet for denne underkategori.";
                window.categoriesSection.appendChild(noProductsMessage);
                return;
            }

            // Opret grid til produkterne
            const grid = document.createElement("div");
            grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";

            productsToShow.forEach((product) => {
                const productImage = product.URL || "/images/default-product.png"; // Brug URL-feltet fra responsen

                const productCard = document.createElement("div");
                productCard.className =
                    "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow";

                productCard.innerHTML = `
                <div>
                    <img src="${productImage}" alt="${product.name}" class="w-full h-36 object-contain">
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-bold text-gray-800 mb-2">${product.name}</h3>
                    <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-bold text-red-500">${product.price.toFixed(2)} DKK</span>
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                            Læg i kurv
                        </button>
                    </div>
                </div>
            `;

                grid.appendChild(productCard);
            });

            window.categoriesSection.appendChild(grid);

            // Tilføj pagineringsknapper
            const pagination = document.createElement("div");
            pagination.className = "flex justify-center mt-6";

            const prevButton = document.createElement("button");
            prevButton.className = "px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400";
            prevButton.textContent = "Forrige";
            prevButton.disabled = currentPage === 1; // Deaktiver knappen, hvis vi er på den første side
            prevButton.addEventListener("click", () => {
                currentPage--;
                renderPage();
            });

            const nextButton = document.createElement("button");
            nextButton.className = "px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400";
            nextButton.textContent = "Næste";
            nextButton.disabled = currentPage === Math.ceil(products.length / itemsPerPage); // Deaktiver knappen, hvis vi er på den sidste side
            nextButton.addEventListener("click", () => {
                currentPage++;
                renderPage();
            });

            pagination.appendChild(prevButton);

            // Vis sidenummer
            const pageInfo = document.createElement("span");
            pageInfo.className = "px-4 py-2 mx-1 text-gray-700";
            pageInfo.textContent = `Side ${currentPage} af ${Math.ceil(products.length / itemsPerPage)}`;
            pagination.appendChild(pageInfo);

            pagination.appendChild(nextButton);

            window.categoriesSection.appendChild(pagination);
        };

        // Start med at vise den første side
        renderPage();
    };



    window.renderProductsBySubcategory = renderProductsBySubcategory;

