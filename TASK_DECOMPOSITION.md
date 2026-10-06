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


# WBS Task T-03 — Build a 4-State Resilient Portfolio Component

### Task ID

T-03

### Task Name

Build a resilient portfolio component supporting Loading, Live, Empty, and Error states

### Objective

Extend the Enterprise Developer Portfolio with a resilient component architecture that clearly represents all four required UI states:

1. **Loading** — data is being prepared.
2. **Live** — valid data is available and rendered.
3. **Empty** — request succeeds but no data is available.
4. **Error** — data retrieval or processing fails.

The implementation must provide an accessible and visually understandable experience for every state while preserving the semantic HTML structure established in T-01 and the responsive layout established in T-02.

Each sub-task MUST be **implemented → tested → validated → committed individually**.

---

## Scope

T-03 includes:

* Defining the component state machine.
* Building a pure-CSS loading skeleton.
* Building the live data presentation.
* Building accessible empty and error states.
* Providing an accessible retry trigger.
* Maintaining the 375px responsive requirement.
* Maintaining keyboard accessibility.
* Ensuring state transitions do not introduce layout instability.
* Testing each state **before its Git commit**.
* Keeping each sub-task independently traceable in Git.

---

# 4-State Component State Machine

The state machine MUST be documented in `TASK_DECOMPOSITION.md`.

```text
                    ┌──────────────┐
                    │   LOADING    │
                    └──────┬───────┘
                           │
                data succeeds
                           │
                           ▼
                    ┌──────────────┐
                    │     LIVE     │
                    └──────┬───────┘
                           │
                     no data
                           │
                           ▼
                    ┌──────────────┐
                    │    EMPTY     │
                    └──────────────┘


LOADING ───── data fails ─────► ERROR
                                  │
                                  │ Retry
                                  ▼
                               LOADING
```

### State Contract

| State     | Meaning                                | Required UI                  |
| --------- | -------------------------------------- | ---------------------------- |
| `loading` | Data is being loaded                   | CSS skeleton/shimmer         |
| `live`    | Data exists                            | Real content + metadata      |
| `empty`   | Request succeeded but no records exist | Empty-state message          |
| `error`   | Request failed                         | Error message + retry button |

### Valid State Transitions

```text
loading → live
loading → empty
loading → error
error → loading
```

The implementation MUST NOT create undefined visual states.

---

# Strict T-03 Acceptance Criteria Matrix

| ID        | Acceptance Requirement | Mandatory Condition                                           | Validation                 |
| --------- | ---------------------- | ------------------------------------------------------------- | -------------------------- |
| T03-AC-01 | Four-State Contract    | Loading, Live, Empty, Error all exist                         | Manual state testing       |
| T03-AC-02 | State Separation       | Each state has a clearly identifiable UI representation       | DevTools/manual inspection |
| T03-AC-03 | Loading Skeleton       | Skeleton uses pure CSS shimmer                                | CSS inspection             |
| T03-AC-04 | Live Data              | Data is displayed using responsive Grid/Flexbox               | Elements inspection        |
| T03-AC-05 | Empty State            | Empty state explains that no data is available                | Manual inspection          |
| T03-AC-06 | Error State            | Error state communicates failure clearly                      | Manual inspection          |
| T03-AC-07 | Retry                  | Error state contains an accessible retry trigger              | Keyboard + mouse test      |
| T03-AC-08 | Keyboard               | Interactive controls support Tab + Enter/Space                | Keyboard-only test         |
| T03-AC-09 | 375px                  | All four states render without horizontal scrolling           | DevTools 375px             |
| T03-AC-10 | Accessibility          | State changes remain understandable to assistive technologies | Accessibility inspection   |
| T03-AC-11 | Contrast               | State text meets WCAG 2.2 AA, normal text >= 4.5:1            | Contrast checker           |
| T03-AC-12 | Layout Stability       | State transitions do not create unnecessary layout shift      | Performance inspection     |
| T03-AC-13 | T-01 Compatibility     | Zero `<div>` elements remain                                  | DOM inspection             |
| T03-AC-14 | T-02 Compatibility     | Existing responsive layout and theme tokens remain functional | Light/dark testing         |
| T03-AC-15 | Individual Testing     | Each sub-task is tested before commit                         | Test checklist + Git       |
| T03-AC-16 | Git Traceability       | Each sub-task has its own commit                              | `git log --oneline`        |

