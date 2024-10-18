// Function to dynamically generate the entire Partners section
export function loadPartnersSection() {
    // Define the section and the heading
    const partnersSection = `
        <section aria-labelledby="partners-heading">
            <h2 id="partners-heading">Our Partners</h2>
            <ul id="partners"></ul>
        </section>
    `;

    // Insert the partners section into the document body (or a specific location)
    document.body.insertAdjacentHTML('beforeend', partnersSection);

    // Now generate the partner list items dynamically
    const photos = [];
    const fileNames = [];
    const imageList = [];
    const openList = "<li class='partner'>";
    const closeList = "</li>";

    // Loop to generate file names and img tags for partners
    for (let i = 0; i < 6; i++) {
        fileNames.push(`partner-${i + 1}`);
        photos.push(`<img src='images/partners_img/${fileNames[i]}.png' alt='Partner ${i + 1}'>`);
        const image = openList + photos[i] + closeList;
        imageList.push(image);
    }

    // Display all the image codes stored in the array in the <ul id="partners">
    document.getElementById("partners").innerHTML = imageList.join("");
}

// Call the function to generate the entire partners section and list
// loadPartnersSection();
