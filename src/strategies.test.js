import { describe, expect, it } from "vitest";
import { strategies } from "./strategies.js";

describe("strategy links", () => {
  it("contains 10 strategy titles", () => {
    expect(strategies).toHaveLength(10);
    expect(strategies.every((strategy) => strategy.title)).toBe(true);
  });

  it("publishes only the first strategy link", () => {
    expect(strategies[0].href).toBe(
      "https://joyspace.jd.com/pages/Fk2oSZ1L7udhX93QEbDf",
    );
    expect(strategies.slice(1).every((strategy) => strategy.href === "")).toBe(
      true,
    );
  });
});
