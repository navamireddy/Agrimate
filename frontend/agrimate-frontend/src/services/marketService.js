import axios from 'axios';

const BASE_URL = '/api/market';

/**
 * Fetch current market data for a given crop.
 * @param {string} crop - crop name (e.g., "wheat", "rice")
 * @returns {{ crop: string, price: number, trend: string, suggestion: string }}
 */
export const getMarketPrice = async (crop) => {
  if (!crop || !crop.trim()) {
    throw new Error('Crop name is required');
  }
  const response = await axios.get(`${BASE_URL}/${encodeURIComponent(crop.trim().toLowerCase())}`);
  return response.data;
};

/**
 * List of common crops for quick selection.
 */
export const COMMON_CROPS = [
  { name: 'Wheat',      emoji: '🌾', value: 'wheat'      },
  { name: 'Rice',       emoji: '🍚', value: 'rice'       },
  { name: 'Maize',      emoji: '🌽', value: 'maize'      },
  { name: 'Cotton',     emoji: '🪴', value: 'cotton'     },
  { name: 'Sugarcane',  emoji: '🍬', value: 'sugarcane'  },
  { name: 'Soybean',    emoji: '🫘', value: 'soybean'    },
  { name: 'Tomato',     emoji: '🍅', value: 'tomato'     },
  { name: 'Onion',      emoji: '🧅', value: 'onion'      },
  { name: 'Potato',     emoji: '🥔', value: 'potato'     },
  { name: 'Groundnut',  emoji: '🥜', value: 'groundnut'  },
  { name: 'Mustard',    emoji: '🟡', value: 'mustard'    },
  { name: 'Barley',     emoji: '🌿', value: 'barley'     },
];
