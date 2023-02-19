import "../scss/main.scss";

import ThemeSwitcher from "./components/ThemeSwitcher";
import BlureHeroImage from "./components/BlurHeroImage";
import CookiesConsent from "./cookieconsent-init";
import MenuToggle from "./components/MenuToggle";

new CookiesConsent;
new ThemeSwitcher;
new MenuToggle;
new BlureHeroImage;

const copyYear = document.querySelector("#copy-year");
const year = new Date().getFullYear();

copyYear.textContent = year;

console.log("OK");