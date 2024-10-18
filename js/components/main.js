export function loadMainContent(page) {
    let mainHTML = '';
    
    if (page === 'home') {
        mainHTML = `
            <main>
                <h1>Introducing California's Greatest Cliffs</h1>
                <!-- Question no. 1 starts here. -->
                <h2>What is so unique about California cliffs?</h2>
                <!-- Answer of Question no. 1 starts here. -->
                <p>California cliffs are one of a kind in the United States where no cliffs are as magnificent and beautiful as
                them. And California is the only state that have cliffs that fronts all possible environments: sea, river,
                mountains and canyons. There are four such individual unique cliffs: West Cliff, North Cliff, East Cliff and
                South Cliff. All offer fantastic overlooking views, recreational areas, camping sites, wildlife watch spots and
                overnight cabins.</p>
                <!-- Answer no. 1 ends here. -->

                <!-- Question no. 2 starts here. -->
                <h2>Where are these cliffs?</h2>
                <!-- Answer of Question no. 2 starts here. -->
                <p>Located within a 100 mile radius from Irvine, California, they can be reached by roads easily. The closest
                cliff to Irvine is West Cliff, which is the most popular and most visited.</p>
                <!-- Answer no. 2 ends here. -->
            </main>
        `;
    } else if (page === 'contact') {
        mainHTML = `
            <main>
                <h1>Contacting Us</h1>
                <p>You can drop by the visitors information center at the cliff site that you plan on visiting. They are open
                7 days a week from 8.00AM to 5.00PM. You can also contact us directly if you need additional information
                about the Cliffs, Hours of Operations, Facilities or questions about this site using one of the following:</p>

                <!-- Contact Information -->
                <section class="contactinfo">
                    <div class="phone">
                        <span>Phone:</span>
                        <span>(800)GCLIFFS</span>
                    </div>
                    <div class="email">
                        <span>Email:</span>
                        <span>info@greatcliffs.com</span>
                    </div>
                </section>

                <!-- Contact Form -->
                <form action="/contact" method="post">
                    <fieldset>
                        <legend>Contact Form</legend>
                        <div class="textbox">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="John Doe">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="johndoe@gmail.com">
                            <label for="phone">Phone:</label>
                            <input type="text" id="phone" name="phone" placeholder="xxx-xxx-xxxx">
                        </div>

                        <div class="radios">
                            <label class="radio">How should we contact you?</label>
                            <input type="radio" id="contact-email" name="contact" value="email" checked>
                            <label for="contact-email">Email</label>
                            <input type="radio" id="contact-phone" name="contact" value="phone">
                            <label for="contact-phone">Phone</label>
                        </div>

                        <div class="selectmenu">
                            <label for="cliff">Which Cliff are you inquiring?</label>
                            <select id="cliff" name="cliff" class="drop_down">
                                <option>West Cliff</option>
                                <option>North Cliff</option>
                                <option>East Cliff</option>
                                <option>South Cliff</option>
                            </select>
                        </div>

                        <div class="commentbox">
                            <label for="comments">How did you hear about us:</label>
                            <textarea id="comments" name="comments"></textarea>
                        </div>

                        <!-- Random Codes -->
                        <div class="randomcodeContainer">
                            <label for="randomcode">Enter characters:</label>
                            <input type="text" id="randomcode" class="random_code" name="randomcode" placeholder="Enter characters">
                            <p id="codes"></p>
                        </div>
                        <div class="button">
                            <input type="submit" value="Inquire">
                        </div>
                    </fieldset>
                </form>
            </main>
        `;
    } else if (page === 'cliff') {
        mainHTML = `
            <main>
                <h1>California's Greatest Cliffs</h1>
                <p>The greatest cliffs are these four cliffs located in southern California. Each of these cliffs have their own
                uniqueness and beauty: West Cliff, North Cliff, East Cliff and South Cliff are the pride of California. Each
                cliff has many amenities to offer visitors such as recreational areas, camping sites, wildlife watch spots
                and overnight cabins.</p>
                <p>No matter which direction you head from Irvine, California, the sites are easily reached within a 100 mile
                radius. West Cliff is the most popular among Westcliff University campus students because of its close
                proximity.</p>

                <!-- Images -->
                <section class="images">
                    <div class="gallery">
                        <figure>
                            <figcaption><strong>West Cliff</strong></figcaption>
                            <a target="_blank" href="images/cliff-west-sea.jpg">
                                <img src="images/cliff-west-sea.jpg" alt="West Cliff Sea">
                            </a>
                        </figure>
                    </div>
                    <div class="gallery">
                        <figure>
                            <figcaption><strong>North Cliff</strong></figcaption>
                            <a target="_blank" href="images/cliff-north-mountain.jpg">
                                <img src="images/cliff-north-mountain.jpg" alt="North Cliff Mountains">
                            </a>
                        </figure>
                    </div>
                </section>
                <section class="images">
                    <div class="gallery">
                        <figure>
                            <figcaption><strong>East Cliff</strong></figcaption>
                            <a target="_blank" href="images/cliff-east-river.jpg">
                                <img src="images/cliff-east-river.jpg" alt="East Cliff River">
                            </a>
                        </figure>
                    </div>
                    <div class="gallery">
                        <figure>
                            <figcaption><strong>South Cliff</strong></figcaption>
                            <a target="_blank" href="images/cliff-south-canyon.jpg">
                                <img src="images/cliff-south-canyon.jpg" alt="South Cliff Canyon">
                            </a>
                        </figure>
                    </div>
                </section>
            </main>
        `;
    } else if (page === 'activities') {
        mainHTML = `
            <main>
                <h1>Activities</h1>
                <p>There are many planned activities at all the cliff sites. Some are scheduled daily, weekly, monthly, and yearly. These activities are not, however, run by the state park and recreational department. They are operated and managed by private vendors but are partners with the state department. Therefore, for schedule inquiries or information, please contact them directly. For a list of activities, please refer to the table below:</p>
                
                <!-- Table starts here -->
                <table aria-describedby="activities-description">
                    <caption id="activities-description">Activities at the Cliffs</caption>
                    <thead>
                        <tr>
                            <th>Activity</th>
                            <th>West Cliff</th>
                            <th>North Cliff</th>
                            <th>East Cliff</th>
                            <th>South Cliff</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hiking</td>
                            <td>College Hikes</td>
                            <td>Family Fun</td>
                            <td>Treasure Trails</td>
                            <td>Canyon Explorer</td>
                        </tr>
                        <tr>
                            <td>Kayak</td>
                            <td>Western Kayak Meetup</td>
                            <td>Not Available</td>
                            <td>Youth Kayaking</td>
                            <td>Kayak Down</td>
                        </tr>
                        <tr>
                            <td>Skydiving</td>
                            <td>Seacliff Diving</td>
                            <td>Sky is the limit</td>
                            <td>Not Available</td>
                            <td>Sky Diving for Beginners</td>
                        </tr>
                        <tr>
                            <td>Biking</td>
                            <td>Bicycle for One</td>
                            <td>Not Available</td>
                            <td>Bike Meetup Group</td>
                            <td>Not Available</td>
                        </tr>
                        <tr>
                            <td>Camping</td>
                            <td>Youth Camp</td>
                            <td>Rent a Tent</td>
                            <td>Campground Adventure</td>
                            <td>Sunset Camping</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        `;
    }

    // Insert the generated main content into the body after the header
    const header = document.querySelector('header');
    const mainElement = document.createElement('main');
    mainElement.innerHTML = mainHTML;
    header.insertAdjacentElement('afterend', mainElement);
}

// Example usage:
// loadMainContent('home');  // Load content for the index.html page (home)
