const ProductModelSchema = require("../model/productModel");

const productCreate = async (req, res) => {
  try {
    const { pname, pdescription, pprice, pquantity, pimage, poffer, pstatus } =
      req.body;

    const product = new ProductModelSchema({
      pname,
      pdescription,
      pprice,
      pquantity,
      pimage,
      poffer,
      pstatus,
    });
    const createProduct = await product.save();
    return res
      .status(200)
      .json({ message: "message sent successfully", createProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProducts = async (req, res) => {
  try {
    const showAll = await ProductModelSchema.find().populate('pcategory');
    res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { productCreate, getProducts };
