import express from 'express';
import { getGallery, getGalleryItem, createGalleryItem, updateGalleryItem, deleteGalleryItem } from '../controllers/galleryController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getGallery);
router.get('/:id', getGalleryItem);
router.post('/', protect, createGalleryItem);
router.put('/:id', protect, updateGalleryItem);
router.delete('/:id', protect, deleteGalleryItem);

export default router;
