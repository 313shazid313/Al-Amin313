const cliantReviewSchema = require("../../model/additionals-model/cliantReviewModel");

const reviewCreate = async (req, res) => {
  try {
    const resp = req.body;
    await cliantReviewSchema.create(resp);
    return res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const reviewRead = async (req, res) => {
  try {
    const showAll = await cliantReviewSchema.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const reviewUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, imageURL, isPublished, description } = req.body;
    const updateData = { name, imageURL, isPublished, description };
    const updateCategory = await cliantReviewSchema.findByIdAndUpdate(
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
  reviewCreate,
  reviewRead,
  reviewUpdate,
};
