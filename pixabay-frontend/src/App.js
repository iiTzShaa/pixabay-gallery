import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from './redux/actions/photoActions';
import Modal from 'react-modal';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const [category, setCategory] = useState('animals'); // Default category
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Set root element for the modal
  Modal.setAppElement('#root');

  useEffect(() => {
    dispatch(fetchPhotos(category, page));
  }, [category, page, dispatch]);

  const handleNext = () => setPage(page + 1);
  const handlePrev = () => setPage(page > 1 ? page - 1 : 1);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  // List of categories
  const categories = ['animals', 'nature', 'sports', 'food', 'technology', 'travel'];

  return (
    <div className="App">
      {/* Flex container for Prev, Title, and Next */}
      <div className="header-container">
        <button className="prev-button" onClick={handlePrev} disabled={page === 1}>Prev</button>
        <h1 className="title">Pixabay Photo Gallery</h1>
        <button className="next-button" onClick={handleNext}>Next</button>
      </div>

      {/* Category buttons in a new flex container */}
      <div className="category-buttons">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)} {/* Capitalize the first letter */}
          </button>
        ))}
      </div>

      <div className="photo-grid">
        {photos.slice(0, 9).map((photo) => (
          <img key={photo.id} src={photo.webformatURL} alt={photo.tags} className="photo-item" onClick={() => openModal(photo)} />
        ))}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {selectedPhoto && (
          <div>
            <h2>{selectedPhoto.tags}</h2>
            <p>Views: {selectedPhoto.views}</p>
            <p>Downloads: {selectedPhoto.downloads}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;
