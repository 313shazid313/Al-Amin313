const typeSchema = require("../../model/product-model/product-additional-model/typeModel");

const typeCreate = async (req, res) => {
  try {
    const resp = req.body;
    await typeSchema.create(resp);
    return res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const typeRead = async (req, res) => {
  try {
    const showAll = await typeSchema.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const typeUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateData = { name };
    const update = await typeSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ message: "Update Unsuccessfull" });
  }
};

module.exports = {
  typeCreate,
  typeRead,
  typeUpdate,
};
