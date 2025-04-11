const db = require("../config/database").db;

module.exports = class Companies {
  constructor(company) {
    this.company = company;
  }

  static async getAll({ search }) {
    return new Promise((resolve, reject) => {
      let sql = "SELECT * FROM `Companies` ORDER BY soon ASC";
      const inputs = [];

      if (search !== undefined && search !== "") {
        sql += "SELECT * FROM `Companies` WHERE name LIKE ?";
        inputs.push("%" + search + "%");
      }

      db.all(sql, inputs, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  async add() {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO `Companies` (`name`, `image`) VALUES (?, ?)",
        [this.company.name, this.company.image],
        (err) => {
          if (err) reject(err);
          else resolve({ success: true });
        }
      );
    });
  }

  async edit() {
    return new Promise((resolve, reject) => {
      console.log(this);
      db.run(
        "UPDATE `Companies` SET `soon` = ? WHERE `id` = ?",
        [this.company.soon, this.company.id],
        (err) => {
          if (err) reject(err);
          else resolve({ success: true });
        }
      );
    });
  }

  static async delete({ ids }) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM Companies WHERE id IN (${ids
        .map(() => "?")
        .join(",")})`;

      db.run(sql, ids, (err) => {
        if (err) reject(err);
        else resolve({ success: true });
      });
    });
  }

  async byName() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM `Companies` WHERE `name` = ?",
        [this.company.name],
        (err, row) => {
          if (err) reject(err);
          else resolve(row);
        }
      );
    });
  }
};
