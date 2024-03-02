// controllers/teamController.js

import Participant from '../models/Participant.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Hackathon from '../models/Hackathon.js';

export async function createTeam(req, res) {
  const {hackathon_id,name, participants } = req.body;
  try{
     // Check if the hackathon exists and if the maximum number of teams has been reached
     const hackathon = await Hackathon.findById(hackathon_id);
     if (!hackathon) {
       return res.status(404).json({ error: 'Hackathon not found' });
     }
     const teamsCount = await Team.countTeamsByHackathonId(hackathon_id);
     if (teamsCount >= hackathon.max_num_of_teams) {
       return res.status(400).json({ error: 'Maximum number of teams reached for this hackathon' });
     }
     
  }catch(err){
    return res.status(400).json({ error: err.message });
  }

  try {

    // Insert team
    const TeamID = await Team.createTeam(req.body); 

    // Insert participants
    const participantPromises = participants.map(async participant => {
      participant.teamID = TeamID;

      const UserID = await User.GetUserIDbyEmail(participant.email);
      participant.userid = UserID;

      const participantID = await Participant.createParticipant(participant); 
    });
    await Promise.all(participantPromises);
    res.json("Successfully added");

  } catch (error) {
    console.error('Error creating team and participants:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get all teams
export async function getAllTeams(req, res) {
  const result= await Team.find((err, teams) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving teams' });
    }
  });
  res.json(result);
}

// Get a specific team by ID
export function getTeamById(req, res) {
  Team.findById(req.params.id, (err, team) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving team' });
    }
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.json(team);
  });
}

// Update details of a specific team
export function updateTeam(req, res) {
  Team.update(req.params.id, req.body, { new: true }, (err, team) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.json(team);
  });
}

// Delete a specific team by ID
export function deleteTeam(req, res) {
  Team.delete(req.params.id, (err, team) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.json({ message: 'Team deleted successfully' });
  });
}
