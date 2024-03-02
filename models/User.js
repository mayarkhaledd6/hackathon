// models/User.js

import bcrypt from 'bcrypt';
import connection from '../config/database.js';

const pool= connection;

// Function to execute SQL queries
async function query(sql, params) {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

const User = {
  // Function to register a new user
  async register(username, email, password) {
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Insert user into the database
      const sql = 'INSERT INTO competitor_users (username, email, password) VALUES (?, ?, ?)';
      await query(sql, [username, email, hashedPassword]);

      return { message: 'User registered successfully' };
    } catch (error) {
      throw new Error('Error registering user: ' + error.message);
    }
  },

  // Function to authenticate a user
  async authenticate(email, password) {
    try {
      // Retrieve user from the database
      const sql = 'SELECT * FROM competitor_users WHERE email = ?';
      const [user] = await query(sql, [email]);

      // Check if user exists and compare passwords
      if (user && await bcrypt.compare(password, user.password)) {
        return { message: 'Authentication successful' };
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      throw new Error('Error authenticating user: ' + error.message);
    }
  }
};

export default  User;
