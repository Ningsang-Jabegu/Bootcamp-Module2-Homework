// Function to generate a combination of characters
export const generateCode = () => {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    let code = '';
    for (let i = 0; i < 8; i++) {
        const char = Math.floor(Math.random() * str.length);
        code += str.charAt(char);
    }
    return code;
};

// Function to enable/disable button
export const disableButton = (btnvalue, submitButton) => {
    submitButton.disabled = btnvalue;
    if (btnvalue) {
        submitButton.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        submitButton.style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        submitButton.style.backgroundColor = "rgba(73, 119, 209, 1)";
        submitButton.style.color = "rgba(255, 255, 255, 1)";
    }
};
