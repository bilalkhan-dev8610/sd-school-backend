/**
 * Seed Script - Creates default admin + sample data
 * Run: node seed.js
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from './models/Admin.js';
import Notice from './models/Notice.js';
import Event from './models/Event.js';
import Gallery from './models/Gallery.js';
import Teacher from './models/Teacher.js';

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      Admin.deleteMany({}),
      Notice.deleteMany({}),
      Event.deleteMany({}),
      Gallery.deleteMany({}),
      Teacher.deleteMany({}),
    ]);
    console.log('🗑️  Cleared existing data');

    // Create Admin
    await Admin.create({
      name: 'School Admin',
      email: 'admin@school.com',
      password: 'admin123',
      role: 'admin',
    });
    console.log('👤 Admin created: admin@school.com / admin123');

    // Create sample Notices
    await Notice.insertMany([
      { title: 'Annual Examination Schedule 2024', content: 'Annual examinations will commence from 1st March 2024. All students must carry their admit cards. Syllabus available at school office.', category: 'Examination', isImportant: true, postedBy: 'Principal' },
      { title: 'Admission Open for Session 2026-27', content: 'Admissions are now open for classes I to XII. Limited seats available. Parents are requested to visit the school office with required documents.', category: 'Admission', isImportant: true, postedBy: 'Admin' },
      { title: 'Republic Day Celebration', content: 'Republic Day will be celebrated on 26th January 2024 at 8:00 AM in school premises. All students and staff must be present.', category: 'Event', isImportant: false, postedBy: 'Admin' },
      { title: 'Winter Vacation Notice', content: 'School will remain closed for winter vacation from 25th December to 1st January. Classes will resume from 2nd January 2024.', category: 'Holiday', isImportant: false, postedBy: 'Admin' },
      { title: 'Science Fair Registration Open', content: 'Students interested in participating in the Annual Science Fair should register with their class teacher before 15th January 2024.', category: 'Academic', isImportant: false, postedBy: 'Science Department' },
    ]);
    console.log('📋 Sample notices created');

    // Create sample Events
    const now = new Date();
    await Event.insertMany([
      { title: 'Annual Sports Day 2024', description: 'A grand celebration of sports featuring athletics, cricket, volleyball, and kabaddi competitions.', date: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000), time: '8:00 AM', venue: 'School Sports Ground', category: 'Sports' },
      { title: 'Science Fair & Exhibition', description: 'Students showcase innovative science projects. Open to all classes. Best projects win prizes.', date: new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000), time: '10:00 AM', venue: 'School Hall', category: 'Academic' },
      { title: 'Annual Cultural Evening', description: 'An evening of music, dance, drama and cultural performances by our talented students.', date: new Date(now.getTime() + 21 * 24 * 60 * 60 * 1000), time: '5:00 PM', venue: 'School Auditorium', category: 'Cultural' },
      { title: 'Annual Prize Distribution Ceremony', description: 'Celebrating academic and co-curricular achievements of the year.', date: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000), time: '11:00 AM', venue: 'School Hall', category: 'Annual' },
    ]);
    console.log('📅 Sample events created');

    // Create sample Gallery items
    await Gallery.insertMany([
      { title: 'Annual Sports Day', imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', category: 'Sports', type: 'image' },
      { title: 'Science Exhibition', imageUrl: 'https://images.unsplash.com/photo-1532094349884-543559a8e163?w=600&q=80', category: 'Academic', type: 'image' },
      { title: 'Cultural Program', imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&q=80', category: 'Cultural', type: 'image' },
      { title: 'School Building', imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80', category: 'Infrastructure', type: 'image' },
      { title: 'Prize Distribution', imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', category: 'Events', type: 'image' },
      { title: 'Classroom Activity', imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', category: 'Academic', type: 'image' },
    ]);
    console.log('🖼️  Sample gallery items created');

    // Create sample Teachers
    await Teacher.insertMany([
      { name: 'Sh. Subedin ', employeeId: 'EMP001', subject: 'Science', designation: 'Principal', qualification: 'M.Sc., B.Ed.', experience: 25 },
      { name: 'Sh. Javed Khan', employeeId: 'EMP002', subject: 'Mathematics', designation: 'Vice Principal', qualification: 'M.Sc., B.Ed.', experience: 20 },
      { name: 'Smt. Ruksana', employeeId: 'EMP003', subject: 'English', designation: 'Head of Department', qualification: 'M.A., B.Ed.', experience: 18 },
      { name: 'Sh. Samim Khan', employeeId: 'EMP004', subject: 'Physical Education', designation: 'Teacher', qualification: 'B.P.Ed.', experience: 15 },
      { name: 'Smt. Priya Devi', employeeId: 'EMP005', subject: 'Hindi', designation: 'Senior Teacher', qualification: 'M.A., B.Ed.', experience: 12 },
    ]);
    console.log('👩‍🏫 Sample teachers created');

    console.log('\n✅ ====== SEED COMPLETE ======');
    console.log('🔐 Admin Login:');
    console.log('   Email:    admin@school.com');
    console.log('   Password: admin123');
    console.log('=============================\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seed failed:', error.message);
    process.exit(1);
  }
};

seed();
