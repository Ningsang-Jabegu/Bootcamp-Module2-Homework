import { main, h1, p, section, div, figure, figcaption, a, img } from "../../html_tags.js";

export function loadCliffContent(mainElement) {
    const h1Element = h1({ textContent: "California's Greatest Cliffs" });
    
    const p1 = p({ 
        textContent: "The greatest cliffs are these four cliffs located in southern California. Each of these cliffs have their own uniqueness and beauty: West Cliff, North Cliff, East Cliff and South Cliff are the pride of California. Each cliff has many amenities to offer visitors such as recreational areas, camping sites, wildlife watch spots and overnight cabins."
    });
    
    const p2 = p({ 
        textContent: "No matter which direction you head from Irvine, California, the sites are easily reached within a 100 mile radius. West Cliff is the most popular among Westcliff University campus students because of its close proximity."
    });
    
    // Section for images
    const imagesSection1 = section({ className: 'images' });
    const imagesSection2 = section({ className: 'images' });
    
    // Array of cliff data
    const cliffs = [
        { name: 'West Cliff', imgSrc: 'images/cliff-west-sea.jpg', altText: 'West Cliff Sea' },
        { name: 'North Cliff', imgSrc: 'images/cliff-north-mountain.jpg', altText: 'North Cliff Mountains' },
        { name: 'East Cliff', imgSrc: 'images/cliff-east-river.jpg', altText: 'East Cliff River' },
        { name: 'South Cliff', imgSrc: 'images/cliff-south-canyon.jpg', altText: 'South Cliff Canyon' }
    ];

    // Create two gallery divs
    const gallery1 = div({ className: 'gallery' });
    const gallery2 = div({ className: 'gallery' });
    const gallery3 = div({ className: 'gallery' });
    const gallery4 = div({ className: 'gallery' });

    // Generate the gallery for each cliff
    cliffs.forEach((cliff, index) => {
        const figureElement = figure();
        const figcaptionElement = figcaption({ textContent: cliff.name });

        const aElement = a({
            href: cliff.imgSrc,
            target: '_blank'
        });

        const imgElement = img({
            src: cliff.imgSrc,
            alt: cliff.altText
        });

        aElement.appendChild(imgElement);
        figureElement.appendChild(figcaptionElement);
        figureElement.appendChild(aElement);

        // Append to the appropriate gallery div
        if (index === 1) {
            gallery1.appendChild(figureElement);
        } else if (index === 2) {
            gallery2.appendChild(figureElement);
        } else if (index === 3) {
            gallery3.appendChild(figureElement);
        } else {
            gallery4.appendChild(figureElement);
        }
    });

    // Append both galleries to the images section
    imagesSection1.appendChild(gallery1);
    imagesSection1.appendChild(gallery2);
    imagesSection2.appendChild(gallery3);
    imagesSection2.appendChild(gallery4);

    // Append content to the main element
    mainElement.appendChild(h1Element);
    mainElement.appendChild(p1);
    mainElement.appendChild(p2);
    mainElement.appendChild(imagesSection1);
    mainElement.appendChild(imagesSection2);
}
