const brandSchema = require("../../model/product-model/product-additional-model/brandModel");

const brandCreate = async (req, res) => {
  try {
    const resp = req.body;
    await brandSchema.create(resp);
    return res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const brandRead = async (req, res) => {
  try {
    const showAll = await brandSchema.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const brandUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, imageURL, isPublished } = req.body;
    const updateData = { name, imageURL, isPublished };
    const updateCategory = await brandSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json(updateCategory);
  } catch (error) {
    res.status(500).json({ message: "Update Unsuccessfull" });
  }
};

module.exports = {
  brandCreate,
  brandRead,
  brandUpdate,
};
