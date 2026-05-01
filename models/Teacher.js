import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  employeeId: { type: String, required: true, unique: true },
  subject: { type: String, required: true },
  qualification: { type: String, default: '' },
  experience: { type: Number, default: 0 }, // years
  phone: { type: String, default: '' },
  email: { type: String, default: '' },
  designation: { type: String, default: 'Teacher' },
  photo: { type: String, default: '' },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Teacher', teacherSchema);
