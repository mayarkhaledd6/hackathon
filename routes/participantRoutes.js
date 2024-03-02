// routes/participantRoutes.js

import { Router } from 'express';
import { getAllParticipants, getParticipantById, createParticipant, updateParticipant, deleteParticipant} from '../controllers/participantController.js';

const router = Router();

// Route to get all participants
router.get('/getparticipants', getAllParticipants);

// Route to get a participant by ID
router.get('/getparticipantbyid/:id', getParticipantById);

// Route to create a new participant
router.post('/addparticipant', createParticipant);

// Route to update a participant by ID
router.put('/updateparticipant/:id', updateParticipant);

// Route to delete a participant by ID
router.delete('/deleteparticipant/:id', deleteParticipant);

export default router;
