const categorySchema = require("../../model/product-additional-model/categoryModel");

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
    const allCategories = await categorySchema.find();

    if (!allCategories) {
      return res.status(201).json({ message: "Categories does not exist" });
    }

    const nestedCates = nestedCategories(allCategories);

    return res.status(201).json(nestedCates);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const nestedCategories = (categories, parentd = null) => {
  const categoryList = [];
  let category;

  if (parentd == null) {
    category = categories.filter((cat) => cat.parentCategoryId == null);
  } else {
    category = categories.filter(
      (cat) => String(cat.parentCategoryId) == String(parentd)
    );
  }

  for (let cate of category) {
    categoryList.push({
      id: cate.id,
      name: cate.name,
      inHomeCategory: cate.inHomeCategory,
      isPublished: cate.isPublished,
      parentCategoryId: cate.parentCategoryId,
      children: nestedCategories(categories, cate.id),
    });
  }
  return categoryList;
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
  categoryFuncUpdate,
};
