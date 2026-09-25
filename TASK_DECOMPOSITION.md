# Task Decomposition

## WBS Task T-01 — Build an Accessibility-Compliant Semantic HTML Landmark Tree

### Task ID

T-01

### Task Name

Build an accessibility-compliant (A11y) semantic HTML landmark tree structure

### Objective

Create the foundational HTML structure of the Enterprise Developer Portfolio using semantic HTML5 elements and accessibility best practices.

The structure must provide a clear landmark hierarchy for screen readers and assistive technologies while avoiding unnecessary generic containers.

### Scope

The task includes:

- Creating the main semantic HTML5 document structure.
- Defining an accessible landmark hierarchy.
- Implementing a functional skip-link.
- Ensuring the page contains zero `<div>` elements.
- Using semantic elements instead of generic containers where appropriate.
- Providing meaningful relationships between major page sections.
- Ensuring the structure is navigable using assistive technologies.

### Accessibility Requirements

#### 1. Zero `<div>` Tags

The HTML document MUST contain:

```html
0 <div> elements

### Acceptance Criteria

T-01 is considered complete only when all criteria are satisfied:

 - The HTML document uses semantic HTML5 landmarks.
 - The document contains zero <div> tags.
 - A skip-link is present before the main page content.
 - The skip-link targets the <main> element.
 - Exactly one primary <main> landmark exists.
 - Primary navigation is implemented using <nav>.
 - Navigation has an appropriate accessible name.
 - Page structure follows a logical landmark hierarchy.
 - Major sections use semantic <section> elements where appropriate.
 - Sections have appropriate headings.
 - Complementary content uses <aside> only when semantically appropriate.
 - Footer content is contained within <footer>.
 - No semantic landmark is used solely for visual styling.
 - The page can be navigated using the keyboard.
 - Screen-reader users can identify and navigate between major landmarks.
 - HTML validation produces no structural errors related to the implementation.
#### Deliverables

The task must produce:

- index.html
- A semantic landmark hierarchy documented in the project context.
- A working skip-link.
- An accessibility-compliant HTML foundation ready for subsequent CSS and JavaScript tasks.

### Definition of Done

T-01 is DONE when the Enterprise Developer Portfolio has a semantic HTML5 foundation with:

0 <div> tags + working skip-link + valid landmark hierarchy + keyboard accessibility + meaningful heading structure.


## WBS Task T-02 — Build Responsive CSS Design System, Grid Layout, and Theme Engine

### Task ID

T-02

### Task Name

Build the responsive CSS design system, 2D grid layout, and accessible theme engine

### Objective

Transform the semantic HTML foundation from **T-01** into a responsive, accessible, and maintainable visual system for the Enterprise Developer Portfolio.

T-02 must establish:

* A centralized CSS token system and reset.
* A responsive 2D CSS Grid layout.
* A persistent light/dark theme engine.
* WCAG 2.2 AA-compliant color contrast.
* Full keyboard navigation.
* Stable rendering at **375px mobile width**.
* Performance targets of **CLS = 0** and **LCP < 2.0s on DevTools Fast 3G**.
* A clean Git history with **CSS and JavaScript work committed separately**.

The implementation MUST preserve all T-01 requirements, especially the **zero `<div>` constraint** and semantic landmark hierarchy.

---

## Scope

The task includes:

* Defining centralized CSS design tokens.
* Implementing a global CSS reset.
* Building the responsive 2D Grid layout.
* Supporting a 375px mobile viewport without horizontal scrolling.
* Implementing the light/dark theme engine.
* Persisting theme state strictly through `localStorage` key `theme`.
* Ensuring WCAG 2.2 AA color contrast.
* Maintaining keyboard-accessible navigation and theme controls.
* Validating dynamic theme switching without console errors.
* Validating layout stability and loading performance.
* Creating separate Git commits for each WBS sub-task.

---

# Strict Acceptance Criteria Matrix

All T-02 sub-tasks MUST satisfy the following contract-first constraints.

| ID    | Acceptance Requirement   | Mandatory Condition                                                                                   | Validation                                                                     |
| ----- | ------------------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| AC-01 | **Monolithic Dump Ban**  | CSS and JS MUST NOT be implemented/committed as one combined monolithic change                        | Git history inspection                                                         |
| AC-02 | **375px Mobile**         | Page renders cleanly at exactly `375px` viewport width                                                | Chrome DevTools Device Mode                                                    |
| AC-03 | **Horizontal Scroll**    | Zero unintended horizontal scrolling at 375px                                                         | `document.documentElement.scrollWidth <= document.documentElement.clientWidth` |
| AC-04 | **WCAG 2.2 AA Contrast** | Normal text contrast MUST be `>= 4.5:1`                                                               | Accessibility/contrast checker                                                 |
| AC-05 | **Theme Toggle Errors**  | Zero console errors during dynamic theme switching                                                    | DevTools Console                                                               |
| AC-06 | **Keyboard Navigation**  | Navigation MUST support complete `Tab` and `Enter` flow                                               | Keyboard-only test                                                             |
| AC-07 | **Theme Persistence**    | Theme state MUST use only localStorage key `theme`                                                    | DevTools Application → Local Storage                                           |
| AC-08 | **Color Architecture**   | Colors MUST be consumed through CSS variables                                                         | CSS inspection                                                                 |
| AC-09 | **Hardcoded Colors**     | Zero hardcoded hex colors inside component/rule declarations                                          | CSS source inspection                                                          |
| AC-10 | **Performance**          | CLS target = `0`                                                                                      | DevTools Performance/Lighthouse                                                |
| AC-11 | **LCP**                  | LCP `< 2.0s` under Fast 3G                                                                            | DevTools/Lighthouse                                                            |
| AC-12 | **T-01 Compatibility**   | Zero `<div>`, semantic landmarks, skip-link, and heading hierarchy remain valid                       | Elements/accessibility inspection                                              |
| AC-13 | **Live Defense**         | Instructor can modify a CSS token and the student can correct/update the design within **60 seconds** | Live demonstration                                                             |
| AC-14 | **Git Traceability**     | Each sub-task has its own required commit                                                             | `git log --oneline`                                                            |

---

# WBS Task T-02A — Build CSS Tokens & Reset

### Task ID

T-02A

### Task Name

Build the centralized CSS token system and global reset

### Objective

Create a maintainable CSS foundation in which visual properties are controlled through centralized tokens, allowing the instructor to modify a token during the live defense and observe the change throughout the interface.

---

## Detailed Actionable Deliverables

### 1. Create the CSS foundation

Create:

```text
style.css
```

and connect it to `index.html`.

---

### 2. Create a centralized token layer

Define tokens for:

* Background colors
* Surface colors
* Primary/accent colors
* Text colors
* Muted text colors
* Border colors
* Typography
* Font sizes
* Font weights
* Line heights
* Spacing
* Border radius
* Shadows
* Container width
* Transition durations

Example:

```css
:root {
  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-text-muted: ...;
  --color-primary: ...;
  --color-border: ...;

  --space-xs: ...;
  --space-sm: ...;
  --space-md: ...;
  --space-lg: ...;

  --radius-sm: ...;
  --radius-md: ...;

  --container-max-width: ...;
}
```

---

### 3. Establish the color architecture

All component colors MUST reference variables.

Correct:

```css
body {
  color: var(--color-text);
  background-color: var(--color-background);
}
```

Incorrect:

```css
body {
  color: #111111;
  background-color: #ffffff;
}
```

Hardcoded color values may exist in the centralized token declaration layer, but not throughout component rules.

---

### 4. Implement global reset

Implement:

* `box-sizing`
* body margin reset
* predictable typography
* link normalization
* image responsiveness
* button/font inheritance where appropriate

Do not remove keyboard focus indicators.

---

### 5. Create a predictable spacing system

Define reusable spacing tokens such as:

```text
--space-xs
--space-sm
--space-md
--space-lg
--space-xl
--space-2xl
```

Components should consume these tokens rather than scattering arbitrary spacing values.

---

### 6. Prepare for live instructor modification

The CSS architecture MUST make token changes immediately visible.

For example, changing:

```css
--color-primary: ...;
```

should automatically update all components using:

```css
color: var(--color-primary);
```

The student must be able to demonstrate this during the **3-Minute Live Defense**.

---

## Technical Acceptance Criteria / Validation Checklist

### Token Architecture

* [ ] Centralized `:root` token system exists.
* [ ] Colors are defined through CSS custom properties.
* [ ] Component rules use `var(--...)`.
* [ ] Zero hardcoded hex colors inside component/rule declarations.
* [ ] Spacing is tokenized.
* [ ] Typography is tokenized.
* [ ] Tokens are named clearly enough for a live demonstration.

### WCAG 2.2 AA

* [ ] Normal text contrast is at least **4.5:1**.
* [ ] Text remains compliant in both light and dark themes.
* [ ] Primary text/background pairing passes.
* [ ] Muted text/background pairing passes.
* [ ] Link/interactive text remains sufficiently distinguishable.
* [ ] Focus indicators remain visible.

### T-01 Compatibility

* [ ] Zero `<div>` elements.
* [ ] Semantic landmarks remain intact.
* [ ] Skip-link remains functional.
* [ ] Heading hierarchy remains intact.
* [ ] No CSS changes break keyboard navigation.

### 375px Validation

* [ ] Page renders correctly at `375px`.
* [ ] No unintended horizontal scrolling.
* [ ] Text does not overflow.
* [ ] Navigation does not overflow the viewport.
* [ ] Cards/content do not exceed viewport width.

### Live Defense Validation

Instructor changes one token, for example:

```css
--color-primary
```

The student must be able to:

1. Locate the token.
2. Modify its value.
3. Explain which components consume it.
4. Demonstrate the visual change.
5. Correct any issue within **60 seconds**.

### Exact Git Commit Command

```bash
git add style.css index.html
git commit -m "feat(css): tokens & reset"
```

**Important:** Do NOT include `script.js` in this commit.

---

# WBS Task T-02B — Build 2D Grid Layout

### Task ID

T-02B

### Task Name

Build the responsive 2D CSS Grid layout

### Objective

Create a responsive layout using CSS Grid that maintains semantic document order, adapts to different viewport sizes, and renders cleanly at the required **375px mobile width**.

---

## Detailed Actionable Deliverables

### 1. Establish the page grid

Use CSS Grid for the major page structure:

```text
Header
   ↓