---

# WBS Task T-03A — Build Loading Skeleton

### Task ID

T-03A

### Task Name

Build the pure-CSS loading skeleton with shimmer effect

### Objective

Create a loading representation that communicates that portfolio data is being prepared without relying on JavaScript animation libraries or external dependencies.

The skeleton MUST use CSS only for the visual shimmer effect.

---

## Detailed Actionable Deliverables

### 1. Define the loading state structure

Create a semantic loading container appropriate to the existing portfolio structure.

Example conceptual structure:

```text
Loading State
├── Skeleton heading
├── Skeleton metadata
├── Skeleton content
└── Skeleton content
```

Do not introduce `<div>` elements.

---

### 2. Create skeleton elements

Provide skeleton placeholders for important live-data elements such as:

* Title
* Metadata
* Description
* Project/list content

Each placeholder should have a predictable class, for example:

```text
skeleton
skeleton-title
skeleton-meta
skeleton-text
```

---

### 3. Implement pure CSS shimmer

The shimmer MUST be created using CSS.

Acceptable tools include:

```css
background
linear-gradient()
background-size
@keyframes
transform
```

Do NOT use:

* JavaScript animation loops.
* Animation libraries.
* External packages.
* Images/GIFs for the shimmer.

---

### 4. Use existing design tokens

The skeleton MUST consume T-02 tokens where appropriate.

For example:

```text
--color-surface
--color-surface-raised
--color-border
--space-*
--radius-*
```

Do not introduce unnecessary hardcoded colors.

---

### 5. Respect reduced-motion preferences

The shimmer should not create an accessibility problem for users who request reduced motion.

Support:

```css
@media (prefers-reduced-motion: reduce)
```

The skeleton should remain visually understandable without continuous animation.

---

## Technical Acceptance Criteria / Validation Checklist

### Loading UI

* [ ] Loading state exists.
* [ ] Skeleton clearly communicates loading.
* [ ] Skeleton uses CSS only.
* [ ] Shimmer uses CSS gradient/animation.
* [ ] No JavaScript animation library is required.
* [ ] Skeleton dimensions resemble the final content.
* [ ] Skeleton does not cause unexpected page expansion.

### Accessibility

* [ ] Loading state is understandable to assistive technologies.
* [ ] No unnecessary focusable elements exist.
* [ ] Reduced-motion preference is respected.
* [ ] Contrast remains acceptable.
* [ ] Existing skip-link remains functional.

### Responsive

At exactly `375px`:

* [ ] No horizontal scrolling.
* [ ] Skeleton fits the viewport.
* [ ] Skeleton text blocks do not overflow.
* [ ] No layout clipping.

### T-01/T-02 Compatibility

* [ ] Zero `<div>` elements.
* [ ] Existing semantic landmarks remain unchanged.
* [ ] Existing CSS Grid remains functional.
* [ ] Existing theme variables are reused.
* [ ] Light theme works.
* [ ] Dark theme works.

---

## T-03A Mandatory Pre-Commit Test

**Do not commit immediately after writing the skeleton.**

Test:

```text
1. Open portfolio
2. Force Loading state
3. Verify skeleton appears
4. Check shimmer
5. Resize to 375px
6. Check horizontal overflow
7. Test light theme
8. Test dark theme
9. Test keyboard navigation
10. Check Console
```

Console requirement:

```text
0 JavaScript errors
```

375px requirement:

```js
document.documentElement.scrollWidth <=
document.documentElement.clientWidth
```

Expected:

```text
true
```

Only after all tests pass should T-03A be committed.

### Exact Git Commit

```bash
git add styles.css index.html
git commit -m "feat(css): skeleton"
```

---

# WBS Task T-03B — Build Live Data State

### Task ID

T-03B

### Task Name

Build the responsive live-data component using Grid and Flexbox

### Objective

Create the primary data-presenting state in which valid portfolio/project data is displayed using the responsive layout system established in T-02.

The live state must remain readable and usable at desktop and 375px mobile widths.

---

