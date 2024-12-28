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

const getSingleStock = async (req, res) => {
  try {
    const { id } = req.params; // Assuming ID is passed as a route parameter
    const data = await cliantReviewSchema.findById(id); // Replace YourModel with your actual model

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  stockCreate,
  stockRead,
  stockUpdate,
  getSingleStock,
};
