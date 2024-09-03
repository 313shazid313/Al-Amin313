const jwt = require("jsonwebtoken");
// const Cart = require("../model/cartModel");

const authCartMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "token does not exist" });
  }

  try {
    jwt.verify(token, process.env.CARTSECRET);
    // const userInfo = await Cart
    //   .findOne({ email: isVarified.email })
    //   .select({
    //     password: 0,
    //   });
    // console.log(userInfo);
    // console.log(isVarified);
    // req.unique_user = userInfo;
    // req.token = token;
    // req.userId = userInfo._id;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authCartMiddleware;
