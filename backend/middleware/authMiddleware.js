const jwt = require("jsonwebtoken");
const adminFormModel = require("../model/adminFormModel")

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Token does not exist" });
  }

  try {
    const isVarified = jwt.verify(token, process.env.SECRET);
    const userInfo = await adminFormModel
      .findOne({ username: isVarified.username })
      .select({
        password: 0,
      });
    console.log(userInfo);
    // console.log(isVarified);
    req.unique_user = userInfo;
    req.token = token;
    req.userId = userInfo._id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
