const AdminSchema = require("../model/adminFormModel");
const bcrypt = require("bcryptjs");

const adminRegister = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const creation = await AdminSchema.create({
      username,
      password,
    });
    return res.status(201).json({
      message: "registration successful",
      token: await creation.generateToken(),
      userId: creation._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const ifExist = await AdminSchema.findOne({ username });
    console.log(ifExist);

    if (!ifExist) {
      return res.status(409).json({ message: "Invalid username or password" });
    }

    const isValid = await bcrypt.compare(password, ifExist.password);

    if (isValid) {
      res.status(200).json({
        message: "login successful",
        token: await ifExist.generateToken(),
        userId: ifExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(404).send("404 not found");
    console.log(error);
  }
};

module.exports = { adminLogin, adminRegister };
