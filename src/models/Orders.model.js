const db = require("../config/database").db;
const { v4: uuidv4 } = require("uuid");

module.exports = class Orders {
  constructor(order) {
    this.order = order;
  }

  async add() {
    return new Promise((resolve, reject) => {
      const id = uuidv4();
      const date = new Date();
      db.run(
        "INSERT INTO `Orders` (`id`, `user`, `delivered`, `paid`, `date`, `discount`, `city`, `method`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          id,
          this.order.user,
          0,
          0,
          date.toISOString(),
          JSON.stringify(this.order.discount),
          this.order.city,
          this.order.method,
        ],
        function (err) {
          console.log(err);
          if (err) reject(err);
          resolve({ success: true, id: id });
        }
      );
    });
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM `Orders` WHERE user = ?",
        [this.order.user],
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
    });
  }

  async update(delivered, paid) {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE Orders SET delivered = ?, paid = ? WHERE id = ?`;
      db.run(sql, [delivered, paid, this.order.id], function (err) {
        if (err) reject(err);
        resolve({ success: true, changes: this.changes });
      });
    });
  }

  static async total({ orderId }) {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT SUM(Products.price * OrderProducts.quantity) AS total_price FROM OrderProducts INNER JOIN Products ON OrderProducts.product = Products.id WHERE OrderProducts.order = ?",
        [orderId],
        (err, row) => {
          if (err) reject(err);
          resolve(row);
        }
      );
    });
  }
};
