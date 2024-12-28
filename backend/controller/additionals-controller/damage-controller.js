const damageSchema = require("../../model/additionals-model/damageModel");

const damageCreate = async (req, res) => {
  try {
    const resp = req.body;
    await damageSchema.create(resp);
    return res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const damageRead = async (req, res) => {
  try {
    const showAll = await damageSchema.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const damageUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, damageQAT } = req.body;
    const updateData = { productName, damageQAT };
    const updateCategory = await damageSchema.findByIdAndUpdate(
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

const getSingleDamage = async (req, res) => {
  try {
    const { id } = req.params; // Assuming ID is passed as a route parameter
    const data = await damageSchema.findById(id); // Replace YourModel with your actual model

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  damageCreate,
  damageRead,
  damageUpdate,
  getSingleDamage
};
