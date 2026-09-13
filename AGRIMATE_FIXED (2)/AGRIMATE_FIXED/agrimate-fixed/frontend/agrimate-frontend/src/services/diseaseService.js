import axios from 'axios';

const BASE_URL = '/api/disease';

/**
 * Upload a plant image and detect disease.
 * @param {File} imageFile - the image file from file input
 * @returns {{ disease: string, solution: string, prevention: string }}
 */
export const detectDisease = async (imageFile) => {
  if (!imageFile) {
    throw new Error('Image file is required');
  }

  const formData = new FormData();
  formData.append('image', imageFile);

  const response = await axios.post(BASE_URL, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
};
