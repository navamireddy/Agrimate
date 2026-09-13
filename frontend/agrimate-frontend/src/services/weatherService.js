import axios from 'axios';

const BASE_URL = '/api/weather';

/**
 * Fetch current weather for a given city.
 * @param {string} city
 * @returns {{ temperature: number, humidity: number, wind: number }}
 */
export const getWeatherByCity = async (city) => {
  if (!city || !city.trim()) {
    throw new Error('City name is required');
  }
  const response = await axios.get(`${BASE_URL}/${encodeURIComponent(city.trim())}`);
  return response.data;
};
