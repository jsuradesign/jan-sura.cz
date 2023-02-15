import "../scss/main.scss"

const copyYear = document.querySelector("#copy-year");
const year = new Date().getFullYear();

copyYear.textContent = year;

console.log("OK");