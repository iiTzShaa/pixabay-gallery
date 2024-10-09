import Modal from 'react-modal';
import React from 'react';

const PhotoDetailsModal = ({ isOpen, onRequestClose, photo }) => {
  if (!photo) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Photo Details</h2>
      <p>Views: {photo.views}</p>
      <p>Downloads: {photo.downloads}</p>
      <p>Collections: {photo.collections}</p>
    </Modal>
  );
};

export default PhotoDetailsModal;