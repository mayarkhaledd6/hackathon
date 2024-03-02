// controllers/hackathonController.js

import Hackathon from '../models/Hackathon.js';

// Create a new hackathon
export async function createHackathon(req, res) {
  try
  {
    const result= await Hackathon.createHackathon(req.body); 
    res.json(result);
  }
  catch (err) {
     res.status(400).json({ error: 'Error creating hackathon ' || err.message });
  }
}

// Get all hackathons
export async function getAllHackathons(req, res) {
  try
  {
    const result= await Hackathon.find(); 
    res.json(result);
  }
  catch (error) {
    res.status(500).json({ error: 'Error retrieving hackathons ' || error.message });
  }
}

// Get a specific hackathon by ID
export async function getHackathonById(req, res) {
  try
  {
    const result= await Hackathon.findById(req.params.id);
    res.json(result);
  }
  catch (error) {
    res.status(500).json({ error: 'Error retrieving hackathon with id " '|| req.params.id ||' '|| error.message  });
  }
}

// Update details of a specific hackathon
export async function updateHackathon(req, res) {
  try
  {
    const result= await Hackathon.update(req.params.id, req.body)
    if (!result) 
          res.status(404).json({ error: 'Hackathon not found' });
    else
          res.json(result);
  }
  catch (err) {
    res.status(500).json({ error: 'Error updating hackathon with id " '|| req.params.id ||' '|| err.message});
  }
}

// Delete a specific hackathon by ID
export async function deleteHackathon(req, res) {
  try
  {
    const result= await Hackathon.delete(req.params.id);
    if (!result) 
          res.status(404).json({ error: 'Hackathon not found' });
    else
          res.json({ message: 'Hackathon deleted successfully' });
  }
  catch (err) {
    res.status(500).json({ error: 'Error deleting hackathon with id " '|| req.params.id ||' '|| err.message });
  }
  
}
