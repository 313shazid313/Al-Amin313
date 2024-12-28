const supplierSchema = require("../../model/additionals-model/supplierModel");

const supplierCreate = async (req, res) => {
  try {
    const resp = req.body;
    await supplierSchema.create(resp);
    return res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const supplierRead = async (req, res) => {
  try {
    const showAll = await supplierSchema.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const supplierUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, email, address } = req.body;
    const updateData = { name, phone, email, address };
    const updateCategory = await supplierSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json(updateCategory);
  } catch (error) {
    res.status(500).json({ message: "Update Unsuccessfull" });
  }
};

module.exports = {
  supplierCreate,
  supplierRead,
  supplierUpdate,
};
