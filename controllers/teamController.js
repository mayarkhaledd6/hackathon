// controllers/teamController.js

import Team from '../models/Team.js';

// Create a new team
export function createTeam(req, res) {
  const newTeam = new Team(req.body);
  newTeam.save((err, team) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json(team);
  });
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
