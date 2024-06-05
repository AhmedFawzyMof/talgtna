const db = require("../config/database").db;

class Companies {
  constructor({ name, image }) {
    this.name = name;
    this.image = image;
  }

  static async getAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM `Companies`", (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  async add() {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO `Companies` (`name`, `image`) VALUES (?, ?)",
        [this.name, this.image],
        (err) => {
          if (err) reject(err);
          else resolve({ success: true, id: this.lastID });
        }
      );
    });
  }

  async edit() {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE `Companies` SET `name` = ?, `image` = ? WHERE `id` = ?",
        [this.name, this.image, this.id],
        (err) => {
          if (err) reject(err);
          else resolve({ success: true, changes: this.changes });
        }
      );
    });
  }

  async byName() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM `Companies` WHERE `name` = ?",
        [this.name],
        (err, row) => {
          if (err) reject(err);
          else resolve(row);
        }
      );
    });
  }
}

module.exports = Companies;
