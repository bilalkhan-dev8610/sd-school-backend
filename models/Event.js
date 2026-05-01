import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  endDate: { type: Date },
  time: { type: String, default: '' },
  venue: { type: String, default: '' },
  category: {
    type: String,
    enum: ['Sports', 'Cultural', 'Academic', 'Annual', 'Workshop', 'Other'],
    default: 'Other'
  },
  image: { type: String, default: '' },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Event', eventSchema);
