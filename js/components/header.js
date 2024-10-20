import { header, div, img, nav, ul, li, a } from "../html_tags.js";
import { currentTime } from "../digiclock.js";

export function loadHeader(activePage) {
  const menuItems = [
    { name: "home", link: "index.html" },
    { name: "cliff", link: "cliff.html" },
    { name: "activities", link: "activities.html" },
    { name: "contact", link: "contact.html" },
  ];

  const headerElement = header();

  const mainHeader = div({ className: "main-header" });

  const logoDiv = div({ className: "logo" });

  const logoImg = img({
    src: "images/logo.png",
    alt: "Great Cliffs Logo",
    width: 125,
  });

  logoDiv.appendChild(logoImg);
  mainHeader.appendChild(logoDiv);

  const navElement = nav({
    className: "main-menu",
    ariaLabel: "Main Navigation",
  });

  const ulElement = ul();

  menuItems.forEach((item) => {
    const liElement = li({
      className: activePage === item.name ? "active" : "",
    });

    const aElement = a({
      href: item.link,
      textContent: item.name,
    });

    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  navElement.appendChild(ulElement);
  mainHeader.appendChild(navElement); // Append navElement to mainHeader

  headerElement.appendChild(mainHeader);

  const clockDiv = div({ id: "clock", textContent: currentTime() });
  setInterval(() => {
    clockDiv.textContent = currentTime();
  }, 1000);
  headerElement.appendChild(clockDiv);

  document.body.insertAdjacentElement("afterbegin", headerElement);
}
