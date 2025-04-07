const db = require("../config/database").db;
const { v4: uuidv4 } = require("uuid");
const {
  getLastMonthRange,
  getFirstDayOfCurrentMonth,
} = require("../utils/date");

module.exports = class Users {
  constructor(user) {
    this.user = user;
  }

  async coupons() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT coupons FROM Users WHERE id = ?",
        [this.user.id],
        (err, row) => {
          if (err) reject(err);
          resolve(JSON.parse(row.coupons));
        }
      );
    });
  }

  async byId() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM `Users` WHERE id = ?",
        [this.user.id],
        (err, row) => {
          if (err) reject(err);
          resolve(row);
        }
      );
    });
  }

  async cashback() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT cashback FROM Users WHERE id = ?",
        [this.user.id],
        (err, row) => {
          if (err) reject(err);
          resolve(row);
        }
      );
    });
  }

  async find() {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM Users WHERE phone = ? OR spare_phone = ?`;
      db.get(sql, [this.user.phone, this.user.spare_phone], (err, row) => {
        if (err) reject(err);
        resolve(row ? { id: row.id } : { id: null });
      });
    });
  }

  async add() {
    return new Promise((resolve, reject) => {
      const id = uuidv4();

      const coupons = [];

      const created_at = new Intl.DateTimeFormat("en-EG", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());

      db.run(
        "INSERT INTO `Users` (`id`, `name`, `phone`, `coupons`, `spare_phone`, `street`, `building`, `floor`,`created_at`, `city`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          id,
          this.user.name,
          this.user.phone,
          JSON.stringify(coupons),
          this.user.spare_phone,
          this.user.street,
          this.user.building,
          this.user.floor,
          created_at,
          this.user.city,
        ],
        function (err) {
          if (err) reject(err);
          resolve({ id: id });
        }
      );
    });
  }

  async update() {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE Users SET `street` = ?, `building` = ?, `floor` = ? WHERE id = ?",
        [this.user.street, this.user.building, this.user.floor, this.user.id],
        function (err) {
          if (err) reject(err);
          resolve({ success: true });
        }
      );
    });
  }

  async updateCoupons() {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE Users SET `coupons` = ? WHERE id = ?",
        [JSON.stringify(this.user.coupons), this.user.id],
        function (err) {
          if (err) reject(err);
          resolve({ success: true, changes: this.changes });
        }
      );
    });
  }

  async removeCoupon() {
    return new Promise(async (resolve, reject) => {
      const userCoupons = await this.coupons();

      const newCoupons = userCoupons.filter(
        (coupon) => coupon.code !== this.user.coupon.code
      );

      db.run(
        "UPDATE Users SET `coupons` = ? WHERE id = ?",
        [JSON.stringify(newCoupons), this.user.id],
        function (err) {
          if (err) reject(err);
          resolve({ success: true, changes: this.changes });
        }
      );
    });
  }

  async verifyCoupons() {
    return new Promise(async (resolve, reject) => {
      const userCoupons = await this.coupons();

      const isInCoupons = userCoupons.find(
        (coupon) => coupon.code === this.user.coupon.code
      );

      if (!isInCoupons) {
        resolve({ success: false, message: "coupon not found" });
      }

      resolve({ success: true, coupons: isInCoupons });
    });
  }

  static async activeCustomers() {
    const { firstDay, lastDay } = getLastMonthRange();
    const currentFirstDay = getFirstDayOfCurrentMonth();

    return new Promise((resolve, reject) => {
      db.get(
        "SELECT COUNT(*) AS total_user, (SELECT COuNT(*) FROM Users WHERE created_at <= ? AND created_at >= ?) AS total_users_lastmonth FROM Users WHERE created_at >= ?",
        [lastDay, firstDay, currentFirstDay],
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
    });
  }

  static async adminUsers({ limit, search }) {
    const totalUsers = await new Promise((resolve, reject) => {
      let sql = "SELECT COUNT(*) as total FROM `Users`";
      const inputs = [];

      if (search !== undefined && search !== "") {
        sql += " WHERE name LIKE ? OR phone LIKE ? OR spare_phone LIKE ?";
        inputs.push("%" + search + "%");
        inputs.push("%" + search + "%");
        inputs.push("%" + search + "%");
      }

      db.get(sql, inputs, (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });

    const OFFSET = limit - 50;
    const users = await new Promise((resolve, reject) => {
      let sql = "SELECT * FROM `Users`";
      const inputs = [];

      if (search !== undefined && search !== "") {
        sql += " WHERE name LIKE ? OR phone LIKE ? OR spare_phone LIKE ?";
        inputs.push("%" + search + "%");
        inputs.push("%" + search + "%");
        inputs.push("%" + search + "%");
      }

      sql += " LIMIT ? OFFSET ?";

      inputs.push(limit, OFFSET);

      db.all(sql, inputs, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });

    return { totalUsers: totalUsers.total, users };
  }
};
