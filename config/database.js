// config/database.js

import { createConnection } from 'mysql';

const connection = createConnection({
  host: '127.0.0.1',
  user: 'root',
  port: '3306',
  password: 'root',
  database: 'hackathon_portal'
});

export default connection;
