import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import ContactSubmission from './models/contactModel'; // Make sure the path is correct

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/submit-form', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newSubmission = new ContactSubmission({ name, email, message });
    await newSubmission.save();
    res.status(201).json({ message: 'Form submitted successfully', submission: newSubmission });
  } catch (error) {
    res.status(400).json({ message: 'Error submitting form', error });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
