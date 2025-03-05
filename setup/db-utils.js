const mysql = require('mysql2/promise');
require('dotenv').config(); // Load environment variables from .env file

class Database {
  constructor() {
    this.connection = null;
  }

  async connect() {
    if (!this.connection) {
      this.connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
    }
    return this.connection;
  }

  async query(sql, params = []) {
    const connection = await this.connect();
    const [rows] = await connection.execute(sql, params);
    return rows;
  }

  async close() {
    if (this.connection) {
      await this.connection.end();
      this.connection = null;
    }
  }
}

module.exports = new Database();
