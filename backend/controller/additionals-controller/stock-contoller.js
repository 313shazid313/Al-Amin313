const stockSchema = require("../../model/additionals-model/stockModel");

const stockCreate = async (req, res) => {
  try {
    const resp = req.body;
    await stockSchema.create(resp);
    return res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const stockRead = async (req, res) => {
  try {
    const showAll = await stockSchema.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const stockUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      productName,
      supplier,
      quantity,
      date,
      unitPrice,
      totalPrice,
      note,
    } = req.body;
    const updateData = {
      productName,
      supplier,
      quantity,
      date,
      unitPrice,
      totalPrice,
      note,
    };
    const updateCategory = await stockSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json(updateCategory);
  } catch (error) {
    res.status(500).json({ message: "Update Unsuccessfull" });
  }
};

module.exports = {
  stockCreate,
  stockRead,
  stockUpdate,
};
