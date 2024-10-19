// Define functions to dynamically create elements with optional attributes
export const header = (attributes = {}) => createElement("header", attributes);
export const div = (attributes = {}) => createElement("div", attributes);
export const img = (attributes = {}) => createElement("img", attributes);
export const nav = (attributes = {}) => createElement("nav", attributes);
export const ul = (attributes = {}) => createElement("ul", attributes);
export const li = (attributes = {}) => createElement("li", attributes);
export const a = (attributes = {}) => createElement("a", attributes);
export const p = (attributes = {}) => createElement("p", attributes);
export const footer = (attributes = {}) => createElement("footer", attributes);
export const section = (attributes = {}) => createElement("section", attributes);
export const figure = (attributes = {}) => createElement("figure", attributes);
export const figcaption = (attributes = {}) => createElement("figcaption", attributes);
export const main = (attributes = {}) => createElement("main", attributes);
export const h1 = (attributes = {}) => createElement("h1", attributes);
export const h2 = (attributes = {}) => createElement("h2", attributes);
export const span = (attributes = {}) => createElement("span", attributes);
export const form = (attributes = {}) => createElement("form", attributes);
export const fieldset = (attributes = {}) => createElement("fieldset", attributes);
export const legend = (attributes = {}) => createElement("legend", attributes);
export const input = (attributes = {}) => createElement("input", attributes);
export const label = (attributes = {}) => createElement("label", attributes);
export const select = (attributes = {}) => createElement("select", attributes);
export const option = (attributes = {}) => createElement("option", attributes);
export const textarea = (attributes = {}) => createElement("textarea", attributes);
export const table = (attributes = {}) => createElement("table", attributes);
export const thead = (attributes = {}) => createElement("thead", attributes);
export const tbody = (attributes = {}) => createElement("tbody", attributes);
export const tr = (attributes = {}) => createElement("tr", attributes);
export const th = (attributes = {}) => createElement("th", attributes);
export const td = (attributes = {}) => createElement("td", attributes);
export const caption = (attributes = {}) => createElement("caption", attributes);


// Generic function to create elements with attributes
function createElement(tag, attributes) {
  const element = document.createElement(tag);
  Object.keys(attributes).forEach((key) => {
    element[key] = attributes[key];
  });
  return element;
}
