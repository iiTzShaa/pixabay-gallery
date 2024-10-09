const axios = require('axios');

const PIXABAY_API_KEY = '25540812-faf2b76d586c1787d2dd02736';  // Your API key

// Controller to fetch photos with sorting and pagination
exports.getPhotos = async (req, res) => {
  const { category = 'sports', page = 1, sortBy = 'id' } = req.query;

  try {
    const response = await axios.get(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${category}&page=${page}&per_page=9&order=${sortBy}`);
    res.json(response.data.hits);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: 'Failed to fetch photos from Pixabay' });
  }
};
