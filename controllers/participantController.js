// controllers/participantController.js

import Participant from '../models/Participant.js';

// Create a new participant
export function createParticipant(req, res) {
  const newParticipant = new Participant(req.body);
  newParticipant.save((err, participant) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json(participant);
  });
}

// Get all participants
export async function getAllParticipants(req, res) {
  const result= await Participant.find((err, participants) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving participants' });
    }
  });
  res.json(result);
}

// Get a specific participant by ID
export function getParticipantById(req, res) {
  Participant.findById(req.params.id, (err, participant) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving participant' });
    }
    if (!participant) {
      return res.status(404).json({ error: 'Participant not found' });
    }
    res.json(participant);
  });
}

// Update details of a specific participant
export function updateParticipant(req, res) {
  Participant.update(req.params.id, req.body, { new: true }, (err, participant) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (!participant) {
      return res.status(404).json({ error: 'Participant not found' });
    }
    res.json(participant);
  });
}

// Delete a specific participant by ID
export function deleteParticipant(req, res) {
  Participant.delete(req.params.id, (err, participant) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (!participant) {
      return res.status(404).json({ error: 'Participant not found' });
    }
    res.json({ message: 'Participant deleted successfully' });
  });
}
