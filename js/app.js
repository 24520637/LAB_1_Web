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
const projectSection = document.querySelector("#projects");

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

function renderLoadingState() {
  if (!portfolioContent) return;

  portfolioContent.innerHTML = [
    "<li class='skeleton-card' aria-hidden='true'><span class='skeleton skeleton-avatar'></span><span class='skeleton skeleton-title'></span><span class='skeleton skeleton-text'></span><span class='skeleton skeleton-text'></span><span class='skeleton skeleton-text-short'></span></li>",
    "<li class='skeleton-card' aria-hidden='true'><span class='skeleton skeleton-avatar'></span><span class='skeleton skeleton-title'></span><span class='skeleton skeleton-text'></span><span class='skeleton skeleton-text-short'></span></li>",
  ].join("");
}

function renderEmptyState() {
  if (!portfolioContent) return;

  portfolioContent.innerHTML = `
    <li class="state-message empty-state" role="status">
      <h3>No projects available.</h3>
      <p>There are no portfolio projects to show right now.</p>
    </li>
  `;
}

function renderErrorState() {
  if (!portfolioContent) return;

  portfolioContent.innerHTML = `
    <li class="state-message error-state" role="alert">
      <h3>Something went wrong.</h3>
      <p>We couldn't load the projects. Please try again.</p>
      <button type="button" class="retry-button">Try again</button>
    </li>
  `;
}

function setPortfolioState(state) {
  if (!portfolioContent || !projectSection) return;

  projectSection.dataset.state = state;

  switch (state) {
    case "loading":
      renderLoadingState();
      break;
    case "empty":
      renderEmptyState();
      break;
    case "error":
      renderErrorState();
      break;
    case "live":
      renderLiveProjects();
      break;
    default:
      renderErrorState();
      projectSection.dataset.state = "error";
  }
}

window.portfolioStateController = {
  setState: setPortfolioState,
  states: ["loading", "live", "empty", "error"],
};

if (portfolioContent && projectSection) {
  setPortfolioState("loading");

  window.setTimeout(() => {
    setPortfolioState("live");
  }, 900);

  portfolioContent.addEventListener("click", (event) => {
    const retryButton = event.target.closest(".retry-button");

    if (!retryButton) return;

    setPortfolioState("loading");

    window.setTimeout(() => {
      setPortfolioState("live");
    }, 800);
  });
}
