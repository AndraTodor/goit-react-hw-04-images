import axios from 'axios';

const API_KEY = '45001008-a8478de3e072fcb427e163bfe';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      q: query,
      page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data.hits;
};
