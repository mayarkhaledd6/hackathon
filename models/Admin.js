// models/Admin.js

import bcrypt from 'bcrypt';
import connection from '../config/database.js';

// Create connection pool
const pool = connection;


// Function to execute SQL queries
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

// Model functions for Hackathons

const Admin = {
  async findByEmailAndPassword(email, password) {
    try {
        // Retrieve admin from database
        const [admin] = await query('SELECT * FROM admin_users WHERE email = ?', [email]);
        // Check if admin exists and compare passwords
        if (admin && await bcrypt.compare(password, admin.password)) {
            return admin;
        } else {
            return null;
        }
    } catch (error) {
        throw new Error('Error finding admin by email and password: ' + error.message);
    }
  }

};

export default Admin;
