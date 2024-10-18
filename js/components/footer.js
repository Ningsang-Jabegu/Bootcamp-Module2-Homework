// Function to dynamically generate the footer
export function loadFooter() {
    // Define the footer HTML structure
    const footerHTML = `
        <footer>
            <div id="nondisclaimer">
                <!-- Copyright Information -->
                <div class="copy">&copy; Copyright 2020 :: GreatCliffs.com</div>
                <div class="social">
                    <!-- Social Media links here -->
                    <a href="#" class="fa fa-facebook" aria-label="Facebook"></a>
                    <a href="#" class="fa fa-instagram" aria-label="Instagram"></a>
                    <a href="#" class="fa fa-twitter" aria-label="Twitter"></a>
                </div>
            </div>
            <!-- Disclaimer information starts here -->
            <div id="disclaimer">
                <p>This website is designed and created solely for educational purposes only at Westcliff University. All contents are not intended for any commercial gain or use.</p>
            </div>
            <!-- Disclaimer information ends here -->
        </footer>
    `;

    // Insert the footer HTML into the document body (or a specific location)
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Call the function to generate the footer
// loadFooter();
