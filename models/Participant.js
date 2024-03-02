// models/Participant.js

import connection from '../config/database.js';

// Create connection pool
const pool = connection;

async function query(sql, params) {
  return new Promise((resolve, reject) => {
    pool.query(sql,params, (error, results) => {
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
      console.log(participantData);
      const sql = 'INSERT INTO participants (team_id, title, name, email, mobile , userid , emp_no) VALUES (?, ?, ?, ?, ?, ?, ?)';
      const result = await query(sql, [participantData.teamID,participantData.title,participantData.name, participantData.email, participantData.mobile, participantData.userid,participantData.empno]);
      return result.insertId;
    } catch (error) {
      throw new Error('Error creating participant: ' + error.message);
    }
  },

  // Get all participants
  async find() {
    try {
      const sql = 'SELECT * FROM participants';
      const participants = await query(sql);
      return participants;
    } catch (error) {
      throw new Error('Error getting participants: ' + error.message);
    }
  },

  // Get participant by ID
  async findById(participantId) {
    try {
      const sql = 'SELECT * FROM participants WHERE id = ?';
      const [participant] = await query(sql, [participantId]);
      return participant;
    } catch (error) {
      throw new Error('Error getting participant by ID: ' + error.message);
    }
  },
  // Update participant by ID
  async update(id, newData) {
    try {
      const sql = 'UPDATE participants SET name = ?, email = ? WHERE id = ?';
      const result = await query(sql, [newData.name, newData.email, id]);
      return result.affectedRows > 0; // Return true if any rows were updated
    } catch (error) {
      throw new Error('Error updating participant: ' + error.message);
    }
  },
  async updateUserID(id, userid) {
    try {
      const sql = 'UPDATE participants SET userid = ? WHERE id = ?';
      const result = await query(sql, [userid , id]);
      return result.affectedRows > 0; // Return true if any rows were updated
    } catch (error) {
      throw new Error('Error updating participant: ' + error.message);
    }
  },

  // Delete participant by ID
  async delete(id) {
    try {
      const sql = 'DELETE FROM participants WHERE id = ?';
      const result = await query(sql, [id]);
      return result.affectedRows > 0; // Return true if any rows were deleted
    } catch (error) {
      throw new Error('Error deleting participant: ' + error.message);
    }
  },
};

export default Participant;
