function CreateHeader() {
    return '<!-- Header -->\n' +
        '<header class="bg-white py-4 shadow-md">\n' +
        '    <div class="container mx-auto flex justify-between items-center">\n' +
        '        <!-- Logo -->\n' +
        '        <div class="flex items-center">\n' +
        '            <div class="bg-gray-200 p-2 rounded-full">\n' +
        '                <span class="text-gray-800 font-bold">Logo</span>\n' +
        '            </div>\n' +
        '            <span class="ml-4 font-semibold text-lg tracking-wide">Maling.dk</span>\n' +
        '        </div>\n' +
        '\n ' +
        '       <!-- Dropdown Menu -->\n' +
        '                <div class="flex justify-center items-center relative">\n' +
        '                    <div class="relative">\n' +
        '                           <button id="categories-dropdown-btn" class="bg-gray-800 hover:bg-gray-700 text-white py-1.5 px-3 rounded-full">\n' +
        '                               Kategorier\n' +
        '                           </button>' +
        '                        <ul id="categories-dropdown-menu" class="absolute left-0 mt-1 bg-white shadow-md rounded-md border border-gray-300 hidden w-64 z-50">\n' +
        '                            <!-- Dynamiske kategorier bliver tilføjet her -->\n' +
        '                        </ul>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '        <!-- søgefelt -->\n' +
        '        <div class="flex-grow flex justify-center relative">\n' +
        '            <div class="flex items-center w-2/3 relative">\n' +
        '                <input\n' +
        '                        type="text"\n' +
        '                        id="search-input"\n' +
        '                        placeholder="Søg efter produkter..."\n' +
        '                        class="p-3 rounded-l-full text-gray-800 w-full border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"\n' +
        '                        oninput="searchByNameOrItemNo()">\n' +
        '                <div\n' +
        '                        id="results-container"\n' +
        '                        class="absolute left-0 top-full bg-white shadow-lg rounded-md border border-gray-300 max-h-72 overflow-y-auto hidden z-50 w-full">\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <button class="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-r-full">Søg</button>\n' +
        '\n' +
        '        </div>\n' +
        '\n' +
        '     <!-- Knapper -->\n' +
        '        <div>\n' +
        '            <button id="btn-signup" class="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full">\n' +
        '                Sign up\n' +
        '            </button>\n' +
        '            <button id="btn-show-login" class="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full">\n' +
        '                Sign in\n' +
        '            </button>\n' +
        '            <button id="btn-fetch" hidden class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">\n' +
        '                Fetch data\n' +
        '            </button>\n' +
        '            <button id="btn-get-secret" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" hidden>\n' +
        '                Get Secret\n' +
        '            </button>\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="ml-auto">\n' +
        '            <button id="cart-button" class="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full">Kurv</button>\n' +
        '        </div>\n' +
        '\n' +
        '        <nav class="bg-gray-100 py-4">\n' +
        '            <div class="container mx-auto flex justify-between items-center">\n' +
        '                <div>\n' +
        '\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </nav>\n' +
        '\n' +
        '        <!-- Modal start -->\n' +
        '        <div id="login-modal" class="hidden fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">\n' +
        '            <div class="bg-white w-96 rounded-lg shadow-lg">\n' +
        '                <div class="border-b px-4 py-2 flex justify-between items-center">\n' +
        '                    <h3 id="modal-title" class="text-lg font-semibold">Login</h3>\n' +
        '                    <button onclick="toggleModal()" class="text-gray-600 hover:text-gray-800">&times;</button>\n' +
        '                </div>\n' +
        '                <div class="p-4">\n' +
        '                    <form>\n' +
        '                        <div class="mb-4">\n' +
        '                            <label for="username-field" class="block text-gray-700 font-semibold">Name</label>\n' +
        '                            <input type="text" id="username-field" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200">\n' +
        '                        </div>\n' +
        '                        <div class="mb-4">\n' +
        '                            <label for="password-field" class="block text-gray-700 font-semibold">Password</label>\n' +
        '                            <input type="password" id="password-field" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200">\n' +
        '                        </div>\n' +
        '                    </form>\n' +
        '                </div>\n' +
        '                <div class="border-t px-4 py-2 flex justify-end">\n' +
        '                    <button onclick="toggleModal()" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">\n' +
        '                        Cancel\n' +
        '                    </button>\n' +
        '                    <button id="btn-form-login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">\n' +
        '                        Login\n' +
        '                    </button>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</header>'
}

// Append the Product Modal to the body
(function initializeHeaderScript() {
    const headerScript = CreateHeader();
    document.body.insertAdjacentHTML('beforeend', headerScript);
})();