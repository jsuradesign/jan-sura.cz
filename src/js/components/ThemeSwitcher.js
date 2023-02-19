function ThemeSwitcher() {
    const toggle = document.querySelector(".theme-switcher");
    let storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-theme: dark)").matches ? "dark" : "light");
    const faviconEl = document.querySelector("link[rel=icon]");

    if (storedTheme) {
        document.documentElement.setAttribute("data-theme", storedTheme);
        faviconEl.setAttribute("href", "favicon-" + storedTheme + ".ico");
    }

    toggle.onclick = function() {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let targetTheme = "light";
        let targetFavicon = "light";

        if (currentTheme === "light") {
            targetTheme = "dark";
            targetFavicon = "dark";
        }

        document.documentElement.setAttribute("data-theme", targetTheme);
        localStorage.setItem("theme", targetTheme);
        faviconEl.setAttribute("href", "favicon-" + targetTheme + ".ico");

        // console.log("Clicked on ThemeSwitcher");
    }
}

export default ThemeSwitcher;