const ProductModelSchema = require("../model/productModel");
const createError = require("http-errors");
// const { responseForSuccess } = require("../controller/res-controller");
const fs = require("fs-extra");

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

    // return responseForSuccess(res, {
    //   statusCode: 200,
    //   message: "product is created successfully",
    //   payload: { product },
    // });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    // ? if i use {.populate("category");} the function will return
    // ? everything in category model because the category is linked to product model

    const showAll = await ProductModelSchema.find().populate("category");
    // return responseForSuccess(res, {
    //   statusCode: 200,
    //   message: "All Products",
    //   payload: { showAll },
    // });

    return res.status(200).json(showAll);
  } catch (error) {
    next(error);
  }
};

const getASingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const singleProduct = await ProductModelSchema.findById(id).populate(
      "category"
    );

    if (!singleProduct) {
      res.statusCode = 404;
      throw new Error("Product not found!");
    }

    // return responseForSuccess(res, {
    //   statusCode: 200,
    //   message: "All Products",
    //   payload: { singleProduct },
    // });
    res.status(200).json(singleProduct);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { name, description, price, quantity, offer, status, category } =
      req.body;
    const { id } = req.params;

    let fileName = null;

    if (req.file) {
      fileName = req.file.filename;
      console.log(fileName);
    }

    const updateData = {
      name,
      description,
      price,
      quantity,
      offer,
      status,
      category,
    };

    if (fileName) {
      updateData.image = fileName;
    }

    const updatedResource = await ProductModelSchema.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    ).populate("category");

    res.status(200).json(updatedResource);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteData = await ProductModelSchema.findByIdAndDelete({ _id: id });

    const filename = deleteData.image;
    const filePath = "./productimages/" + filename;

    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("cannot unlink image");
        console.log(err);
      } else console.log("file deleted successfully");
    });

    // return responseForSuccess(res, {
    //   statusCode: 200,
    //   message: "Successfully deleted",
    // });

    res.status(200).json({ message: "Item Deleted Successfully", deleteData });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  productCreate,
  getProducts,
  getASingleProduct,
  updateProduct,
  deleteProduct,
};
