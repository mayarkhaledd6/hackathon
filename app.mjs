// app.js

import express, { json } from 'express';
const app = express();
import hackathonRoutes from './routes/hackathonRoutes.js';
import participantRoutes from './routes/participantRoutes.js';
import teamRoutes from './routes/teamRoutes.js';

// Middleware
app.use(json());

// Routes
app.use('/api', hackathonRoutes);
app.use('/api', participantRoutes);
app.use('/api', teamRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
