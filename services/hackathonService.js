// services/hackathonService.js

import { createHackathon as _createHackathon, getAllHackathons as _getAllHackathons, getHackathonById as _getHackathonById, updateHackathon as _updateHackathon, deleteHackathon as _deleteHackathon } from '../models/Hackathon';
import { createParticipant as _createParticipant, getAllParticipants as _getAllParticipants, getParticipantById as _getParticipantById, updateParticipant as _updateParticipant, deleteParticipant as _deleteParticipant } from '../models/Participant';
import { createTeam as _createTeam, getAllTeams as _getAllTeams, getTeamById as _getTeamById, updateTeam as _updateTeam, deleteTeam as _deleteTeam } from '../models/Team';

// Function to create a new hackathon
async function createHackathon(hackathonData) {
  try {
    const newHackathon = await _createHackathon(hackathonData);
    return newHackathon;
  } catch (error) {
    throw new Error('Error creating hackathon: ' + error.message);
  }
}

// Function to get all hackathons
async function getAllHackathons() {
  try {
    const hackathons = await _getAllHackathons();
    return hackathons;
  } catch (error) {
    throw new Error('Error getting hackathons: ' + error.message);
  }
}

// Function to get hackathon by ID
async function getHackathonById(hackathonId) {
  try {
    const hackathon = await _getHackathonById(hackathonId);
    return hackathon;
  } catch (error) {
    throw new Error('Error getting hackathon by ID: ' + error.message);
  }
}

// Function to update hackathon
async function updateHackathon(hackathonId, newData) {
  try {
    const updatedHackathon = await _updateHackathon(hackathonId, newData);
    return updatedHackathon;
  } catch (error) {
    throw new Error('Error updating hackathon: ' + error.message);
  }
}

// Function to delete hackathon
async function deleteHackathon(hackathonId) {
  try {
    await _deleteHackathon(hackathonId);
    return { message: 'Hackathon deleted successfully' };
  } catch (error) {
    throw new Error('Error deleting hackathon: ' + error.message);
  }
}

// Function to create a new participant
async function createParticipant(participantData) {
  try {
    const participantId = await _createParticipant(participantData);
    return participantId;
  } catch (error) {
    throw new Error('Error creating participant: ' + error.message);
  }
}

// Function to get all participants
async function getAllParticipants() {
  try {
    const participants = await _getAllParticipants();
    return participants;
  } catch (error) {
    throw new Error('Error getting participants: ' + error.message);
  }
}

// Function to get participant by ID
async function getParticipantById(participantId) {
  try {
    const participant = await _getParticipantById(participantId);
    return participant;
  } catch (error) {
    throw new Error('Error getting participant by ID: ' + error.message);
  }
}

// Function to update participant
async function updateParticipant(participantId, newData) {
  try {
    const updatedParticipant = await _updateParticipant(participantId, newData);
    return updatedParticipant;
  } catch (error) {
    throw new Error('Error updating participant: ' + error.message);
  }
}

// Function to delete participant
async function deleteParticipant(participantId) {
  try {
    await _deleteParticipant(participantId);
    return { message: 'Participant deleted successfully' };
  } catch (error) {
    throw new Error('Error deleting participant: ' + error.message);
  }
}

// Function to create a new team
async function createTeam(teamData) {
  try {
    const teamId = await _createTeam(teamData);
    return teamId;
  } catch (error) {
    throw new Error('Error creating team: ' + error.message);
  }
}

// Function to get all teams
async function getAllTeams() {
  try {
    const teams = await _getAllTeams();
    return teams;
  } catch (error) {
    throw new Error('Error getting teams: ' + error.message);
  }
}

// Function to get team by ID
async function getTeamById(teamId) {
  try {
    const team = await _getTeamById(teamId);
    return team;
  } catch (error) {
    throw new Error('Error getting team by ID: ' + error.message);
  }
}

// Function to update team
async function updateTeam(teamId, newData) {
  try {
    const updatedTeam = await _updateTeam(teamId, newData);
    return updatedTeam;
  } catch (error) {
    throw new Error('Error updating team: ' + error.message);
  }
}

// Function to delete team
async function deleteTeam(teamId) {
  try {
    await _deleteTeam(teamId);
    return { message: 'Team deleted successfully' };
  } catch (error) {
    throw new Error('Error deleting team: ' + error.message);
  }
}

export default {
  createHackathon,
  getAllHackathons,
  getHackathonById,
  updateHackathon,
  deleteHackathon,
  createParticipant,
  getAllParticipants,
  getParticipantById,
  updateParticipant,
  deleteParticipant,
  createTeam,
  getAllTeams,
  getTeamById,
  updateTeam,
  deleteTeam
};
