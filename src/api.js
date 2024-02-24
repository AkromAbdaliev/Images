import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 7ms-uvWjUjeRKDrC70pxuNdQxl97M-VmCSJDmJnYxEk',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
