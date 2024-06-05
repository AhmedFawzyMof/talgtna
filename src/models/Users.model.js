const db = require("../config/database").db;
const { v4: uuidv4 } = require("uuid");

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

  async find(options = {}) {
    const searchBy = {
      key: Object.keys(options)[0],
      value: Object.values(options)[0],
    };

    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM Users WHERE ${searchBy.key} = ?`;
      db.get(sql, [searchBy.value], (err, row) => {
        if (err) reject(err);
        resolve(
          row ? { success: true, id: row.id } : { success: false, id: null }
        );
      });
    });
  }

  async add() {
    return new Promise((resolve, reject) => {
      this.user.id = uuidv4();
      this.user.coupons = [
        { code: "13102019", value: 10 },
        { code: "80402002", value: 15 },
        { code: "دعم فلسطين", value: 0 },
      ];
      db.run(
        "INSERT INTO `Users` (`id`, `name`, `phone`, `coupons`, `spare_phone`, `street`, `building`, `floor`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          this.user.id,
          this.user.name,
          this.user.phone,
          JSON.stringify(this.user.coupons),
          this.user.spare_phone,
          this.user.street,
          this.user.building,
          this.user.floor,
        ],
        function (err) {
          if (err) reject(err);
          resolve({ success: true, id: this.user.id });
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
      const userCoupons = await this.userCoupons();

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
      const userCoupons = await this.userCoupons();

      const isInCoupons = userCoupons.find(
        (coupon) => coupon.code === this.user.coupon.code
      );

      if (!isInCoupons) {
        reject({ success: false, message: "coupon not found" });
      }

      resolve({ success: true, coupons: isInCoupons });
    });
  }
};
