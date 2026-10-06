## Defect 1 — Incomplete Keyboard Accessibility Test Checklist

### 1. Defect Description

The initial AI-generated pre-commit keyboard accessibility checklist was incomplete and insufficiently detailed.

Key deficiencies included:

* Keyboard behavior was not clearly differentiated by interactive component type.
* `Enter` and `Space` were grouped indiscriminately for links and buttons.
* `Escape` behavior for dismissible overlays was not specified.
* Arrow-key navigation for composite widgets, such as radio groups and tabs, was missing.
* Explicit focus restoration after closing an overlay was not defined.

### 2. Diagnostic Method

A manual review was conducted before commit by comparing the AI-generated checklist against:

* The semantic roles of the implemented UI components.
* The expected keyboard interaction specifications for each component type.

### 3. Refactored Solution

The checklist was refactored to define keyboard behavior by component type:

* `Tab` / `Shift + Tab` — sequential forward and backward navigation.
* `Enter` — links and primary activations.
* `Space` — buttons and toggle controls.
* `Arrow Keys` — composite widget navigation, including radio groups and tabs.
* `Escape` — dismissal of dismissible overlays.
* **Focus Restoration** — return focus to the triggering element after overlay closure.
* **Focus Visibility** — verify a clear, persistent focus outline.
* **Focus Trap Prevention** — verify that focus cannot become trapped.

### Verification

A keyboard-only walkthrough was executed starting with `F5 + Tab`, with no mouse interaction.

The following were confirmed:

* Skip-link receives focus first and correctly jumps to `<main>`.
* Focus order is logical and complete.
* Correct keys trigger buttons versus links.
* Focus outlines remain clearly visible across themes.
* No focus traps occur.
* `Escape` successfully exits dismissible overlays.
* Focus is correctly restored after overlay closure.

### Related Evidence

* **Original AI-generated checklist:** `[Git commit/hash:git commit -m "docs(nav): update WBS task M2 keyboard navigation"]`
* **Refactored checklist:** `[Git commit/hash: git commit -m "docs(nav): fixing the mandatory Pre-Commit Keyboard Accessibility Test Checklist"]`

## Defect 2 — Incomplete Mobile 375px Constraint and Font Loading Strategy

### 1. Defect Description

Task M4 did not explicitly cover:

* The **375px overflow constraint** (`scrollWidth <= clientWidth`).
* Font optimization using `font-display: swap` and `preload`, required to support **CLS = 0** and **LCP < 2s**.

### 2. Diagnostic Method

A manual review was performed against the requirements and testing structure defined in **T-02/T-03**. It identified that:
* Default Lighthouse testing may not detect all 375px horizontal overflow issues.
* Font loading behavior and related layout shifts require explicit verification.

### 3. Refactored Solution

M4 was updated to include:

* An explicit **375px viewport overflow test** verifying `scrollWidth <= clientWidth`.
* A font loading strategy using **`font-display: swap` + `preload`**.
* Corresponding acceptance criteria and mandatory pre-commit checklist items.

### Verification

* Tested the application at a **375px viewport** and verified no horizontal overflow.
* Tested performance under **Fast 3G** conditions.
* Verified font loading behavior against the **CLS = 0** and **LCP < 2s** targets.

### Related Evidence

* **Original M4:** `[Git commit/hash: git commit -m "docs(perf): update WBS task M4 performance requirements"]`
* **Refactored M4:** `[Git commit/hash:git commit -m "docs(perf): update WBS task M4 performance requirements ]`