Main Content + Aside
   ↓
Footer
```

Do not introduce `<div>` wrappers.

---

### 2. Build the desktop 2D layout

Use appropriate Grid properties such as:

```css
display: grid;
grid-template-columns;
grid-template-rows;
gap;
grid-template-areas;
```

The exact structure should support the portfolio's content hierarchy.

---

### 3. Build responsive mobile layout

At the mobile breakpoint, collapse the layout into a single practical column.

Conceptually:

```text
Desktop:

┌───────────────────────┐
│        Header         │
├────────────────┬──────┤
│                │      │
│      Main      │Aside │
│                │      │
├────────────────┴──────┤
│        Footer         │
└───────────────────────┘


375px:

┌───────────────────────┐
│        Header         │
├───────────────────────┤
│         Main          │
├───────────────────────┤
│         Aside         │
├───────────────────────┤
│        Footer         │
└───────────────────────┘
```

---

### 4. Eliminate horizontal overflow

Check for common causes:

* Fixed-width elements.
* Excessive padding.
* Long unbroken text.
* Grid columns wider than the viewport.
* Images wider than their containers.
* Navigation items exceeding available width.

---

### 5. Preserve DOM order

Visual positioning MUST NOT create a confusing accessibility order.

The HTML reading order must remain logical for:

* Screen readers.
* Keyboard users.
* Mobile users.
* Users without CSS.

---

### 6. Validate the exact 375px requirement

Use Chrome DevTools:

```text
Device Toolbar
→ Responsive
→ Width: 375
```

Verify:

```text
document width = 375px
horizontal overflow = 0
```

---

## Technical Acceptance Criteria / Validation Checklist

### Grid

* [ ] Primary layout uses CSS Grid.
* [ ] Desktop supports a clear 2D layout.
* [ ] Mobile collapses appropriately.
* [ ] Grid gaps use CSS tokens.
* [ ] No `<div>` elements are introduced.
* [ ] Semantic HTML remains unchanged.

### 375px Mobile Contract

At exactly:

```text
375px
```

* [ ] Page renders cleanly.
* [ ] Zero horizontal scroll.
* [ ] No content is clipped.
* [ ] No cards overflow.
* [ ] No navigation overflow.
* [ ] No text unexpectedly escapes its container.
* [ ] Images/media remain within available width.

Recommended DevTools check:

```js
document.documentElement.scrollWidth
```

must not exceed:

```js
document.documentElement.clientWidth
```

### Accessibility

* [ ] DOM reading order remains logical.
* [ ] `Tab` order remains logical.
* [ ] `Enter` activates links.
* [ ] Skip-link remains functional.
* [ ] Focus indicators remain visible.
* [ ] WCAG 2.2 AA contrast remains >= 4.5:1.

### Performance

* [ ] CLS target = `0`.
* [ ] LCP target < `2.0s`.
* [ ] Fast 3G testing completed.
* [ ] Responsive behavior does not depend on JavaScript.

### Exact Git Commit Command

```bash
git add style.css index.html
git commit -m "feat(css): responsive grid"
```

**Important:** Do NOT include `script.js` in this commit.

---

# WBS Task T-02C — Build Theme Engine

### Task ID

T-02C

### Task Name

Build the accessible persistent light/dark theme engine

### Objective

Implement a JavaScript-powered theme engine that dynamically switches between light and dark themes, persists the user's selection through the required `localStorage` key, and operates without console errors or layout instability.

---

## Detailed Actionable Deliverables

### 1. Create the JavaScript implementation

Create:

```text
script.js
```

Load it using:

```html
<script src="script.js" defer></script>
```

---

### 2. Create the theme toggle

Use a native button:

```html
<button type="button" id="theme-toggle">
  Toggle theme
