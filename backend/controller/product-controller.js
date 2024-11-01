const ProductModelSchema = require("../model/productModel");

const productCreate = async (req, res, next) => {
  try {
    const newProduct = new ProductModelSchema({
      ...req.body,
    });

    // console.log("product is : ", req.body);

    //==========>
    const { name } = req.body;
    const productExist = await ProductModelSchema.exists({ name: name });
    if (productExist) {
      return res.json(401, { message: "Product with this name already exist" });
    }
    //==========>

    const savedProduct = await newProduct.save();

    return res.status(200).json(savedProduct);
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    // ? if i use {.populate("category");} the function will return
    // ? everything in category model because the category is linked to product model

    const showAll = await ProductModelSchema.find().populate("category");

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
    res.status(200).json(singleProduct);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      price,
      quantity,
      offer,
      status,
      category,
      image,
    } = req.body;

    console.log("Request Body:", req.body);
    console.log(name);
    const { id } = req.params;

    const updateData = {
      name,
      description,
      price,
      quantity,
      offer,
      status,
      category,
      image,
    };

    console.log(id);

    const updatedProduct = await ProductModelSchema.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    ).populate("category");

    if (!updatedProduct) {
      throw new Error("Product not found!");
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteData = await ProductModelSchema.findByIdAndDelete({ _id: id });

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
