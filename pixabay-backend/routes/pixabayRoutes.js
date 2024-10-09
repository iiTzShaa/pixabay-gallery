const express = require('express');
const { getPhotos } = require('../controllers/pixabayController');
const router = express.Router();

// Route to fetch photos
router.get('/', getPhotos);

module.exports = router;