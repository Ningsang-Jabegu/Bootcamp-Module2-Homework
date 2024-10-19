import { main, h1, p, section, table, caption, thead, tbody, tr, th, td } from "../../html_tags.js";

export function loadActivitiesContent(mainElement) {
    const title = h1({ textContent: "Activities" });
    const description = p({
        textContent: "There are many planned activities at all the cliff sites. Some are scheduled daily, weekly, monthly, and yearly. These activities are not, however, run by the state park and recreational department."
    });

    const tableElem = table();
    const captionElem = caption({ textContent: "Activities at the Cliffs" });
    const theadElem = thead();
    const tbodyElem = tbody();

    const headerRow = tr();
    headerRow.appendChild(th({ textContent: "Activity" }));
    headerRow.appendChild(th({ textContent: "West Cliff" }));
    headerRow.appendChild(th({ textContent: "North Cliff" }));
    headerRow.appendChild(th({ textContent: "East Cliff" }));
    headerRow.appendChild(th({ textContent: "South Cliff" }));
    theadElem.appendChild(headerRow);

    const activities = [
        { name: "Hiking", west: "College Hikes", north: "Family Fun", east: "Treasure Trails", south: "Canyon Explorer" },
        { name: "Kayak", west: "Western Kayak Meetup", north: "Not Available", east: "Youth Kayaking", south: "Kayak Down" },
        { name: "Skydiving", west: "Seacliff Diving", north: "Sky is the limit", east: "Not Available", south: "Sky Diving for Beginners" },
        { name: "Biking", west: "Bicycle for One", north: "Not Available", east: "Bike Meetup Group", south: "Not Available" },
        { name: "Camping", west: "Youth Camp", north: "Rent a Tent", east: "Campground Adventure", south: "Sunset Camping" }
    ];

    activities.forEach(activity => {
        const row = tr();
        row.appendChild(td({ textContent: activity.name }));
        row.appendChild(td({ textContent: activity.west }));
        row.appendChild(td({ textContent: activity.north }));
        row.appendChild(td({ textContent: activity.east }));
        row.appendChild(td({ textContent: activity.south }));
        tbodyElem.appendChild(row);
    });

    tableElem.appendChild(captionElem);
    tableElem.appendChild(theadElem);
    tableElem.appendChild(tbodyElem);

    mainElement.appendChild(title);
    mainElement.appendChild(description);
    mainElement.appendChild(tableElem);
}
