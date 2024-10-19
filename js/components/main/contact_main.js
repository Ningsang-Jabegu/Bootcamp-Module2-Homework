import { generateCode, disableButton } from '../../randomcodes.js'; 
import { h1, p, section, div, span, form as createForm, fieldset, legend, label, input, textarea, select, option } from '../../html_tags.js';

export function loadContactContent(mainElement) {
    // Create main heading
    const title = h1({ textContent: "Contacting Us" });
    const description = p({
        textContent: "You can drop by the visitors information center at the cliff site that you plan on visiting. They are open 7 days a week from 8.00AM to 5.00PM. You can also contact us directly if you need additional information about the Cliffs, Hours of Operations, Facilities or questions about this site using one of the following:"
    });

    // Create contact information section
    const contactInfoSection = section({ className: "contactinfo" });
    const phoneDiv = div({ className: "phone" });
    phoneDiv.appendChild(span({ textContent: "Phone:" }));
    phoneDiv.appendChild(span({ textContent: "(800) GCLIFFS" }));
    const emailDiv = div({ className: "email" });
    emailDiv.appendChild(span({ textContent: "Email:" }));
    emailDiv.appendChild(span({ textContent: "info@greatcliffs.com" }));

    contactInfoSection.appendChild(phoneDiv);
    contactInfoSection.appendChild(emailDiv);

    // Create contact form
    const formElement = createForm({ action: "/contact", method: "post" }); // Renamed variable
    const fieldsetElement = fieldset();
    const legendElement = legend({ textContent: "Contact Form" });
    
    const textboxDiv = div({ className: "textbox" });
    textboxDiv.appendChild(label({ for: "name", textContent: "Name:" }));
    textboxDiv.appendChild(input({ type: "text", id: "name", name: "name", placeholder: "John Doe" }));
    textboxDiv.appendChild(label({ for: "email", textContent: "Email:" }));
    textboxDiv.appendChild(input({ type: "email", id: "email", name: "email", placeholder: "johndoe@gmail.com" }));
    textboxDiv.appendChild(label({ for: "phone", textContent: "Phone:" }));
    textboxDiv.appendChild(input({ type: "text", id: "phone", name: "phone", placeholder: "xxx-xxx-xxxx" }));

    const radiosDiv = div({ className: "radios" });
    radiosDiv.appendChild(label({ className: "radio", textContent: "How should we contact you?" }));
    radiosDiv.appendChild(input({ type: "radio", id: "contact-email", name: "contact", value: "email", checked: true }));
    radiosDiv.appendChild(label({ for: "contact-email", textContent: "Email" }));
    radiosDiv.appendChild(input({ type: "radio", id: "contact-phone", name: "contact", value: "phone" }));
    radiosDiv.appendChild(label({ for: "contact-phone", textContent: "Phone" }));

    const selectMenuDiv = div({ className: "selectmenu" });
    selectMenuDiv.appendChild(label({ for: "cliff", textContent: "Which Cliff are you inquiring?" }));
    const selectElement = select({ id: "cliff", name: "cliff", className: "drop_down" });
    ["West Cliff", "North Cliff", "East Cliff", "South Cliff"].forEach(optionText => {
        selectElement.appendChild(option({ textContent: optionText }));
    });
    selectMenuDiv.appendChild(selectElement);

    const commentBoxDiv = div({ className: "commentbox" });
    commentBoxDiv.appendChild(label({ for: "comments", textContent: "How did you hear about us:" }));
    commentBoxDiv.appendChild(textarea({ id: "comments", name: "comments" }));

    // Random Codes
    const randomCodeContainer = div({ className: "randomcodeContainer" });
    randomCodeContainer.appendChild(label({ for: "randomcode", textContent: "Enter characters:" }));
    const randomCodeInput = input({ type: "text", id: "codeentered", className: "random_code", name: "randomcode", placeholder: "Enter characters" });
    randomCodeContainer.appendChild(randomCodeInput);
    const codeDisplay = p({ id: "codes" });
    randomCodeContainer.appendChild(codeDisplay);

    // Submit button
    const submitButtonDiv = div({ className: "button" });
    const submitButton = input({ type: "submit", value: "Inquire", id: "submit" });
    submitButtonDiv.appendChild(submitButton);

    // Append all elements to the fieldset
    fieldsetElement.appendChild(legendElement);
    fieldsetElement.appendChild(textboxDiv);
    fieldsetElement.appendChild(radiosDiv);
    fieldsetElement.appendChild(selectMenuDiv);
    fieldsetElement.appendChild(commentBoxDiv);
    fieldsetElement.appendChild(randomCodeContainer);
    fieldsetElement.appendChild(submitButtonDiv);

    // Append fieldset to form
    formElement.appendChild(fieldsetElement);

    // Append all content to mainElement
    mainElement.appendChild(title);
    mainElement.appendChild(description);
    mainElement.appendChild(contactInfoSection);
    mainElement.appendChild(formElement);

    // Generate random code and disable button
    codeDisplay.innerHTML = generateCode();
    disableButton(true, submitButton); // Pass the submit button

    // Add event listener to the code input
    randomCodeInput.addEventListener("input", () => {
        const enteredCode = randomCodeInput.value.trim();
        const generatedCode = codeDisplay.innerHTML.trim();
        disableButton(enteredCode.length !== generatedCode.length || enteredCode !== generatedCode, submitButton); // Pass the submit button
    });
}
