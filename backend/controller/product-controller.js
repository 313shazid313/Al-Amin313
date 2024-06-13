const ProductModelSchema = require("../model/productModel");

const productCreate = async (req, res, next) => {
  try {
    const {
      pname,
      pdescription,
      pprice,
      pquantity,
      poffer,
      pstatus,
      pcategory,
    } = req.body;
    // const productImageName = req.file.filename;
    const product = new ProductModelSchema({
      pname,
      pdescription,
      pprice,
      pquantity,
      poffer,
      pstatus,
      pcategory,
      // pimage: productImageName,
    });
    const createProduct = await product.save();

    return res.status(200).json({
      message: "Product Created Successfully",
      createProduct,
    });
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res) => {
  try {
    const showAll = await ProductModelSchema.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getASingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const singleProduct = await ProductModelSchema.findById(id);

    if (!singleProduct) {
      res.statusCode = 404;
      throw new Error("Product not found!");
    }

    res.status(200).json(singleProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { productCreate, getProducts, getASingleProduct };
