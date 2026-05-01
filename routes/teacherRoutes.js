import express from 'express';
import { getTeachers, getTeacher, createTeacher, updateTeacher, deleteTeacher } from '../controllers/teacherController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getTeachers);
router.get('/:id', getTeacher);
router.post('/', protect, createTeacher);
router.put('/:id', protect, updateTeacher);
router.delete('/:id', protect, deleteTeacher);

export default router;
