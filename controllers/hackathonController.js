// controllers/hackathonController.js

import Hackathon from '../models/Hackathon.js';

// Create a new hackathon
export function createHackathon(req, res) {
  const newHackathon = new Hackathon(req.body);
  newHackathon.save((err, hackathon) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    return res.status(201).json(hackathon);
  });
}

// Get all hackathons
export async function getAllHackathons(req, res) {
  const result= await Hackathon.find((err, hackathons) => {
    if (err) {
       res.status(500).json({ error: 'Error retrieving hackathons' });
    }
  }); 
  res.json(result);
}

// Get a specific hackathon by ID
export function getHackathonById(req, res) {
  Hackathon.findById(req.params.id, (err, hackathon) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving hackathon' });
    }
    if (!hackathon) {
      return res.status(404).json({ error: 'Hackathon not found' });
    }
    res.json(hackathon);
  });
}

// Update details of a specific hackathon
export function updateHackathon(req, res) {
  Hackathon.update(req.params.id, req.body, { new: true }, (err, hackathon) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (!hackathon) {
      return res.status(404).json({ error: 'Hackathon not found' });
    }
    res.json(hackathon);
  });
}

// Delete a specific hackathon by ID
export function deleteHackathon(req, res) {
  Hackathon.delete(req.params.id, (err, hackathon) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (!hackathon) {
      return res.status(404).json({ error: 'Hackathon not found' });
    }
    res.json({ message: 'Hackathon deleted successfully' });
  });
}
