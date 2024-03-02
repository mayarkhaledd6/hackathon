// models/Participant.js

import connection from '../config/database.js';

// Create connection pool
const pool = connection;


// Function to execute SQL queries
/*async function query(sql, params) {
  const [rows, fields] = await pool.query(sql, params);
  return rows;
}*/

function executeQuery(sql, params) {
  return new Promise((resolve, reject) => {
    pool.query(sql, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// Model functions for Participants
const Participant = {
  // Create a new participant
  async createParticipant(participantData) {
    try {
      const sql = 'INSERT INTO participants (name, email) VALUES (?, ?)';
      const result = await executeQuery(sql, [participantData.name, participantData.email]);
      return result.insertId;
    } catch (error) {
      throw new Error('Error creating participant: ' + error.message);
    }
  },

  // Get all participants
  async find() {
    try {
      const sql = 'SELECT * FROM participants';
      const participants = await executeQuery(sql);
      return participants;
    } catch (error) {
      throw new Error('Error getting participants: ' + error.message);
    }
  },

  // Get participant by ID
  async findById(participantId) {
    try {
      const sql = 'SELECT * FROM participants WHERE id = ?';
      const [participant] = await executeQuery(sql, [participantId]);
      return participant;
    } catch (error) {
      throw new Error('Error getting participant by ID: ' + error.message);
    }
  },
  // Update participant by ID
  async update(id, newData) {
    try {
      const sql = 'UPDATE participants SET name = ?, email = ? WHERE id = ?';
      const result = await executeQuery(sql, [newData.name, newData.email, id]);
      return result.affectedRows > 0; // Return true if any rows were updated
    } catch (error) {
      throw new Error('Error updating participant: ' + error.message);
    }
  },

  // Delete participant by ID
  async delete(id) {
    try {
      const sql = 'DELETE FROM participants WHERE id = ?';
      const result = await executeQuery(sql, [id]);
      return result.affectedRows > 0; // Return true if any rows were deleted
    } catch (error) {
      throw new Error('Error deleting participant: ' + error.message);
    }
  },
};

export default Participant;
