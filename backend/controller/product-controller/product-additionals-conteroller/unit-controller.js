const unitSchema = require("../../../model/product-model/product-additional-model/unitModel");

const unitCreate = async (req, res) => {
  try {
    const data = req.body;
    await unitSchema.create(data);
    return res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const unitRead = async (req, res) => {
  try {
    const showAll = await unitSchema.find();
    return res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const unitUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateData = { name };
    const update = await unitSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ message: "Update Unsuccessfull" });
  }
};

module.exports = {
  unitCreate,
  unitRead,
  unitUpdate,
};
