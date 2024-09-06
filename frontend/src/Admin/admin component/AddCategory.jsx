import { useState } from "react";

const AddCategory = () => {
  const [category, setCategory] = useState({});
  const handleInputChange = () => {};

  const handleSubmit = (e) => {
    e.preventdefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Enter New Category"
        aria-label=".form-control-lg example"
        name="name"
        value={category.name}
        onChange={handleInputChange}
      ></input>
      <button type="submit" className="btn btn-success">
        Add New Category
      </button>
    </form>
  );
};

export default AddCategory;