## Detailed Actionable Deliverables

### 1. Define the live-data structure

The live state should contain meaningful information such as:

```text
Project
├── Project title
├── Description
├── Technology metadata
├── Status
└── Additional information
```

Use semantic HTML elements.

---

### 2. Build the data list using CSS Grid

The collection of live items should use Grid.

Conceptually:

```text
Desktop:

┌─────────────┬─────────────┐
│ Project 1   │ Project 2   │
├─────────────┼─────────────┤
│ Project 3   │ Project 4   │
└─────────────┴─────────────┘
```

At mobile:

```text
┌─────────────────┐
│    Project 1    │
├─────────────────┤
│    Project 2    │
├─────────────────┤
│    Project 3    │
└─────────────────┘
```

---

### 3. Build metadata badges using Flexbox

Metadata should use Flexbox for flexible one-dimensional arrangement.

Examples:

```text
JavaScript
React
Node.js
MySQL
Completed
```

The badges must wrap naturally when the viewport becomes narrow.

---

### 4. Prevent overflow

Use:

```css
min-width: 0;
```

and existing layout tokens where appropriate.

Long:

* Project names
* URLs
* Technology names
* Descriptions

must not create horizontal scrolling.

---

### 5. Preserve semantic document order

Do not use CSS `order` to create an accessibility-unfriendly reading sequence.

The DOM order must remain logical.

---

## Technical Acceptance Criteria / Validation Checklist

### Live State

* [ ] Live state renders valid content.
* [ ] Data items use semantic HTML.
* [ ] List/grid uses CSS Grid.
* [ ] Metadata uses Flexbox.
* [ ] Metadata wraps correctly.
* [ ] Content does not overflow.
* [ ] Grid remains responsive.

### 375px

* [ ] Zero horizontal scrolling.
* [ ] One practical column.
* [ ] No clipped project cards.
* [ ] Metadata wraps.
* [ ] Long text wraps.
* [ ] Images/media remain inside their containers.

### Accessibility

* [ ] Heading hierarchy remains valid.
* [ ] Links are keyboard accessible.
* [ ] Buttons are native buttons.
* [ ] Tab order follows DOM order.
* [ ] Enter activates links.
* [ ] Space/Enter activates buttons.
* [ ] Focus remains visible.
* [ ] Contrast >= 4.5:1 for normal text.

### Theme Compatibility

* [ ] Live state works in light mode.
* [ ] Live state works in dark mode.
* [ ] Metadata remains readable in both themes.
* [ ] No hardcoded component colors bypass CSS tokens.

---

## T-03B Mandatory Pre-Commit Test

Before committing:

```text
1. Force Live state
2. Verify all data is visible
3. Verify Grid layout
4. Verify metadata Flexbox
5. Resize to 375px
6. Check horizontal overflow
7. Test Tab navigation
8. Test Enter on links
9. Test light theme
10. Test dark theme
11. Check Console
```

Expected:

```text
Console errors = 0
Horizontal overflow = 0
```

Run:

```js
document.documentElement.scrollWidth <=
document.documentElement.clientWidth
```

Expected:

```text
true
```

Only then commit.

### Exact Git Commit

```bash
git add styles.css index.html
git commit -m "feat(css): live data"
```

---

# WBS Task T-03C — Build Empty & Error States

### Task ID

T-03C

### Task Name

Build accessible Empty and Error states with retry trigger

### Objective

Provide clear fallback interfaces when the component has no data or when data retrieval fails.

The Error state must provide an accessible retry mechanism that returns the component to the Loading state.

---

## Detailed Actionable Deliverables

### 1. Build Empty state

The Empty state should communicate:

```text
No projects available.
```

or an equivalent meaningful message.

It should explain what the user is seeing without implying that an error occurred.

Example structure:

```text
Empty
├── Heading
├── Explanation
└── Optional action
```

---

### 2. Build Error state

The Error state should clearly communicate:

```text
Something went wrong.
We couldn't load the projects.
```

The error message should be user-friendly.

Do not expose raw:

```text
stack traces
API errors
database errors
```

to normal users.

---

### 3. Create accessible retry trigger

Use a native button:

```html
<button type="button">
  Try again
</button>
```

The retry trigger MUST:

