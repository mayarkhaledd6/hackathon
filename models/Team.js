// models/Team.js

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
// Model functions for Teams
const Team = {

  // Create a new team
  async createTeam(teamData) {
    try {
      const sql = 'INSERT INTO teams (hackathon_id, team_name,selected_Challenge) VALUES (?,?,?)';
      const result = await query(sql, [teamData.hackathon_id,teamData.name,teamData.selectedChallenge]);
      return result.insertId;
    } catch (error) {
      throw new Error('Error creating team: ' + error.message);
    }
  },

  // Get all teams
  async find() {
    try {
      const sql = 'SELECT * FROM teams';
      const teams = await query(sql);
      return teams;
    } catch (error) {
      throw new Error('Error getting teams: ' + error.message);
    }
  },

  // Get team by ID
  async findById(teamId) {
    try {
      const sql = 'SELECT * FROM teams WHERE id = ?';
      const [team] = await query(sql, [teamId]);
      return team;
    } catch (error) {
      throw new Error('Error getting team by ID: ' + error.message);
    }
  },

  // Update team by ID
  async update(id, newData) {
    try {
      const sql = 'UPDATE teams SET name = ? WHERE id = ?';
      const result = await query(sql, [newData.name, id]);
      return result.affectedRows > 0; // Return true if any rows were updated
    } catch (error) {
      throw new Error('Error updating team: ' + error.message);
    }
  },

  // Delete team by ID
  async delete(id) {
    try {
      const sql = 'DELETE FROM teams WHERE id = ?';
      const result = await query(sql, [id]);
      return result.affectedRows > 0; // Return true if any rows were deleted
    } catch (error) {
      throw new Error('Error deleting team: ' + error.message);
    }
  },
   // Count teams by hackathon ID
   async countTeamsByHackathonId(hackathonId) {
    try {
      const sql = 'SELECT COUNT(*) AS teamCount FROM teams WHERE hackathon_id = ?';
      const [{ teamCount }] = await query(sql, [hackathonId]);
      return teamCount;
    } catch (error) {
      throw new Error('Error counting teams by hackathon ID: ' + error.message);
    }
  }
};

export default Team;
