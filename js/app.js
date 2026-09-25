/* T-02C: Light/Dark theme engine */

const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
const initialTheme = savedTheme === "dark" ? "dark" : "light";

function setTheme(theme) {
  root.dataset.theme = theme;

  localStorage.setItem("theme", theme);

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", theme === "dark");
    themeToggle.textContent =
      theme === "dark"
        ? "Switch to light mode"
        : "Switch to dark mode";
  }
}

setTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme =
      root.dataset.theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
  });
}