* Be keyboard accessible.
* Have a clear accessible name.
* Be visually identifiable.
* Have a visible focus state.
* Return the component to Loading.

---

### 4. Define Error → Loading transition

The state flow must be:

```text
ERROR
  ↓
User activates Retry
  ↓
LOADING
  ↓
LIVE / EMPTY / ERROR
```

The retry operation must not directly jump from Error to Live without passing through Loading.

---

### 5. Provide accessible state communication

The state container should communicate dynamic changes appropriately.

Where appropriate, use an accessible status mechanism such as:

```html
aria-live="polite"
```

Avoid making the entire page repeatedly announce unnecessary content.

---

### 6. Prevent retry failures from breaking the UI

Repeated retry operations must be safe:

```text
Error
→ Retry
→ Loading
→ Error
→ Retry
→ Loading
```

No uncaught JavaScript errors should occur.

---

## Technical Acceptance Criteria / Validation Checklist

### Empty State

* [ ] Empty state exists.
* [ ] Empty state is visually distinguishable.
* [ ] Message clearly explains that no data exists.
* [ ] Empty state is not incorrectly presented as an error.
* [ ] Empty state works at 375px.
* [ ] Empty state works in light/dark themes.

### Error State

* [ ] Error state exists.
* [ ] Error message is understandable.
* [ ] Technical error details are not exposed unnecessarily.
* [ ] Retry button exists.
* [ ] Retry button is a native `<button>`.
* [ ] Retry button has an accessible name.
* [ ] Retry button is keyboard accessible.
* [ ] Retry button has visible focus.
* [ ] Retry returns to Loading.

### State Transition

Required:

```text
loading → live
loading → empty
loading → error
error → loading
```

* [ ] All transitions behave correctly.
* [ ] Repeated retry does not create errors.
* [ ] No invalid state appears.

### Accessibility

* [ ] Tab reaches retry.
* [ ] Enter activates retry.
* [ ] Space activates retry.
* [ ] No keyboard trap.
* [ ] Focus remains visible.
* [ ] Dynamic state changes are communicated appropriately.
* [ ] Normal text contrast >= 4.5:1.

### 375px

* [ ] Empty state has no horizontal overflow.
* [ ] Error state has no horizontal overflow.
* [ ] Retry button remains visible.
* [ ] Retry button remains usable.
* [ ] Long error messages wrap correctly.

### Theme

* [ ] Empty state works in light mode.
* [ ] Empty state works in dark mode.
* [ ] Error state works in light mode.
* [ ] Error state works in dark mode.
* [ ] Retry button remains readable in both themes.

---

## T-03C Mandatory Pre-Commit Test

Before committing, test **both states and the transition**.

### Empty test

```text
1. Force Empty state
2. Verify message
3. Test 375px
4. Test light mode
5. Test dark mode
6. Test keyboard navigation
7. Check Console
```

### Error test

```text
1. Force Error state
2. Verify error message
3. Find Retry button
4. Press Tab
5. Press Enter
6. Verify Loading appears
7. Verify next state
8. Repeat retry
9. Check Console
```

Expected:

```text
Console errors = 0
Horizontal overflow = 0
Keyboard trap = 0
```

Then test:

```text
ERROR
  ↓ Enter
LOADING
  ↓
LIVE / EMPTY / ERROR
```

Only after all tests pass should the commit be created.

### Exact Git Commit

```bash
git add app.js styles.css index.html
git commit -m "feat(ui): empty and error states"
```

If your project follows the original filename from the WBS, use `script.js` instead of `app.js`.

---

# T-03 Final Definition of Done

T-03 is DONE only when **T-03A, T-03B, and T-03C** have independently passed their tests and have their own commits.

### Required Final Checklist

#### State Coverage

* [ ] Loading state exists.
* [ ] Live state exists.
* [ ] Empty state exists.
* [ ] Error state exists.
* [ ] State machine is documented in `TASK_DECOMPOSITION.md`.

#### Loading

* [ ] Pure CSS skeleton.
* [ ] CSS shimmer gradient.
* [ ] No animation dependency.
* [ ] Reduced-motion support.

#### Live

