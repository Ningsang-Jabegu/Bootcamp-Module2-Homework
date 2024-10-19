import { footer, div, p, a } from "../html_tags.js";

// Function to dynamically generate the footer
export function loadFooter() {
  // Create the footer element
  const footerElement = footer();

  // Create the 'nondisclaimer' div
  const nonDisclaimerDiv = div({ id: "nondisclaimer" });

  // Create the copyright information div
  const copyDiv = div({ className: "copy", textContent: "© Copyright 2020 :: bootcamp-module2-homework.vercel.app" });

  // Create the social media links div
  const socialDiv = div({ className: "social" });

  // Social media links
  const facebookLink = a({
    href: "https://www.facebook.com/ningsang.jabegu/",
    className: "fa fa-facebook",
    ariaLabel: "Facebook profile of this site developer.",
    target: "next_tab"
  });

  const instagramLink = a({
    href: "https://www.instagram.com/nh_jabegu/",
    className: "fa fa-instagram",
    ariaLabel: "Instagram profile of this site developer.",
    target: "next_tab"
  });

  const twitterLink = a({
    href: "https://twitter.com/JabeguNingsang",
    className: "fa fa-twitter",
    ariaLabel: "Twitter profile of this site developer.",
    target: "next_tab"
  });

  // Append social media links to the socialDiv
  socialDiv.appendChild(facebookLink);
  socialDiv.appendChild(instagramLink);
  socialDiv.appendChild(twitterLink);

  // Append copyright and social divs to 'nondisclaimer' div
  nonDisclaimerDiv.appendChild(copyDiv);
  nonDisclaimerDiv.appendChild(socialDiv);

  // Create the 'disclaimer' div
  const disclaimerDiv = div({ id: "disclaimer" });

  // Create the disclaimer paragraph
  const disclaimerText = p({
    textContent: "This website is designed and created solely for educational purposes only at Westcliff University. All contents are not intended for any commercial gain or use."
  });

  // Append disclaimer paragraph to the disclaimer div
  disclaimerDiv.appendChild(disclaimerText);

  // Append the 'nondisclaimer' and 'disclaimer' divs to the footer element
  footerElement.appendChild(nonDisclaimerDiv);
  footerElement.appendChild(disclaimerDiv);

  // Insert the footer element into the document body
  document.body.insertAdjacentElement('beforeend', footerElement);
}
