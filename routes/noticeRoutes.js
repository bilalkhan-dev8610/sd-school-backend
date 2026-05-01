import express from 'express';
import { getNotices, getNotice, createNotice, updateNotice, deleteNotice } from '../controllers/noticeController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getNotices);
router.get('/:id', getNotice);
router.post('/', protect, createNotice);
router.put('/:id', protect, updateNotice);
router.delete('/:id', protect, deleteNotice);

export default router;
