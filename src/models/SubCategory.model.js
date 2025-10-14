const db = require("../config/database").db;

module.exports = class SubCategory {
  constructor(subcategory) {
    this.subcategory = subcategory;
  }

  static async getAll({ search }) {
    return new Promise((resolve, reject) => {
      let sql = "SELECT * FROM `SubCategory`";
      const inputs = [];

      if (search !== undefined && search !== "") {
        sql += " WHERE category = ?";
        inputs.push(search);
      }

      db.all(sql, inputs, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }

  async add() {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO `SubCategory` (`name`, `image`, `category`) VALUES (?, ?, ?)",
        [
          this.subcategory.name,
          this.subcategory.image,
          this.subcategory.category,
        ],
        function (err) {
          if (err) reject(err);
          resolve();
        }
      );
    });
  }

  static async delete({ ids }) {
    console.log(ids);
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM SubCategory WHERE id IN (${ids
        .map(() => "?")
        .join(",")})`;

      db.run(sql, ids, function (err) {
        if (err) reject(err);
        resolve();
      });
    });
  }
};
