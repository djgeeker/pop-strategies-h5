# POP Strategies H5 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive npm-based H5 page with one full-width supplied hero image, 11 strategy tabs, and one locally rendered case per strategy.

**Architecture:** Vite serves a framework-free ES module application. Strategy data and selection helpers live in a focused data module, while `main.js` owns DOM rendering and event binding; CSS owns all desktop/mobile presentation.

**Tech Stack:** Vite, native HTML, CSS, JavaScript, Vitest, jsdom

---

## File Structure

- `package.json`: npm scripts and development dependencies.
- `index.html`: semantic page shell and mount points.
- `src/strategies.js`: 11-case data, safe index selection, and field normalization.
- `src/strategies.test.js`: unit tests for data integrity and fallback behavior.
- `src/main.js`: tab and case rendering plus click interaction.
- `src/main.test.js`: DOM interaction and accessibility-state tests.
- `src/style.css`: responsive layout and visual system.
- `public/assets/hero.png`: supplied `104.PNG` hero image.

### Task 1: Bootstrap the tested Vite project

**Files:**
- Create: `package.json`
- Create: `index.html`

- [ ] **Step 1: Add npm scripts and dependencies**

Create `package.json` with:

```json
{
  "name": "pop-strategies-h5",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest run"
  },
  "devDependencies": {
    "jsdom": "^26.1.0",
    "vite": "^6.3.5",
    "vitest": "^3.1.4"
  }
}
```

- [ ] **Step 2: Add the semantic application shell**

Create `index.html` with one `main`, a hero `img`, an `h1` available to assistive technology, a tab-list mount point, and a live case-content mount point.

- [ ] **Step 3: Install dependencies**

Run: `npm install`

Expected: dependencies install successfully and `package-lock.json` is created.

- [ ] **Step 4: Commit**

Run:

```bash
git add package.json package-lock.json index.html
git commit -m "chore: bootstrap Vite H5 project"
```

### Task 2: Build the 11-strategy data model with TDD

**Files:**
- Create: `src/strategies.test.js`
- Create: `src/strategies.js`

- [ ] **Step 1: Write failing data-model tests**

Test that:

```js
expect(strategies).toHaveLength(11);
expect(strategies.every((item) => item.title && item.caseTitle)).toBe(true);
expect(getStrategy(-1)).toEqual(strategies[0]);
expect(getStrategy(99)).toEqual(strategies[0]);
expect(normalizeStrategy({ title: "测试" }).result).toBe("");
```

- [ ] **Step 2: Run tests and verify RED**

Run: `npm test -- src/strategies.test.js`

Expected: FAIL because `src/strategies.js` does not exist.

- [ ] **Step 3: Implement the data module**

Export:

```js
export const strategies = [/* exactly 11 complete case objects */];
export function normalizeStrategy(strategy) { /* return safe string fields */ }
export function getStrategy(index) { /* return first strategy for invalid index */ }
```

- [ ] **Step 4: Run tests and verify GREEN**

Run: `npm test -- src/strategies.test.js`

Expected: all strategy tests PASS.

- [ ] **Step 5: Commit**

Run:

```bash
git add src/strategies.js src/strategies.test.js
git commit -m "feat: add eleven strategy case records"
```

### Task 3: Implement tab switching with TDD

**Files:**
- Create: `src/main.test.js`
- Create: `src/main.js`

- [ ] **Step 1: Write failing DOM tests**

Using jsdom, test that initialization:

```js
expect(document.querySelectorAll('[role="tab"]')).toHaveLength(11);
expect(document.querySelector('[role="tab"][aria-selected="true"]').textContent)
  .toContain("打法 1");
```

Then click the third tab and assert:

```js
expect(document.querySelector('[role="tab"][aria-selected="true"]').textContent)
  .toContain("打法 3");
expect(document.querySelector("#case-title").textContent)
  .toBe(strategies[2].caseTitle);
```

- [ ] **Step 2: Run tests and verify RED**

Run: `npm test -- src/main.test.js`

Expected: FAIL because rendering functions are not implemented.

- [ ] **Step 3: Implement rendering and interaction**

Export `initApp(document)` from `src/main.js`. Render semantic `button` tabs with `role="tab"`, `aria-selected`, and `aria-controls`; render the selected case into the live region; attach click listeners that update the current index and both UI sections.

- [ ] **Step 4: Run tests and verify GREEN**

Run: `npm test -- src/main.test.js`

Expected: all DOM tests PASS.

- [ ] **Step 5: Commit**

Run:

```bash
git add src/main.js src/main.test.js
git commit -m "feat: add accessible strategy switching"
```

### Task 4: Add supplied hero asset and responsive visual design

**Files:**
- Create: `public/assets/hero.png`
- Create: `src/style.css`
- Modify: `src/main.js`

- [ ] **Step 1: Copy the supplied visual**

Copy `/Users/jiahaodong/Downloads/104.PNG` to `public/assets/hero.png`.

- [ ] **Step 2: Implement responsive CSS**

Create a JD-red visual system; preserve the hero aspect ratio; show 11 tabs in one desktop row; make only the tab strip horizontally scrollable on mobile; use a two-column case card on desktop and one column on mobile; include visible hover and focus states plus reduced-motion handling.

- [ ] **Step 3: Add case presentation markup**

Render the case eyebrow, title, summary, background, actions, highlight, and numeric result. Use text labels in addition to color for selected state.

- [ ] **Step 4: Verify unit tests**

Run: `npm test`

Expected: all tests PASS.

- [ ] **Step 5: Commit**

Run:

```bash
git add public/assets/hero.png src/style.css src/main.js
git commit -m "feat: style responsive strategy case page"
```

### Task 5: Build and browser-verify the finished page

**Files:**
- Modify only if verification reveals a defect.

- [ ] **Step 1: Build production assets**

Run: `npm run build`

Expected: Vite completes successfully and writes `dist/`.

- [ ] **Step 2: Start the local development server**

Run: `npm run dev -- --host 127.0.0.1`

Expected: local URL is available.

- [ ] **Step 3: Verify critical browser behavior**

At desktop and mobile widths, confirm:

- hero image is visible and not distorted;
- exactly 11 tabs are available;
- clicking multiple tabs changes the selected state and case content;
- only the tab strip scrolls horizontally on narrow screens;
- keyboard Tab and Enter/Space operate the strategy controls;
- browser console has no errors.

- [ ] **Step 4: Run final verification**

Run:

```bash
npm test
npm run build
git status --short
```

Expected: tests and build PASS; only intentional source or documentation changes remain.
