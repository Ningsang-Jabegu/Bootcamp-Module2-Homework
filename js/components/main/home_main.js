import { h1, h2, p } from "../../html_tags.js";

export function loadHomeContent(mainElement) {
    const title = h1({ textContent: "Introducing California's Greatest Cliffs" });
    const question1 = h2({ textContent: "What is so unique about California cliffs?" });
    const answer1 = p({
        textContent: "California cliffs are one of a kind in the United States where no cliffs are as magnificent and beautiful as them. And California is the only state that have cliffs that fronts all possible environments: sea, river, mountains and canyons. There are four such individual unique cliffs: West Cliff, North Cliff, East Cliff and South Cliff. All offer fantastic overlooking views, recreational areas, camping sites, wildlife watch spots and overnight cabins."
    });
    const question2 = h2({ textContent: "Where are these cliffs?" });
    const answer2 = p({
        textContent: "Located within a 100 mile radius from Irvine, California, they can be reached by roads easily. The closest cliff to Irvine is West Cliff, which is the most popular and most visited."
    });

    mainElement.appendChild(title);
    mainElement.appendChild(question1);
    mainElement.appendChild(answer1);
    mainElement.appendChild(question2);
    mainElement.appendChild(answer2);
}