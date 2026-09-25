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

const portfolioContent = document.querySelector("#portfolio-content");

const projectData = [
  {
    title: "TaskFlow",
    summary:
      "A task-management web application designed to organize daily activities using a structured calendar-based interface.",
    tags: ["JavaScript", "CSS", "UX"],
    status: "Completed",
  },
  {
    title: "Developer Portfolio",
    summary:
      "An accessibility-focused developer portfolio demonstrating semantic HTML, responsive design, and accessible interaction.",
    tags: ["HTML5", "Accessibility", "Responsive"],
    status: "Live",
  },
  {
    title: "Data Insights",
    summary:
      "A reporting dashboard for summarizing key metrics and trends in a clear and actionable layout.",
    tags: ["React", "Charts", "Analytics"],
    status: "Prototype",
  },
];

function renderLiveProjects() {
  if (!portfolioContent) return;

  portfolioContent.innerHTML = projectData
    .map(
      (project, index) => `
        <li class="project-card">
          <article aria-labelledby="project-${index}-heading">
            <h3 id="project-${index}-heading">${project.title}</h3>
            <p>${project.summary}</p>
            <ul class="project-meta" aria-label="${project.title} technology tags">
              ${project.tags
                .map((tag) => `<li class="project-badge">${tag}</li>`)
                .join("")}
              <li class="project-badge project-badge--status">${project.status}</li>
            </ul>
            <a href="#">View ${project.title} Project</a>
          </article>
        </li>
      `
    )
    .join("");
}

if (portfolioContent) {
  window.setTimeout(renderLiveProjects, 900);
}
