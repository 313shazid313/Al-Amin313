import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postNewCategory,
  deleteCategory,
  updateCategory,
  fetchCategory,
} from "../../../slices/categorySlice";

const AddCategory = () => {
  const { categories } = useSelector((state) => state.categoryR);

  const [category, setCategory] = useState({ name: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const dispatch = useDispatch();

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  // Handle form submit (Add or Update)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing && currentCategory) {
      // Update category if in edit mode
      dispatch(updateCategory({ id: currentCategory._id, category: category }))
        .then(() => {
          dispatch(fetchCategory());
          alert("Category updated successfully");
          setIsEditing(false);
          setCurrentCategory(null);
          setCategory({ name: "" });
        })
        .catch((error) => {
          console.error("Failed to update category:", error);
        });
    } else {
      // Add new category
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

  // Fetch categories on mount
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  // Handle delete category
  const handleClicktoDel = (id) => {
    dispatch(deleteCategory({ id: id }))
      .then(() => {
        dispatch(fetchCategory());
      })
      .catch((error) => {
        console.error("Failed to delete category:", error);
      });
  };

  // Handle update category button click
  const updateCategoryFunc = (categoryItem) => {
    setIsEditing(true);
    setCurrentCategory(categoryItem);
    setCategory({ name: categoryItem.name }); // Prepopulate the form with selected category
  };

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit}>
        <input
          id="categoryInput"
          className="form-control form-control-lg"
          type="text"
          placeholder="Enter New Category"
          aria-label=".form-control-lg example"
          name="name"
          value={category.name}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit" className="btn btn-success">
          {isEditing ? "Update Category" : "Add New Category"}
        </button>
      </form>

      <br />
      <h2>Existing Category</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((categoryItem, index) => (
            <tr key={categoryItem._id}>
              <th scope="row">{index + 1}</th>
              <td>{categoryItem.name}</td>
              <td>
                <button
                  onClick={() => updateCategoryFunc(categoryItem)}
                  className="btn btn-warning"
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleClicktoDel(categoryItem._id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddCategory;
