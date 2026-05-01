import express from 'express';
import { getStudents, getStudent, createStudent, updateStudent, deleteStudent } from '../controllers/studentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getStudents);
router.get('/:id', protect, getStudent);
router.post('/', protect, createStudent);
router.put('/:id', protect, updateStudent);
router.delete('/:id', protect, deleteStudent);

export default router;
