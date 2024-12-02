function addFooter() {

    const footerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>FIRMAOPLYSNINGER</h4>
                        <ul>
                            <li><a href="/">Maling.dk</a></li>
                            <li><a href="/">Ring til os på</a></li>
                            <li><a href="/">Skriv til os på mail</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>INFORMATION</h4>
                        <ul>
                            <li><a href="/">Om os</a></li>
                            <li><a href="/">Handelsbetingelser</a></li>
                            <li><a href="/">###</a></li>
                            <li><a href="/">###</a></li>
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
            <div class="footer-bottom">
                <p>© Maling.dk - 2024. All Rights Reserved</p>
            </div>
        </footer>
    `;

    // Selvudførende funktion for at tilføje footeren
    (function initializeFooterScript() {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    })();
}