</button>
```

Do NOT use a `<div>` as a clickable control.

---

### 3. Define light and dark CSS tokens

Example:

```css
:root {
  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-primary: ...;
}

[data-theme="dark"] {
  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-primary: ...;
}
```

Component rules must continue using:

```css
var(--color-...)
```

rather than directly changing colors.

---

### 4. Implement strict persistence contract

The theme MUST use exactly:

```js
localStorage.getItem('theme');
```

and:

```js
localStorage.setItem('theme', theme);
```

The only persistence key is:

```text
theme
```

No:

```text
darkMode
colorScheme
userTheme
themePreference
```

or other theme storage keys may be introduced.

---

### 5. Implement theme initialization

On page load:

```text
Read localStorage
       ↓
Validate value
       ↓
Apply light/dark theme
       ↓
Render page
```

If the stored value is invalid, safely fall back to a valid theme.

---

### 6. Implement dynamic toggling

When the user activates the toggle:

```text
Current theme
      ↓
Calculate next theme
      ↓
Update document theme attribute
      ↓
Persist "theme"
```

Example architecture:

```js
document.documentElement.dataset.theme = theme;
```

---

### 7. Prevent console errors

Test repeated switching:

```text
Light
→ Dark
→ Light
→ Dark
→ Light
```

There MUST be:

```text
0 JavaScript errors
0 uncaught exceptions
```

in the DevTools Console.

---

### 8. Validate keyboard interaction

The theme button MUST work with:

```text
Tab
Enter
Space
```

Navigation links MUST work with:

```text
Tab
Enter
```

The complete navigation flow must be usable without a mouse.

---

### 9. Validate contrast in both themes

The following MUST meet WCAG 2.2 AA:

```text
Light theme:
Text ↔ Background >= 4.5:1

