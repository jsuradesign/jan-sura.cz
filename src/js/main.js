import "../scss/main.scss";

import ThemeSwitcher from "./components/ThemeSwitcher";
import BlureHeroImage from "./components/BlurHeroImage";
import CookiesConsent from "./cookieconsent-init";

new CookiesConsent;
new ThemeSwitcher;
new BlureHeroImage;

const copyYear = document.querySelector("#copy-year");
const year = new Date().getFullYear();

copyYear.textContent = year;

console.log("OK");