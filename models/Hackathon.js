// models/hackathon.js

import connection from '../config/database.js';

// Create connection pool
const pool = connection;


// Function to execute SQL queries
/*async function query(sql, params) {
  const [rows, fields] = async () => {
     return await pool.query(sql, params);
}
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

// Model functions for Hackathons

const Hackathon = {

  // Create a new hackathon
  async createHackathon(hackathonData) {
    try {
      const sql = 'INSERT INTO hackathons (name, theme, registration_date_range, event_date, challenge_titles, max_team_size, max_teams) VALUES (?, ?, ?, ?, ?, ?, ?)';
      const result = await executeQuery(sql, [hackathonData.name, hackathonData.theme, hackathonData.registration_date_range, hackathonData.event_date, hackathonData.challenge_titles, hackathonData.max_team_size, hackathonData.max_teams]);
      return result.insertId;
    } catch (error) {
      throw new Error('Error creating hackathon: ' + error.message);
    }
  },

  // Get all hackathons
  async find() {
    try {
    const sql = 'SELECT * FROM hackathons';
    const hackathons = await executeQuery(sql);
    return hackathons;
    } catch (error) {
      throw new Error('Error getting hackathons: ' + error.message);
    }
  },

  // Get hackathon by ID
  async findById(hackathonId) {
    try {
      const sql = 'SELECT * FROM hackathons WHERE id = ?';
      const [hackathon] = await executeQuery(sql, [hackathonId]);
      return hackathon;
    } catch (error) {
      throw new Error('Error getting hackathon by ID: ' + error.message);
    }
  },
  // Update hackathon by ID
  async update(id, newData) {
    try {
      const sql = 'UPDATE hackathons SET name = ?, theme = ?, registration_date_range = ?, event_date = ?, challenge_titles = ?, max_team_size = ?, max_teams = ? WHERE id = ?';
      const result = await executeQuery(sql, [newData.name, newData.theme, newData.registration_date_range, newData.event_date, newData.challenge_titles, newData.max_team_size, newData.max_teams, id]);
      return result.affectedRows > 0; // Return true if any rows were updated
    } catch (error) {
      throw new Error('Error updating hackathon: ' + error.message);
    }
  },

  // Delete hackathon by ID
  async delete(id) {
    try {
      const sql = 'DELETE FROM hackathons WHERE id = ?';
      const result = await query(sql, [id]);
      return result.affectedRows > 0; // Return true if any rows were deleted
    } catch (error) {
      throw new Error('Error deleting hackathon: ' + error.message);
    }
  },
};

export default Hackathon;
