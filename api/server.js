import express from 'express';
import mongoose from 'mongoose';
const app = express();

import cors from 'cors';
app.use(cors());
app.use(express.json());
// ✅ MongoDB URI (replace with your own if needed)
const MONGODB_URI ="mongodb+srv://abhishek002684:Z541trys2JGf6PXu@cluster0.gk1kamp.mongodb.net/"; 

// ✅ Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Test API route

app.get('/test', (req, res) => {
  return res.json('🚀 Server is running!');
});

// ✅ Start server
app.listen(3000, () => {
  console.log(`🚀 Server is listening on http://localhost:${3000}`);
});