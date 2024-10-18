import { loadHeader } from "../components/header.js";
import { loadMainContent } from "../components/main.js";
import { loadPartnersSection } from "../components/partner.js";
import { loadFooter } from "../components/footer.js";

export function loadPage(pageName) {
    loadHeader(pageName);
    loadMainContent(pageName);
    loadPartnersSection();
    loadFooter();
}

// Call the function with the appropriate page name
const pageName = document.body.id; // Assuming each page has a unique id in the body
loadPage(pageName.toLowerCase());
