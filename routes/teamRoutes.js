// routes/teamRoutes.js

import { Router } from 'express';
import { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam } from '../controllers/teamController.js';

const router = Router();

// Route to get all teams
router.get('/getteams', getAllTeams);

// Route to get a team by ID
router.get('/getteambyid/:id', getTeamById);

// Route to create a new team
router.post('/addteam', createTeam);

// Route to update a team by ID
router.put('/updateteam/:id', updateTeam);

// Route to delete a team by ID
router.delete('/deleteteam/:id', deleteTeam);

export default router;
