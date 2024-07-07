const db = require('../config/db');
const bcrypt = require('bcryptjs');

class User {
  static async create(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    return new Promise((resolve, reject) => {
      db.query(query, [email, hashedPassword], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = ?';
    return new Promise((resolve, reject) => {
      db.query(query, [email], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  }
}

module.exports = User;
