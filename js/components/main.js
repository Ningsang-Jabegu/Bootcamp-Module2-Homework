import { main, h1, h2, p, section, div, span, form, fieldset, legend, label, input, textarea, select, option, table, caption, thead, tbody, tr, th, td, figure, figcaption, a, img } from "../html_tags.js";
import { loadHomeContent } from "./main/home_main.js";
import { loadCliffContent } from "./main/cliff_main.js";
import { loadActivitiesContent } from "./main/activities_main.js";
import { loadContactContent } from "./main/contact_main.js";

// Function to dynamically generate the main content based on the page
export function loadMainContent(page) {
    // Create the main element
    const mainElement = main();

    if (page === 'home') {
        loadHomeContent(mainElement);

    } else if (page === 'contact') {
        loadContactContent(mainElement);

    } else if (page === 'cliff') {
        loadCliffContent(mainElement);
    }
     else if (page === 'activities') {
        loadActivitiesContent(mainElement);
    }

    // Insert the generated main content into the body after the header
    const header = document.querySelector('header');
    header.insertAdjacentElement('afterend', mainElement);
}

// Example usage: loadMainContent('home'); // Load content for home page
