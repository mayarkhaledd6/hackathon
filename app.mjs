// app.mjs

import express, { json } from 'express';
const app = express();
import hackathonRoutes from './routes/hackathonRoutes.js';
import participantRoutes from './routes/participantRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import authRoutes from './routes/authRoutes.js';

// Middleware
app.use(json());

// Routes
app.use('/api', hackathonRoutes);
app.use('/api', participantRoutes);
app.use('/api', teamRoutes);
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
