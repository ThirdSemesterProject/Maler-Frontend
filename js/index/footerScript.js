function addFooter() {
    return `
        <footer class="footer bg-gray-800 text-white p-4">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>KONTAKT OPLYSNINGER</h4>
                        <ul>
                            <li><a href="/">maling.dk</a></li>
                            <li><a href="/">Ring til os på</a></li>
                            <li><a href="/">Skriv til os på mail</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>INFORMATION</h4>
                        <ul>
                            <li><a href="#about" id="about-link">Om os</a></li>
                            <li><a href="/">Handelsbetingelser</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Hjælp & kontakt</h4>
                        <ul>
                            <li><a href="/">Kontakt os</a></li>
                            <li><a href="/">Hyppige spørgsmål</a></li>
                            <li><a href="/">Mere information</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Følg os på!</h4>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom text-center">
                <p>© maling.dk - 2024. All Rights Reserved</p>
            </div>
        </footer>
    `;
}

// Tilføj footeren
(function initializeFooterScript() {
    const footerHTML = addFooter();
    document.body.insertAdjacentHTML("beforeend", footerHTML);
})();