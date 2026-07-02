(function() {
    function getTheme() {
        return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    }

    function setTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem("site-theme", theme);
        } catch (error) {
            // Theme still applies for the current page when storage is unavailable.
        }

        document.querySelectorAll(".theme-toggle").forEach(function(button) {
            var isDark = theme === "dark";
            button.setAttribute("aria-pressed", String(isDark));
            button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
            button.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");

            var icon = button.querySelector("i");
            if (icon) {
                icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
            }
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        setTheme(getTheme());

        document.querySelectorAll(".theme-toggle").forEach(function(button) {
            button.addEventListener("click", function() {
                setTheme(getTheme() === "dark" ? "light" : "dark");
            });
        });
    });
})();
