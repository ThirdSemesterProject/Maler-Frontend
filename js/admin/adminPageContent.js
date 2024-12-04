export function loadAdminDashboard() {
    const content = `
        <div class="flex">
                <!-- Content -->
                <main class="p-8">
                    <h1 class="text-2xl font-bold text-gray-900 mb-6">Ordre Overblik</h1>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Modtagede -->
                        <div class="bg-white shadow-lg rounded-lg p-6">
                            <h2 class="text-lg font-bold text-gray-800 mb-2">Modtagede</h2>
                            <p class="text-gray-600">Her vil modtagede ordrer blive vist.</p>
                        </div>
                        <!-- Igangværende -->
                        <div class="bg-white shadow-lg rounded-lg p-6">
                            <h2 class="text-lg font-bold text-gray-800 mb-2">Igangværende</h2>
                            <p class="text-gray-600">Her vil igangværende ordrer blive vist.</p>
                        </div>
                        <!-- Afsluttede -->
                        <div class="bg-white shadow-lg rounded-lg p-6">
                            <h2 class="text-lg font-bold text-gray-800 mb-2">Afsluttede</h2>
                            <p class="text-gray-600">Her vil afsluttede ordrer blive vist.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    `;

    // Find main-content-container og tilføj indholdet
    const container = document.getElementById("main-content-container");
    if (container) {
        container.innerHTML = content;
    } else {
        console.error("Container #main-content-container ikke fundet.");
    }
}
loadAdminDashboard();
export function loadAdminSidebar() {
    const sidebarContent = `
        <aside class="w-36 bg-gray-50 shadow-md h-screen py-8 flex flex-col items-center">
            <!-- Overblik -->
            <a href="/admin/overblik" class="mb-8 text-center group">
                <div
                    class="w-24 h-24 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-300">
                    <span class="text-gray-800 font-bold text-sm">Overblik</span>
                </div>
            </a>

            <!-- Tilføj Produkter -->
            <a href="#products" class="mb-8 text-center group" onclick="showProductSection()">
                <div
                    class="w-24 h-24 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-300">
                    <span class="text-gray-800 font-bold text-sm">Tilføj produkter</span>
                </div>
            </a>

            <!-- Admin -->
            <a href="/admin/admin" class="text-center group">
                <div
                    class="w-24 h-24 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-300">
                    <span class="text-gray-800 font-bold text-sm">Admin</span>
                </div>
            </a>
        </aside>
    `;

    // Find eller opret en container til sidebaren
    const sidebarContainer = document.getElementById("sidebar-container");
    if (sidebarContainer) {
        sidebarContainer.innerHTML = sidebarContent;
    } else {
        console.error("Container #sidebar-container ikke fundet.");
    }
}
loadAdminSidebar();

export function loadContent(sectionHTML) {
    const container = document.getElementById("main-content-container");
    if (container) {
        container.innerHTML = sectionHTML;
    } else {
        console.error("Container #main-content-container ikke fundet.");
    }
}
