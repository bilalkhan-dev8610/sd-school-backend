import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  rollNumber: { type: String, required: true, unique: true },
  class: { type: String, required: true },
  section: { type: String, default: 'A' },
  fatherName: { type: String, required: true },
  motherName: { type: String, default: '' },
  dob: { type: Date },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  phone: { type: String, default: '' },
  address: { type: String, default: '' },
  admissionYear: { type: Number, default: new Date().getFullYear() },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);