* [ ] Responsive Grid list.
* [ ] Flexbox metadata badges.
* [ ] Semantic content structure.
* [ ] Responsive at 375px.

#### Empty

* [ ] Clear no-data message.
* [ ] Accessible presentation.
* [ ] Works in both themes.

#### Error

* [ ] Clear error message.
* [ ] Accessible retry trigger.
* [ ] Retry → Loading.
* [ ] Repeated retry does not produce errors.

#### Accessibility

* [ ] WCAG 2.2 AA contrast >= 4.5:1.
* [ ] Full Tab navigation.
* [ ] Enter activates links/buttons appropriately.
* [ ] Space activates native buttons.
* [ ] Focus indicators remain visible.
* [ ] Dynamic state changes are appropriately communicated.
* [ ] Zero `<div>` elements.
* [ ] T-01 landmarks remain intact.

#### Responsive

* [ ] 375px tested.
* [ ] Zero horizontal scroll.
* [ ] No content clipping.
* [ ] No overflow from long text.
* [ ] All four states tested at 375px.

#### Theme

* [ ] Loading works in light/dark.
* [ ] Live works in light/dark.
* [ ] Empty works in light/dark.
* [ ] Error works in light/dark.
* [ ] `localStorage['theme']` persistence remains functional.
* [ ] Zero console errors during state/theme interaction.

#### Performance

* [ ] CLS = `0` target.
* [ ] LCP < `2.0s` on Fast 3G.
* [ ] State transitions do not cause unnecessary layout shifts.
* [ ] No unnecessary external dependencies.

---

# Decomposition Submission Pipeline

The implementation order MUST be:

```text
TASK_DECOMPOSITION.md
        ↓
Define 4-state state machine
        ↓
T-03A
Loading Skeleton
        ↓
TEST T-03A
        ↓
COMMIT T-03A
        ↓
T-03B
Live Data
        ↓
TEST T-03B
        ↓
COMMIT T-03B
        ↓
T-03C
Empty + Error + Retry
        ↓
TEST T-03C
        ↓
COMMIT T-03C
        ↓
Final 4-state validation
```

### Git History

The final history should make the decomposition independently visible:

```bash
git log --oneline --decorate
```

Expected pattern:

```text
<hash> feat(ui): empty and error states
<hash> feat(css): live data
<hash> feat(css): skeleton
<hash> feat(js): dark mode engine
<hash> feat(css): responsive grid
<hash> feat(css): tokens & reset
```

### Core Rule

> **Never commit first and test later.**

For T-03, the required workflow is:

**Build → Test the specific state → Validate accessibility/responsiveness → Commit → Move to the next state.**

----
# WBS Task M1 — WCAG 2.2 AA Audit

### Task ID

M1

### Task Name

WCAG 2.2 AA Audit — Color Contrast & Landmark Tree

### Objective

Audit the Production Portfolio for WCAG 2.2 AA compliance, focusing on:

* Color contrast: normal text **>= 4.5:1**.
* Correct semantic Landmark Tree structure.
* Accessibility in both **Light** and **Dark** themes.

### Scope

The task includes:

* Auditing text/background contrast.
* Inspecting the semantic Landmark Tree using Chrome DevTools.
* Running automated accessibility tests in both Light and Dark themes.
* Fixing all identified contrast and landmark issues.
* Re-testing before committing.

### Acceptance Criteria

* [ ] All normal text has contrast **>= 4.5:1**.
* [ ] Light Theme passes contrast testing.
* [ ] Dark Theme passes contrast testing.
* [ ] Landmark Tree is logically structured.
* [ ] Exactly one `<main>` landmark exists.
* [ ] `<nav>`, `<header>`, `<aside>`, and `<footer>` are used appropriately.
* [ ] No unnecessary generic containers replace semantic landmarks.
* [ ] Manual DevTools audit passes.
* [ ] Automated accessibility tests pass in both themes.
* [ ] All discovered issues are fixed and re-tested.

### Mandatory Pre-Commit Test Checklist

```text
1. Test Light Theme contrast >= 4.5:1.
2. Test Dark Theme contrast >= 4.5:1.
3. Inspect Landmark Tree in Chrome DevTools.
4. Verify exactly one <main> and correct semantic landmarks.
5. Run automated accessibility test in Light Theme.
6. Run automated accessibility test in Dark Theme.
7. Fix any failures.
8. Re-run all tests.
9. Check DevTools Console for errors.
10. Commit only after all tests pass.
```

