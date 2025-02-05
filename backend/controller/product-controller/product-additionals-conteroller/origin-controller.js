const originSchema = require("../../../model/product-model/product-additional-model/originModel");

const originCreate = async (req, res) => {
  try {
    const resp = req.body;

    const { name } = req.body;
    const exist = await originSchema.exists({ name: name });

    if (exist) {
      return res.json(401, {
        message: "Origin already exists please add new one.",
      });
    }

    await originSchema.create(resp);
    return res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const originRead = async (req, res) => {
  try {
    const showAll = await originSchema.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const originUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateData = { name };
    const update = await originSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ message: "Update Unsuccessfull" });
  }
};

const getSingleOrigin = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await originSchema.findById(id);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  originCreate,
  originRead,
  originUpdate,
  getSingleOrigin,
};
