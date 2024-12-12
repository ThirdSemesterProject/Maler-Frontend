function CreateHeader() {
    return `
        <!-- Header -->
        <header class="bg-white py-4 shadow-md sticky top-0 z-50">
            <div class="container mx-auto flex justify-between items-center">
                <!-- Logo -->
                <div class="flex items-center space-x-4">
                    <a href="https://www.instagram.com/maling.dk/" target="_blank" class="text-gray-800 font-bold text-4xl">
                        #
                    </a>
                    <a href="javascript:void(0);" onclick="location.reload();" class="font-semibold text-lg tracking-wide text-gray-800">
                        Maling.dk
                    </a>
                </div>

                <!-- Dropdown Menu -->
                <div class="relative">
                    <button id="categories-dropdown-btn" class="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full flex items-center space-x-2">
                        <span>Kategorier</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <ul id="categories-dropdown-menu" class="absolute left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 hidden w-64 z-50">
                        <!-- Dynamiske kategorier bliver tilføjet her -->
                    </ul>
                </div>

                <!-- Søgefelt -->
                <div class="flex items-center w-1/2 relative">
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Søg efter produkter..."
                        class="p-2 rounded-l-full text-gray-800 w-full border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
                        oninput="searchByNameOrItem()">
                    <div
                        id="results-container"
                        class="absolute left-0 top-full bg-white shadow-lg rounded-md border border-gray-300 max-h-72 overflow-y-auto hidden z-50 w-full">
                    </div>
                    <button class="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-r-full">
                        Søg
                    </button>
                </div>

                <!-- Knapper -->
                <div class="flex items-center space-x-4">
                    <button id="btn-signup" class="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full">
                        Sign up
                    </button>
                    <button id="btn-show-login" class="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full">
                        Sign in
                    </button>
                    <button id="cart-button" class="relative bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-full flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6H19a1 1 0 001-1v-1m-3 0a1 1 0 01-1-1M6 21a1 1 0 100-2 1 1 0 000 2zM17 21a1 1 0 100-2 1 1 0 000 2z" />
                        </svg>
                        <span id="cart-counter" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            0
                        </span>
                    </button>
                </div>
            </div>
        </header>

        <!-- Login Modal -->
        <div id="login-modal" class="hidden fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div class="bg-white w-96 rounded-lg shadow-lg">
                <div class="border-b px-4 py-2 flex justify-between items-center">
                    <h3 class="text-lg font-semibold">Login</h3>
                    <button onclick="toggleModal('login-modal')" class="text-gray-600 hover:text-gray-800">&times;</button>
                </div>
                <div class="p-4">
                    <form>
                        <div class="mb-4">
                            <label for="username-field" class="block text-gray-700 font-semibold">Name</label>
                            <input type="text" id="username-field" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200">
                        </div>
                        <div class="mb-4">
                            <label for="password-field" class="block text-gray-700 font-semibold">Password</label>
                            <input type="password" id="password-field" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200">
                        </div>
                    </form>
                </div>
                <div class="border-t px-4 py-2 flex justify-end">
                    <button onclick="toggleModal('login-modal')" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Cancel
                    </button>
                    <button id="btn-form-login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                        Login
                    </button>
                </div>
            </div>
        </div>

        <!-- Sign Up Modal -->
        <div id="signup-modal" class="hidden fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div class="bg-white w-96 rounded-lg shadow-lg">
                <div class="border-b px-4 py-2 flex justify-between items-center">
                    <h3 class="text-lg font-semibold">Sign Up</h3>
                    <button onclick="toggleModal('signup-modal')" class="text-gray-600 hover:text-gray-800">&times;</button>
                </div>
                <div class="p-4">
                    <form>
                        <div class="mb-4">
                            <label for="signup-username-field" class="block text-gray-700 font-semibold">Name</label>
                            <input type="text" id="signup-username-field" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200">
                        </div>
                        <div class="mb-4">
                            <label for="signup-email-field" class="block text-gray-700 font-semibold">Email</label>
                            <input type="email" id="signup-email-field" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200">
                        </div>
                        <div class="mb-4">
                            <label for="signup-password-field" class="block text-gray-700 font-semibold">Password</label>
                            <input type="password" id="signup-password-field" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200">
                        </div>
                    </form>
                </div>
                <div class="border-t px-4 py-2 flex justify-end">
                    <button onclick="toggleModal('signup-modal')" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Cancel
                    </button>
                    <button id="btn-form-signup" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Modal toggle function
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.toggle('hidden');
    }
}

// Dummy search function
function searchByNameOrItem() {
    const input = document.getElementById("search-input");
    const resultsContainer = document.getElementById("results-container");
    if (input && resultsContainer) {
        const query = input.value.toLowerCase();
        if (query) {
            resultsContainer.innerHTML = `<div class="p-2">Søger efter: <strong>${query}</strong></div>`;
            resultsContainer.classList.remove("hidden");
        } else {
            resultsContainer.classList.add("hidden");
        }
    }
}

// Append the Header and Add Event Listeners
(function initializeHeaderScript() {
    const headerHTML = CreateHeader();
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // Event Listeners for modals
    const loginButton = document.getElementById("btn-show-login");
    const signupButton = document.getElementById("btn-signup");

    if (loginButton) {
        loginButton.addEventListener("click", () => toggleModal('login-modal'));
    }
    if (signupButton) {
        signupButton.addEventListener("click", () => toggleModal('signup-modal'));
    }
})();