### Exact Git Commit

```bash
git add .
git commit -m "fix(a11y): contrast & landmarks"
```
# WBS Task M2 — Focus Trap Audit & Keyboard Navigation

### Task ID

M2

### Task Name

Focus Trap Audit & Keyboard Navigation

### Objective

Audit keyboard accessibility to ensure:

* No **Focus Trap** or stuck keyboard focus.
* Complete **Tab / Shift+Tab / Enter / Space** navigation.
* Focus indicator is always clearly visible.

### Scope

Test the complete page flow, including:

* Navigation and Skip-link.
* Theme toggle.
* Card Retry button.
* Focus movement and visible focus indicator.

### Acceptance Criteria

* [ ] No element creates a Focus Trap.
* [ ] `Tab` moves through all interactive elements in logical order.
* [ ] `Shift+Tab` moves backward correctly.
* [ ] `Enter` activates applicable links/buttons.
* [ ] `Space` activates applicable buttons/toggles.
* [ ] Skip-link works correctly.
* [ ] Theme toggle is keyboard accessible.
* [ ] Card Retry button is keyboard accessible.
* [ ] Focus outline is always visible and is not removed.
* [ ] Focus returns to a logical location after dynamic actions.
* [ ] Full keyboard flow passes from start to end of the page.

### Mandatory Pre-Commit Keyboard Accessibility Test Checklist

| Test                  | Keyboard Input              | Expected Result                                                                                        |
| --------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------ |
| Sequential navigation | `Tab`                       | Focus moves through all interactive elements in logical order.                                         |
| Reverse navigation    | `Shift + Tab`               | Focus moves backward through interactive elements without skipping or trapping.                        |
| Skip-link             | `Tab` → `Enter`             | Skip-link receives focus and moves focus to `<main>`.                                                  |
| Links                 | `Enter`                     | Link activates its intended destination/action.                                                        |
| Buttons               | `Enter`                     | Button triggers its intended action.                                                                   |
| Buttons / toggles     | `Space`                     | Button or toggle activates correctly.                                                                  |
| Theme toggle          | `Tab` → `Enter` / `Space`   | Theme changes correctly and focus remains visible.                                                     |
| Card Retry button     | `Tab` → `Enter` / `Space`   | Retry action executes correctly.                                                                       |
| Composite widgets     | `Arrow Keys`                | Focus/selection moves according to the widget pattern (e.g., tabs/radio groups).                       |
| Dismissible overlay   | `Escape`                    | Overlay closes when dismissible.                                                                       |
| Focus restoration     | Close overlay → check focus | Focus returns to the element that opened the overlay.                                                  |
| Focus visibility      | `Tab` / `Shift + Tab`       | A clear focus outline is always visible and is never removed.                                          |
| Focus trap            | `Tab` / `Shift + Tab`       | Focus never becomes permanently trapped inside an element or component.                                |
| Full-page walkthrough | `F5` → `Tab`                | Complete keyboard-only flow works from the beginning to the end of the page without mouse interaction. |

#### Pre-Commit Validation

* [ ] Perform the complete test using **keyboard only**; do not use the mouse.
* [ ] Verify `Tab` / `Shift + Tab` navigation across the entire page.
* [ ] Verify `Enter` behavior separately for links and buttons.
* [ ] Verify `Space` behavior for buttons and toggle controls.
* [ ] Verify Arrow-key behavior for applicable composite widgets.
* [ ] Verify `Escape` closes all applicable dismissible overlays.
* [ ] Verify focus is restored after closing an overlay.
* [ ] Verify focus indicators remain clearly visible in both Light and Dark themes.
* [ ] Verify there are no keyboard Focus Traps.
* [ ] Fix all failures and repeat the complete keyboard walkthrough before committing.

**Rule:** Test → Identify defect → Fix → Re-test → Commit. Never commit before the complete keyboard accessibility checklist passes.


### Exact Git Commit

```bash
git add .
git commit -m "fix(nav): keyboard trap prevention"
```


