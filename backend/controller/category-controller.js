const categorySchema = require("../model/categoryModel");

const categoryFuncCreate = async (req, res) => {
  try {
    const resp = req.body;
    await categorySchema.create(resp);
    return res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const categoruFuncRead = async (req, res) => {
  try {
    const showAll = await categorySchema.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const categoruFuncdel = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteCategory = await categorySchema.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .json({ deleteCategory, message: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const categoryFuncUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateData = { name };
    const updateCategory = await categorySchema.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );
    res.status(200).json(updateCategory);
  } catch (error) {
    res.status(500).json({ message: "Update Unsuccessfull" });
  }
};

module.exports = {
  categoryFuncCreate,
  categoruFuncRead,
  categoruFuncdel,
  categoryFuncUpdate,
};
