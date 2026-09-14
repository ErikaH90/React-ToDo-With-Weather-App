import { describe, it, expect } from "vitest";
import { validateTitle } from "../src/utils/taskUtils";

describe("validateTitle", () => {
    it("ska ge fel om titeln är tom", () => {
    expect(validateTitle("")).toBe(
      "Skriv en uppgift innan du fortsätter."
    );
  });

  it("ska ge fel om titeln är kortare än 2 tecken", () => {
    expect(validateTitle("a")).toBe(
      "Uppgiften måste innehålla minst två tecken."
    );
  });
});
