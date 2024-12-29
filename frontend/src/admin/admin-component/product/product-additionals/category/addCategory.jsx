import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postNewCategory,
  deleteCategory,
  updateCategory,
  fetchCategory,
} from "../../../../../redux/feature/categorySlice";

const AddCategory = () => {
  const { categories } = useSelector((state) => state.categoryR);
  const [category, setCategory] = useState({ name: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing && currentCategory) {
      dispatch(updateCategory({ id: currentCategory._id, category }))
        .then(() => {
          dispatch(fetchCategory());
          alert("Category updated successfully");
          setIsEditing(false);
          setCurrentCategory(null);
          setCategory({ name: "" });
          location.reload();
        })
        .catch((error) => {
          console.error("Failed to update category:", error);
        });
    } else {
      dispatch(postNewCategory(category))
        .then(() => {
          dispatch(fetchCategory());
          alert("Category added successfully");
          setCategory({ name: "" });
        })
        .catch((error) => {
          console.error("Failed to add category:", error);
        });
    }
  };

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleClicktoDel = (id) => {
    dispatch(deleteCategory({ id }))
      .then(() => dispatch(fetchCategory()))
      .catch((error) => console.error("Failed to delete category:", error));
  };

  const updateCategoryFunc = (categoryItem) => {
    setIsEditing(true);
    setCurrentCategory(categoryItem);
    setCategory({ name: categoryItem.name });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          id="categoryInput"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter New Category"
          name="name"
          value={category.name}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          {isEditing ? "Update Category" : "Add New Category"}
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-6">Existing Categories</h2>
      <div className="overflow-x-auto">
        <table className="w-full mt-4 border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Update</th>
              <th className="px-4 py-2 border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((categoryItem, index) => (
              <tr key={categoryItem._id} className="text-center border-t">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{categoryItem.name}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => updateCategoryFunc(categoryItem)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200"
                  >
                    Update
                  </button>
                </td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleClicktoDel(categoryItem._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCategory;
