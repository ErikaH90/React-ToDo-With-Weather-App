import { getWeatherIcon } from "../src/utils/weatherUtils";
import { getClothingAdvice } from "../src/utils/weatherUtils";
import { describe, it, expect } from "vitest";

describe("getWeatherIcon", () => {
    it("ska returnera sol för klart väder", () => {
        expect(getWeatherIcon(0)).toBe("☀️");
});

  it("ska returnera molnigt för molnigt väder", () => {
    expect(getWeatherIcon(2)).toBe("⛅");
  });

  it("ska returnera regn för regnväder", () => {
    expect(getWeatherIcon(61)).toBe("🌧️");
  });

  it("ska returnera snö för snöväder", () => {
    expect(getWeatherIcon(71)).toBe("🌨️");
  });

  it("ska returnera åska för åskväder", () => {
    expect(getWeatherIcon(95)).toBe("⛈️");
  });
});

describe("getClothingAdvice", () => {

    it("om temperaturen är under 5 ska den ge rådet att ta på sig en varm jacka, mössa och handskar", () => {
        expect(getClothingAdvice(3, 0)).toBe("Ta på dig en varm jacka, mössa och handskar.");
    });
    it("om temperaturen är mellan 5 och 15 ska den ge rådet att ta på sig en jacka eller varm tröja", () => {
        expect(getClothingAdvice(10, 0)).toBe("Ta på dig en jacka eller varm tröja.");
    });
    it("om temperaturen är mellan 15 och 20 ska den ge rådet att ta på sig en tunn jacka eller tröja", () => {
        expect(getClothingAdvice(18, 0)).toBe("En tunn jacka eller tröja kan vara bra.");
    });
});