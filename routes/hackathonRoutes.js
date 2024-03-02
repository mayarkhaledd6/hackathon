// routes/hackathonRoutes.js

import { Router } from 'express';
import { getAllHackathons, getHackathonById, getHackathonByUserId, createHackathon, updateHackathon, deleteHackathon  } from '../controllers/hackathonController.js';

const router = Router();

// Route to get all hackathons
router.get('/gethackathons', getAllHackathons);

// Route to get a hackathon by ID
router.get('/gethackathonbyid/:id', getHackathonById);

// Route to get a hackathon by ID
router.get('/gethackathonbyuserid/:id', getHackathonByUserId);

// Route to create a new hackathon
router.post('/addhackathon', createHackathon);

// Route to update a hackathon by ID
router.put('/updatehackathons/:id', updateHackathon);

// Route to delete a hackathon by ID
router.delete('/deletehackathons/:id', deleteHackathon);

export default router;
