function addFooter() {
    return '    <footer class="footer">\n' +
        '        <div class="container">\n' +
        '            <div class="row">\n' +
        '                <div class="footer-col">\n' +
        '                    <h4>KONTAKT OPLYSNINGER</h4>\n' +
        '                    <ul>\n' +
        '                        <li><a href="/">maling.dk</a></li>\n' +
        '                        <li><a href="/">Ring til os på</a></li>\n' +
        '                        <li><a href="/">Skriv til os på mail</a></li>\n' +
        '                    </ul>\n' +
        '                </div>\n' +
        '                <div class="footer-col">\n' +
        '                    <h4>INFORMATION</h4>\n' +
        '                    <ul>\n' +
        '                        <li><a href="/">Om os</a></li>\n' +
        '                        <li><a href="/">Handelsbetingelser</a></li>\n' +
        '                        <li><a href="/">###</a></li>\n' +
        '                        <li><a href="/">###</a></li>\n' +
        '                    </ul>\n' +
        '                </div>\n' +
        '                <div class="footer-col">\n' +
        '                    <h4>Hjælp & kontakt</h4>\n' +
        '                    <ul>\n' +
        '                        <li><a href="/">Kontakt os</a></li>\n' +
        '                        <li><a href="/">Hyppige spørgsmål</a></li>\n' +
        '                        <li><a href="/">Mere information</a></li>\n' +
        '                    </ul>\n' +
        '                </div>\n' +
        '                <div class="footer-col">\n' +
        '                    <h4>Følg os på!</h4>\n' +
        '                    <div class="social-links">\n' +
        '                        <a href="#"><i class="fab fa-facebook-f"></i></a>\n' +
        '                        <a href="#"><i class="fab fa-instagram"></i></a>\n' +
        '                        <a href="#"><i class="fab fa-twitter"></i></a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="footer-bottom">\n' +
        '            <p>© Scrapbasket.dk - 2024. All Rights Reserved</p>\n' +
        '        </div>\n' +
        '    </footer>';
}

// Selvudførende funktion for at tilføje footeren
(function initializeFooterScript() {
    const footerHTML= addFooter();
    document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
