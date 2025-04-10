const db = require("../config/database").db;

module.exports = class Contact {
  constructor(contact) {
    this.contact = contact;
  }

  static async getAll({ search }) {
    return new Promise((resolve, reject) => {
      let sql = "SELECT * FROM `Contact`";
      const inputs = [];

      if (search !== undefined && search !== "") {
        sql += " WHERE name LIKE ?";
        inputs.push("%" + search + "%");
      }

      db.all(sql, inputs, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }

  static async delete({ ids }) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM Contact WHERE id IN (${ids
        .map(() => "?")
        .join(",")})`;

      db.run(sql, ids, function (err) {
        if (err) reject(err);
        resolve();
      });
    });
  }

  async add() {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO `Contact` (`name`, `email`, `phone`, `message`) VALUES (?, ?, ?, ?)",
        [
          this.contact.name,
          this.contact.email,
          this.contact.phone,
          this.contact.message,
        ],
        function (err) {
          if (err) reject(err);
          resolve();
        }
      );
    });
  }
};
