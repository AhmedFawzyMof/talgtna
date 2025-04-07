const db = require("../config/database").db;
// const { v4: uuid } = require("uuid");
const crypto = require("crypto");
const { getCurrentDay } = require("../utils/date");

module.exports = class Admin {
  constructor(admin) {
    this.admin = admin;
  }

  async login() {
    const { admin } = this;
    const hashedPassword = crypto
      .createHash("sha256")
      .update(admin.password)
      .digest("hex");
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM admins WHERE username = ? AND password = ?",
        [admin.username, hashedPassword],
        (err, row) => {
          if (err) reject(err);
          resolve(row);
        }
      );
    });
  }

  async updateLogin() {
    const { admin } = this;
    return new Promise((resolve, reject) => {
      const currentDate = getCurrentDay();
      db.run(
        "UPDATE admins SET login_at = ? WHERE id = ?",
        [currentDate, admin.id],
        (err) => {
          if (err) reject(err);
          resolve();
        }
      );
    });
  }

  static async overview() {
    return new Promise((resolve, reject) => {
      db.all(
        `WITH RECURSIVE months(date) AS (
    SELECT date('now', 'start of month', '-11 months')
    UNION ALL
    SELECT date(date, '+1 month')
    FROM months
    WHERE date < date('now', 'start of month')
)
SELECT 
    strftime('%Y-%m', months.date) AS month,
    COALESCE(SUM(Orders.total), 0) AS monthly_total
FROM months
LEFT JOIN Orders ON strftime('%Y-%m', Orders.created_at) = strftime('%Y-%m', months.date)
    AND Orders.created_at >= date('now', '-12 months') AND Orders.delivered = 1 AND Orders.paid = 1
GROUP BY strftime('%Y-%m', months.date)
ORDER BY month;`,
        [],
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
    });
  }
};
