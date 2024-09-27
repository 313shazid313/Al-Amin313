import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postNewCategory, deleteCategory } from "../../../slices/categorySlice";
import { fetchCategory } from "../../../slices/categorySlice";
import { useSelector } from "react-redux";

const AddCategory = () => {
  const { categories } = useSelector((state) => state.categoryR);

  const [category, setCategory] = useState({ name: "" });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    // one way
    // const name = e.target.name;
    // const value = e.target.value;
    // another way
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof category);
    dispatch(postNewCategory(category))
      .then(() => {
        dispatch(fetchCategory());
        alert("Category added successfully");
      })
      .catch((error) => {
        console.error("Failed to delete category:", error);
      })
   
  };

  // getting categories
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  // delete category function
  const handleClicktoDel = (id) => {
    dispatch(deleteCategory({ id: id }))
      .then(() => {
        dispatch(fetchCategory());
      })
      .catch((error) => {
        console.error("Failed to delete category:", error);
      });
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
          Add New Category
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
        {categories.map((categoryItem, index) => (
          <tr key={categoryItem._id} className="">
            <th scope="row">{index + 1}</th>
            <td>{categoryItem.name}</td>
            <td>
              <button className="btn btn-warning ">Update</button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleClicktoDel(categoryItem._id);
                }}
                className="btn btn-outline-danger "
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AddCategory;
