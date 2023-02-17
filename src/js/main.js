import "../scss/main.scss"

import ThemeSwitcher from "./components/ThemeSwitcher";

new ThemeSwitcher;

const copyYear = document.querySelector("#copy-year");
const year = new Date().getFullYear();

copyYear.textContent = year;

console.log("OK");