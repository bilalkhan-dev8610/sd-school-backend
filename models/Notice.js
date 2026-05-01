import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  category: {
    type: String,
    enum: ['Academic', 'Examination', 'Holiday', 'Event', 'Admission', 'General'],
    default: 'General'
  },
  isImportant: { type: Boolean, default: false },
  attachment: { type: String, default: '' }, // file URL
  postedBy: { type: String, default: 'Admin' }
}, { timestamps: true });

export default mongoose.model('Notice', noticeSchema);
