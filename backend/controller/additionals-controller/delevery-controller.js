const deliverySchema = require("../../model/additionals-model/deliveryModel");

const deliveryCreate = async (req, res) => {
  try {
    const resp = req.body;
    await deliverySchema.create(resp);
    return res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deliveryRead = async (req, res) => {
  try {
    const showAll = await deliverySchema.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const deliveryUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, charge } = req.body;
    const updateData = { name, charge };
    const updateCategory = await deliverySchema.findByIdAndUpdate(
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
  deliveryCreate,
  deliveryRead,
  deliveryUpdate,
};
