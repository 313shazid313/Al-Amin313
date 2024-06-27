const ProductModelSchema = require("../model/productModel");
const createError = require("http-errors");
const { responseForSuccess } = require("../controller/res-controller");

const productCreate = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new Error("File not provided");
    }

    const fileName = req.file.filename;
    const { name, description, price, quantity, offer, status, category } =
      req.body;

    console.log(fileName);

    //==========>
    const productExist = await ProductModelSchema.exists({ name: name });
    if (productExist) {
      throw createError(409, "Product with this name already exist");
    }
    //==========>

    // create product
    const product = await ProductModelSchema.create({
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      offer: offer,
      status: status,
      category: category,
      image: fileName,
    });

    return responseForSuccess(res, {
      statusCode: 200,
      message: "product is created successfully",
      payload: { product },
    });
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const showAll = await ProductModelSchema.find();

    return responseForSuccess(res, {
      statusCode: 200,
      message: "All Products",
      payload: { showAll },
    });
  } catch (error) {
    next(error);
  }
};

const getASingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleProduct = await ProductModelSchema.findById(id);

    if (!singleProduct) {
      res.statusCode = 404;
      throw new Error("Product not found!");
    }

    return responseForSuccess(res, {
      statusCode: 200,
      message: "All Products",
      payload: { singleProduct },
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    await ProductModelSchema.findByIdAndDelete({ _id: id });

    return responseForSuccess(res, {
      statusCode: 200,
      message: "Successfully deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  productCreate,
  getProducts,
  getASingleProduct,
  deleteProduct,
};
