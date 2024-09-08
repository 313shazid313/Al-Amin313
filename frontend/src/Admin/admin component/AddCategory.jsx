import { useState } from "react";
import { useDispatch } from "react-redux";
import { postNewCategory } from "../../../slices/categorySlice";

const AddCategory = () => {
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
    dispatch(postNewCategory(category));
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
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
  );
};

export default AddCategory;
