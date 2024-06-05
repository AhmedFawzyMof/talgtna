const db = require("../config/database").db;

module.exports = class Products {
  constructor(product) {
    this.product = product;
  }

  static async getAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM `Products`", [], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }

  async byCategory() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM `Products` WHERE category = ? ORDER BY available DESC",
        [this.product.category],
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
    });
  }

  static async bySearch({ query }) {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM `Products` WHERE name LIKE ? ORDER BY available DESC",
        ["%" + query + "%"],
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
    });
  }

  async inFavorite({ userId }) {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM `favourite` WHERE `user` = ? AND `product` = ?",
        [userId, this.product.id],
        (err, row) => {
          if (err) reject(err);
          resolve(row);
        }
      );
    });
  }

  async byCompany() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM `Products` WHERE company = ? ORDER BY available DESC",
        [this.product.company],
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
    });
  }

  async add() {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO `Products`(`name`, `description`, `category`, `company`, `price`, `image`, `available`, `buyingprice`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          this.product.name,
          this.product.description,
          this.product.category,
          this.product.company,
          this.product.price,
          this.product.image,
          this.product.available,
          this.product.buyingprice,
        ],
        function (err) {
          if (err) reject(err);
          resolve({ success: true, id: this.lastID });
        }
      );
    });
  }

  async edit() {
    return new Promise((resolve, reject) => {
      const updates = Object.entries(this.product)
        .map(([key, value]) => `${key} = ?`)
        .join(", ");
      const values = Object.values(this.product);
      values.push(this.product.id);

      db.run(
        `UPDATE \`Products\` SET ${updates} WHERE \`id\` = ?`,
        values,
        function (err) {
          if (err) reject(err);
          resolve({ success: true, changes: this.changes });
        }
      );
    });
  }

  async addFavorite({ userId }) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO `favourite` (`product`, `user`) VALUES (?, ?)",
        [this.product.id, userId],
        function (err) {
          if (err) reject(err);
          resolve({ success: true, id: this.lastID });
        }
      );
    });
  }

  static async byFavorite({ userId }) {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT favourite.product, favourite.user, Products.name, Products.image, Products.price, Products.available, Products.id FROM `favourite` INNER JOIN `Products` ON favourite.product = Products.id WHERE user = ?",
        [userId],
        (err, rows) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  async byId() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM `Products` WHERE id = ?",
        [this.product.id],
        (err, row) => {
          if (err) reject(err);
          resolve(row);
        }
      );
    });
  }
};
