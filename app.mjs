// app.mjs

import express, { json } from 'express';
//const cors = require('cors');
const app = express();
import cors from 'cors';
import hackathonRoutes from './routes/hackathonRoutes.js';
import participantRoutes from './routes/participantRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import authRoutes from './routes/authRoutes.js';

// Middleware
app.use(json());

app.use(cors());
//app.use(cors());

// Routes
app.use('/api', hackathonRoutes);
app.use('/api', participantRoutes);
app.use('/api', teamRoutes);
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
/*const corsOptions = {
  origin: 'http://localhost:4200', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT' , 'DELETE'], // Allow requests
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow only specific headers
}; */

//app.use(cors(corsOptions));
