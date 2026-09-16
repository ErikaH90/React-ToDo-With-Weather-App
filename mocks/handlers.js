import { http, HttpResponse } from 'msw';
import { WEATHER_URL } from '../src/services/weatherApi.js';
import { mockWeatherData } from './mockWeatherData.js';

export const handlers = [
    http.get(WEATHER_URL, () => {
        return HttpResponse.json(mockWeatherData);
    }),

];
