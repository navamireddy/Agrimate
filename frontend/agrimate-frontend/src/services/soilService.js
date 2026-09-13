import axios from 'axios';

const BASE_URL = '/api/soil';

/**
 * Analyze soil conditions and get fertilizer recommendations.
 * @param {{ moisture: number, nitrogen: number, phosphorus: number }} data
 * @returns {{ fertilizer: string, irrigation: string }}
 */
export const analyzeSoil = async (data) => {
  const payload = {
    moisture:   parseFloat(data.moisture),
    nitrogen:   parseFloat(data.nitrogen),
    phosphorus: parseFloat(data.phosphorus),
  };

  if (isNaN(payload.moisture) || isNaN(payload.nitrogen) || isNaN(payload.phosphorus)) {
    throw new Error('All soil values must be valid numbers');
  }

  const response = await axios.post(BASE_URL, payload);
  return response.data;
};
