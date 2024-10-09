import axios from 'axios';

export const fetchPhotos = (category, page = 1, sortBy = 'id') => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/photos?category=${category}&page=${page}&sortBy=${sortBy}`);
    dispatch({ type: 'FETCH_PHOTOS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PHOTOS_ERROR', payload: error.message });
  }
};
