// @vitest-environment jsdom

import { beforeEach, describe, expect, it } from "vitest";
import { initApp } from "./main.js";

describe("strategy page", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="strategy-tabs"></div>';
  });

  it("renders all strategy cards", () => {
    initApp(document);

    expect(document.querySelectorAll(".strategy-card")).toHaveLength(10);
  });

  it("links only the first strategy to its configured destination", () => {
    initApp(document);

    expect(document.querySelectorAll("a.strategy-card")).toHaveLength(1);
    expect(document.querySelector("a.strategy-card").href).toBe(
      "https://joyspace.jd.com/pages/Fk2oSZ1L7udhX93QEbDf",
    );
    expect(document.querySelectorAll(".strategy-card.is-pending")).toHaveLength(9);
  });
});
