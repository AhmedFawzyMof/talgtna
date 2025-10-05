const db = require("../config/database").db;

module.exports = class Categories {
  constructor(category) {
    this.category = category;
  }

  static async getAll({ search }) {
    return new Promise((resolve, reject) => {
      let sql =
        "SELECT Categories.id, Categories.name, Categories.image, Categories.new, (SELECT COUNT(*) FROM Products WHERE Products.category = Categories.name AND Products.available = 0) as number_of_products FROM `Categories`";
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

  async add() {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO `Categories` (`name`) VALUES (?)",
        [this.category.name],
        function (err) {
          if (err) reject(err);
          resolve();
        }
      );
    });
  }

  static async delete(ids) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM Categories WHERE id IN (${ids
        .map(() => "?")
        .join(",")})`;

      db.run(sql, ids, function (err) {
        if (err) reject(err);
        resolve();
      });
    });
  }
};
