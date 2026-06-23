import { describe, expect, it } from "vitest";
import {
  getStrategy,
  normalizeStrategy,
  strategies,
} from "./strategies.js";

describe("strategy data", () => {
  it("contains exactly 10 complete strategy entries", () => {
    expect(strategies).toHaveLength(10);
    expect(
      strategies.every(
        (item) =>
          item.title &&
          item.coreLogic &&
          item.audience,
      ),
    ).toBe(true);
  });

  it("falls back to the first strategy for invalid indexes", () => {
    expect(getStrategy(-1)).toEqual(strategies[0]);
    expect(getStrategy(99)).toEqual(strategies[0]);
    expect(getStrategy(Number.NaN)).toEqual(strategies[0]);
  });

  it("normalizes missing case fields to empty strings", () => {
    expect(normalizeStrategy({ title: "测试" })).toEqual({
      title: "测试",
      coreLogic: "",
      audience: "",
    });
  });
});
