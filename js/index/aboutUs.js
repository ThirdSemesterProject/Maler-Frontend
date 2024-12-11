// Funktion til at generere "Om os"-indhold
function renderAboutPage() {
    // Skjul sektioner, der ikke skal vises
    const heroSection = document.getElementById('heroSection');
    const infoSection = document.querySelector('section.bg-white');
    const categorySection = document.getElementById('categories-section');

    if (heroSection) heroSection.style.display = 'none';
    if (infoSection) infoSection.style.display = 'none';
    if (categorySection) categorySection.style.display = 'none';

    // Ryd hovedindhold
    const mainContentContainer = document.getElementById('main-content-container');
    mainContentContainer.innerHTML = '';

    // Indsæt "Om os"-indhold
    mainContentContainer.innerHTML = `
        <section class="bg-gray-50 py-12">
            <div class="container mx-auto px-4">
                <!-- Header -->
                <div class="text-center mb-8">
                    <h2 class="text-4xl font-bold text-gray-800">Firma Profil</h2>
                    <p class="text-lg text-gray-600 mt-2">Hvem er vi?</p>
                </div>

                <!-- Intro text -->
                <div class="max-w-3xl mx-auto text-center mb-12">
                    <p class="text-gray-700">
                        MALING.DK er i dag 7 forretninger fordelt i Storkøbenhavn, med afdelinger på Amager, Nørrebro,
                        Frederiksberg, København SV, Islandsbrygge, Vesterbro samt i Hørsholm. Vores mål er, at være Grønne,
                        Billige og Professionelle. Det vil vi kort beskrive nedenfor.
                    </p>
                </div>

                <!-- Grid layout -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Grøn -->
                    <div class="bg-white p-6 shadow-lg rounded-lg">
                        <h3 class="text-2xl font-semibold text-green-600 mb-4">Grøn</h3>
                        <p class="text-gray-700">
                            Som vores hovedleverandør af maling, træbeskyttelse og lak har vi valgt Beck & Jørgensen A/S. Dette
                            valg er bevidst, da minimum 97% af Beck & Jørgensens produkter består af miljøvenlige kvaliteter.
                        </p>
                        <p class="text-gray-700 mt-2 font-semibold">
                            Med andre ord - Godkendt med EU's miljøblomst, og så leveres den i alle de farver, du måtte ønske dig.
                        </p>
                    </div>

                    <!-- Billig -->
                    <div class="bg-white p-6 shadow-lg rounded-lg">
                        <h3 class="text-2xl font-semibold text-yellow-400 mb-4">Billig</h3>
                        <p class="text-gray-700">
                            Når kvaliteten er helt i top, går dit arbejde hurtigere og nemmere, og resultatet holder også i
                            længden. Derfor siger vi: Billig pris og høj kvalitet! Beck & Jørgensens produkter er fremstillet
                            for at tilfredsstille den professionelle maler.
                        </p>
                    </div>

                    <!-- Professionel -->
                    <div class="bg-white p-6 shadow-lg rounded-lg">
                        <h3 class="text-2xl font-semibold text-blue-700 mb-4">Professionel</h3>
                        <p class="text-gray-700">
                            Hos MALING.DK står der altid en faguddannet bag disken. MALING.DK sætter en stor ære i at tilbyde
                            professionel rådgivning for det bedste resultat!
                        </p>
                        <p class="text-gray-700 mt-2">
                            Derfor siger vi: Professionel rådgivning for det bedste resultat! Det gavner ingen, at du har fået
                            den bedste kvalitet til den billigste pris - og så ikke ved, hvad den skal bruges til eller hvordan
                            den benyttes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Tilføj eventlistener, når DOM er klar
document.addEventListener('DOMContentLoaded', function () {
    const aboutLink = document.querySelector('a[href="#about"]');
    if (aboutLink) {
        aboutLink.addEventListener('click', function (e) {
            e.preventDefault();
            renderAboutPage();
        });
    }
});