Dark theme:
Text ↔ Background >= 4.5:1
```

Test important text categories, including:

* Body text.
* Navigation text.
* Headings.
* Project content.
* Muted text.
* Links.
* Theme-control text.

---

### 10. Validate theme switching does not cause layout shift

Theme switching should change visual tokens, not structural dimensions.

Do not dynamically:

* Add/remove large elements.
* Change grid dimensions.
* Change font sizes.
* Change padding substantially.
* Change element positions.

---

## Technical Acceptance Criteria / Validation Checklist

### Theme Functionality

* [ ] Light theme works.
* [ ] Dark theme works.
* [ ] Toggle works without page reload.
* [ ] Theme persists after refresh.
* [ ] Only `localStorage` key `theme` is used.
* [ ] Invalid theme values are handled safely.
* [ ] Theme is applied through CSS variables.
* [ ] No JavaScript directly injects color values into individual elements.

### Console Contract

Open:

```text
DevTools → Console
```

Then repeatedly toggle the theme.

Required result:

```text
0 errors
0 uncaught exceptions
```

Warnings should also be investigated if they originate from the implementation.

### WCAG 2.2 AA

* [ ] Normal text contrast >= `4.5:1`.
* [ ] Light theme passes.
* [ ] Dark theme passes.
* [ ] Navigation passes.
* [ ] Theme toggle passes.
* [ ] Focus indicator remains visible.

### Keyboard Contract

Using only the keyboard:

```text
Tab → focus navigation
Tab → next navigation item
Enter → activate navigation
...
Tab → theme toggle
Enter/Space → toggle theme
```

Required:

* [ ] Complete Tab flow.
* [ ] Enter activates links.
* [ ] Theme toggle works using keyboard.
* [ ] No keyboard trap.
* [ ] Focus remains visible.

### 375px Contract

At `375px`:

* [ ] Zero horizontal scroll.
* [ ] Theme toggle remains usable.
* [ ] Navigation remains usable.
* [ ] No content overlaps after theme switching.
* [ ] Light and dark themes both render correctly.

### Performance Contract

* [ ] CLS target = `0`.
* [ ] LCP < `2.0s` on Fast 3G.
* [ ] Theme switching does not introduce layout instability.
* [ ] JavaScript remains lightweight.
* [ ] No unnecessary external dependencies.

### T-01 Compatibility

* [ ] Zero `<div>` elements.
* [ ] Skip-link remains functional.
* [ ] Exactly one `<main>`.
* [ ] Semantic landmarks remain intact.
* [ ] Heading hierarchy remains intact.

### Exact Git Commit Command

```bash
git add script.js style.css index.html
git commit -m "feat(js): dark mode engine"
```

**Important:** Although this commit may modify `style.css` to add dark-theme tokens, the **implementation must not be a monolithic CSS+JS dump**. T-02A and T-02B must already have their own commits, and T-02C must contain only the CSS/JS changes necessary to implement the theme engine.

---

# T-02 Final Definition of Done

T-02 is DONE only when **T-02A, T-02B, and T-02C** have independently satisfied their acceptance criteria.

### Mandatory Final Checklist

* [ ] **T-02A committed separately**
* [ ] **T-02B committed separately**
* [ ] **T-02C committed separately**
* [ ] No monolithic CSS + JS implementation dump.
* [ ] `375px` viewport renders cleanly.
* [ ] Zero horizontal scrolling at `375px`.
* [ ] WCAG 2.2 AA normal-text contrast >= `4.5:1`.
* [ ] Zero console errors during theme toggling.
* [ ] Full keyboard `Tab` + `Enter` navigation works.
* [ ] Theme persists exclusively through `localStorage['theme']`.
* [ ] Colors are controlled through CSS variables.
* [ ] Zero hardcoded hex colors in component/rule declarations.
* [ ] Zero `<div>` elements.
* [ ] T-01 landmark structure remains valid.
* [ ] Skip-link remains functional.
* [ ] CLS target = `0`.
* [ ] LCP < `2.0s` on Fast 3G.
* [ ] Instructor can modify a CSS token and the student can demonstrate/fix the result within **60 seconds**.

---

## Required Git History

The final history MUST clearly demonstrate incremental work:

```bash
git log --oneline --decorate -3
```

Expected structure:

```text
<hash> feat(js): dark mode engine
<hash> feat(css): responsive grid
<hash> feat(css): tokens & reset
```

### 3-Minute Live Defense Requirement

You must be able to explain and demonstrate:

```text
CSS Token
   ↓
Component consumes var(--token)
   ↓
Instructor changes token
   ↓
Entire UI updates
```

within the **3-minute defense**, with any required correction completed within **60 seconds**.

This makes the CSS architecture not only visually functional, but also **inspectable, maintainable, and defensible under live evaluation**.
