const jwt = require("jsonwebtoken");

const ValidateToken = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (!token)
    return res.status(403).send("A token is required for authentication");
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userIsAdmin = decoded.isAdmin;
    if (!userIsAdmin) {
      return res.status(403).send("You are not an admin");
    }
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = { ValidateToken };
