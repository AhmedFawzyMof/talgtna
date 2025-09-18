const { v4: uuidv4 } = require("uuid");
const db = require("../config/database").db;

class Promoters {
  static async create({ name, code }) {
    return new Promise((resolve, reject) => {
      const id = uuidv4();
      const query = `INSERT INTO Promoters (id, name, code, installs) VALUES (?, ?, ?, 0)`;
      const params = [id, name, code];

      db.run(query, params, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.lastID);
        }
      });
    });
  }

  static async readAll() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM Promoters`;

      db.all(query, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  static async read(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM Promoters WHERE id = ?`;
      const params = [id];

      db.get(query, params, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  static async update({ id, name, code }) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE Promoters SET name = ?, code = ? WHERE id = ?`;
      const params = [name, code, id];

      db.run(query, params, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.changes);
        }
      });
    });
  }

  static async delete(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM Promoters WHERE id = ?`;
      const params = [id];

      db.run(query, params, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.changes);
        }
      });
    });
  }
  static async incrementInstalls(code) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE Promoters SET installs = installs + 1 WHERE code = ?`;
      const params = [code];

      db.run(query, params, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.changes);
        }
      });
    });
  }
}

module.exports = Promoters;
