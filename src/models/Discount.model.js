const db = require("../config/database").db;

module.exports = class Discount {
  constructor(discount) {
    this.discount = discount;
  }

  async get() {
    const used = await new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM `UsedCoupon` WHERE user = ? AND coupon = ?",
        [this.discount.user, this.discount.code],
        (err, row) => {
          if (err) reject(err);
          resolve(row);
        }
      );
    });

    if (used) {
      return { success: false, message: "الكوبون مستخدم بالفعل" };
    }

    return new Promise((resolve, reject) => {
      db.get(
        "SELECT code, value FROM `Coupons` WHERE code = ?",
        [this.discount.code],
        (err, row) => {
          if (err) reject(err);
          resolve({ success: true, coupon: row });
        }
      );
    });
  }

  async check() {
    const used = await new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM `UsedCoupon` WHERE user = ? AND coupon = ?",
        [this.discount.user, this.discount.code],
        (err, row) => {
          if (err) reject(err);
          resolve(row);
        }
      );
    });

    if (used) {
      return { success: false, message: "coupon already used" };
    }

    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO UsedCoupon (`user`, `coupon`) VALUES (?, ?)",
        [this.discount.user, this.discount.code],
        (err) => {
          if (err) reject(err);
          resolve({ success: true });
        }
      );
    });
  }

  async create() {
    const { code, value } = this.discount;
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO `Coupons` (code, value) VALUES (?, ?)",
        [code, value],
        function (err) {
          if (err) reject(err);
          resolve({ success: true, id: this.lastID });
        }
      );
    });
  }

  static async readAll({ code }) {
    return new Promise((resolve, reject) => {
      const inputs = [];
      let sql = "SELECT * FROM `Coupons`";

      if (code) {
        sql += " WHERE code LIKE ?";
        inputs.push(`%${code}%`);
      }

      db.all(sql, inputs, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }

  async update() {
    const { code, value } = this.discount;
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE `Coupons` SET value = ? WHERE code = ?",
        [value, code],
        function (err) {
          if (err) reject(err);
          resolve({
            success: this.changes > 0,
            message:
              this.changes > 0 ? "Updated successfully" : "No coupon found",
          });
        }
      );
    });
  }

  static async delete(ids) {
    return new Promise((resolve, reject) => {
      db.run(
        `DELETE FROM Coupons WHERE code IN (${ids.map(() => "?").join(",")})`,
        ids,
        function (err) {
          if (err) reject(err);
          resolve({
            success: this.changes > 0,
            message:
              this.changes > 0 ? "Deleted successfully" : "No coupon found",
          });
        }
      );
    });
  }
};
