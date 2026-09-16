import { describe, it, expect } from "vitest";
import { getStockholmWeather } from "../src/services/weatherApi.js";

describe("getStockholmWeather", () => {
    it("returnerar objekt med temperatur och väderkod som nummer", async () => {
        const data = await getStockholmWeather();

        expect(data).toEqual(
            expect.objectContaining({
                temperature: expect.any(Number),
                weatherCode: expect.any(Number),
            }),
        );
    });
});