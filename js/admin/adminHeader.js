function createAdminHeader() {
    return '<!-- adminHeader -->' +
        '<header class="bg-white shadow-md py-4 px-8 flex justify-between items-center">\n' +
        '            <div class="flex items-center">\n' +
        '                <div class="bg-gray-200 p-2 rounded-full">\n' +
        '                    <span class="text-gray-800 font-bold">Logo</span>\n' +
        '                </div>\n' +
        '                <span class="ml-4 font-semibold text-lg tracking-wide">Admin Panel</span>\n' +
        '            </div>\n' +
        '            <nav class="bg-white-100 py-4">\n' +
        '                <div class="container mx-auto flex justify-between items-center">\n' +
        '                    <div>\n' +
        '                        <button id="btn-signout" class="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full">\n' +
        '                            Sign out\n' +
        '                        </button>\n' +
        '                        <button id="btn-fetch" hidden\n' +
        '                                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">\n' +
        '                            Fetch data\n' +
        '                        </button>\n' +
        '                        <button id="btn-get-secret"\n' +
        '                                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" hidden>\n' +
        '                            Get Secret\n' +
        '                        </button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </nav>\n' +
        '        </header>'

}

(function initializeAdminHeaderScript() {
    const headerScript = createAdminHeader();
    document.body.insertAdjacentHTML('beforeend', headerScript);
})();

