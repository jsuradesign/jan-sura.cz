function ThemeSwitcher() {
    const toggle = document.querySelector(".theme-switcher");
    let storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-theme: dark)").matches ? "dark" : "light");

    if (storedTheme) {
        document.documentElement.setAttribute("data-theme", storedTheme);
    }

    toggle.onclick = function() {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let targetTheme = "light";

        if (currentTheme === "light") {
            targetTheme = "dark";
        }

        document.documentElement.setAttribute("data-theme", targetTheme);
        localStorage.setItem("theme", targetTheme);

        // console.log("Clicked on ThemeSwitcher");
    }
}

export default ThemeSwitcher;