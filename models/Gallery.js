import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  imageUrl: { type: String, required: true },
  category: {
    type: String,
    enum: ['Sports', 'Cultural', 'Academic', 'Infrastructure', 'Events', 'Other'],
    default: 'Other'
  },
  type: { type: String, enum: ['image', 'video'], default: 'image' }
}, { timestamps: true });

export default mongoose.model('Gallery', gallerySchema);
