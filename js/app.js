
/* =========================================================
   THEME TOGGLE
   ========================================================= */

const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement;

function getSavedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch (error) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    /*
     * The application can continue working even if
     * localStorage is unavailable.
     */
  }
}

const savedTheme = getSavedTheme();
const initialTheme = savedTheme === "dark" ? "dark" : "light";

function setTheme(theme) {
  root.dataset.theme = theme;

  saveTheme(theme);

  if (!themeToggle) {
    return;
  }

  themeToggle.setAttribute(
    "aria-pressed",
    String(theme === "dark")
  );

  themeToggle.textContent =
    theme === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode";
}

setTheme(initialTheme);

if (themeToggle) {
  /*
   * Native button behavior:
   * Enter and Space both dispatch click events.
   *
   * Therefore the single click listener supports:
   * - Mouse activation
   * - Enter activation
   * - Space activation
   *
   * No inline event handler is used.
   */
  themeToggle.addEventListener("click", () => {
    const nextTheme =
      root.dataset.theme === "dark"
        ? "light"
        : "dark";

    setTheme(nextTheme);
  });
}


/* =========================================================
   SKIP-LINK FOCUS MANAGEMENT
   ========================================================= */

const skipLink = document.querySelector(".skip-link");
const mainContent = document.querySelector("#main");

if (skipLink && mainContent) {
  skipLink.addEventListener("click", (event) => {
    const targetSelector =
      skipLink.getAttribute("href");

    if (!targetSelector) {
      return;
    }

    const target =
      document.querySelector(targetSelector);

    if (!target) {
      return;
    }

    /*
     * Prevent the default anchor behavior so that
     * keyboard focus can be explicitly moved to <main>.
     */
    event.preventDefault();

    target.focus({
      preventScroll: true,
    });

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /*
     * Keep the URL fragment synchronized with
     * the skip-link destination.
     */
    window.history.pushState(
      null,
      "",
      targetSelector
    );
  });
}


/* =========================================================
   PORTFOLIO ELEMENTS
   ========================================================= */

const portfolioContent =
  document.querySelector("#portfolio-content");

const projectSection =
  document.querySelector("#projects");

const projectsHeading =
  document.querySelector("#projects-heading");


/* =========================================================
   PROJECT DATA
   ========================================================= */

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


/* =========================================================
   LIVE PROJECT STATE
   ========================================================= */

function renderLiveProjects() {
  if (!portfolioContent) {
    return;
  }

  portfolioContent.innerHTML = projectData
    .map(
      (project, index) => `
        <li class="project-card">
          <article aria-labelledby="project-${index}-heading">

            <h3 id="project-${index}-heading">
              ${project.title}
            </h3>

            <p>
              ${project.summary}
            </p>

            <ul
              class="project-meta"
              aria-label="${project.title} technology tags"
            >
              ${project.tags
                .map(
                  (tag) =>
                    `<li class="project-badge">${tag}</li>`
                )
                .join("")}

              <li class="project-badge project-badge--status">
                ${project.status}
              </li>
            </ul>

            <a href="#projects">
              View ${project.title} Project
            </a>

          </article>
        </li>
      `
    )
    .join("");
}


/* =========================================================
   LOADING STATE
   ========================================================= */

function renderLoadingState() {
  if (!portfolioContent) {
    return;
  }

  portfolioContent.innerHTML = [
    `
      <li class="skeleton-card" aria-hidden="true">
        <span class="skeleton skeleton-avatar"></span>
        <span class="skeleton skeleton-title"></span>
        <span class="skeleton skeleton-text"></span>
        <span class="skeleton skeleton-text"></span>
        <span class="skeleton skeleton-text-short"></span>
      </li>
    `,
    `
      <li class="skeleton-card" aria-hidden="true">
        <span class="skeleton skeleton-avatar"></span>
        <span class="skeleton skeleton-title"></span>
        <span class="skeleton skeleton-text"></span>
        <span class="skeleton skeleton-text-short"></span>
      </li>
    `,
  ].join("");
}


/* =========================================================
   EMPTY STATE
   ========================================================= */

function renderEmptyState() {
  if (!portfolioContent) {
    return;
  }

  portfolioContent.innerHTML = `
    <li
      class="state-message empty-state"
      role="status"
    >
      <h3>No projects available.</h3>

      <p>
        There are no portfolio projects to show right now.
      </p>
    </li>
  `;
}


/* =========================================================
   ERROR STATE
   ========================================================= */

function renderErrorState() {
  if (!portfolioContent) {
    return;
  }

  portfolioContent.innerHTML = `
    <li
      class="state-message error-state"
      role="alert"
    >
      <h3>Something went wrong.</h3>

      <p>
        We couldn't load the projects. Please try again.
      </p>

      <button
        type="button"
        class="retry-button"
      >
        Try again
      </button>
    </li>
  `;
}


/* =========================================================
   PORTFOLIO STATE CONTROLLER
   ========================================================= */

function setPortfolioState(state) {
  if (!portfolioContent || !projectSection) {
    return;
  }

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


/* =========================================================
   FOCUS RESTORATION
   ========================================================= */

function restoreProjectFocus() {
  if (!projectsHeading) {
    return;
  }

  /*
   * The Retry button is removed when the DOM changes.
   *
   * Restore keyboard focus to the Projects heading
   * so the user does not lose their position.
   */
  projectsHeading.focus({
    preventScroll: true,
  });

  projectsHeading.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}


/* =========================================================
   PUBLIC PORTFOLIO CONTROLLER
   ========================================================= */

window.portfolioStateController = {
  setState: setPortfolioState,

  states: [
    "loading",
    "live",
    "empty",
    "error",
  ],
};


/* =========================================================
   INITIAL PORTFOLIO LOAD
   ========================================================= */

if (portfolioContent && projectSection) {
  setPortfolioState("loading");

  window.setTimeout(() => {
    setPortfolioState("live");
  }, 900);


  /* =======================================================
     RETRY BUTTON — EVENT DELEGATION
     ======================================================= */

  portfolioContent.addEventListener(
    "click",
    (event) => {
      const eventTarget = event.target;

      /*
       * Guard against non-Element event targets.
       */
      if (!(eventTarget instanceof Element)) {
        return;
      }

      const retryButton =
        eventTarget.closest(".retry-button");

      if (!retryButton) {
        return;
      }

      /*
       * Native <button> behavior means:
       *
       * Enter -> click
       * Space -> click
       *
       * Therefore this one listener supports both
       * keyboard activation methods.
       */
      setPortfolioState("loading");

      window.setTimeout(() => {
        setPortfolioState("live");

        /*
         * The Retry button no longer exists after
         * the state changes.
         *
         * Restore focus to the Projects heading.
         */
        restoreProjectFocus();
      }, 800);
    }
  );
}