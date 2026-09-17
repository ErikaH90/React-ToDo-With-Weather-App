import { describe, it, expect } from "vitest";
import { WEATHER_URL, getStockholmWeather } from "../src/services/weatherApi.js";
import { server } from "../mocks/server.js";
import { http, HttpResponse } from "msw";

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

     it("kastar fel om väder-API:t svarar med ett fel", async () => {
    server.use(
      http.get(WEATHER_URL, () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    await expect(getStockholmWeather()).rejects.toThrow(
      "Det gick inte att hämta vädret.",
    );
  });
});
