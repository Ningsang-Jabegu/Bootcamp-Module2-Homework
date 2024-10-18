export function loadHeader(activePage) {
  const menuItems = [
    { name: "home", label: "Home", link: "index.html" },
    { name: "cliff", label: "Cliffs", link: "cliff.html" },
    { name: "activities", label: "Activities", link: "activities.html" },
    { name: "contact", label: "Contact", link: "contact.html" },
  ];

  const menuHTML = menuItems
    .map(
      (item) => `
        <li class="${activePage === item.name ? "active" : ""}">
            <a href="${item.link}">${item.label}</a>
        </li>
    `
    )
    .join("");

  const headerHTML = `
        <!-- Header begins here -->
        <header>
            <!-- Division includes Logo -->
            <div class="main-header">
                <div class="logo">
                    <img src="images/logo.png" alt="Great Cliffs Logo" width="125">
                </div>
            </div>
            <!-- Logo division ends here -->

            <!-- Navigation Bar starts here -->
            <nav class="main-menu" aria-label="Main Navigation">
                <ul>
                    <!-- Menu listed in navigation bar -->
                    ${menuHTML}
                    <!-- Menu list end here -->
                </ul>
            </nav>
            <!-- Navigation ends here -->

            <!-- Digital Clock Display -->
            <div id="clock"></div>
        </header>
        <!-- Header ends here -->
    `;

  // Insert the generated header into the document body first
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

}
