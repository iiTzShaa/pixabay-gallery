const initialState = {
    photos: [],
    error: null,
  };
  
  const photoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PHOTOS_SUCCESS':
        return {
          ...state,
          photos: action.payload,  // Store the fetched photos in the state
          error: null,
        };
      case 'FETCH_PHOTOS_ERROR':
        return {
          ...state,
          error: action.payload,  // Store the error message in the state
        };
      default:
        return state;
    }
  };
  
  export default photoReducer;