import { useState } from "react";
import {
  useCreateBrandMutation,
  useGetAllBrandsQuery,
} from "../../../../../redux/product-additional-state/brandApi";
import { useNavigate } from "react-router-dom";

const BrandForm = () => {
  const handleGoBack = () => {
    navigate(-1);
  };

  const { refetch } = useGetAllBrandsQuery();
  const navigate = useNavigate();
  const [createBrand] = useCreateBrandMutation();

  const [element, setElement] = useState({
    name: "",
    imageURL: "",
    isPublished: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setElement({
      ...element,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(element);
    e.preventDefault();
    try {
      await createBrand({ ...element }).unwrap();
      refetch();
      alert("Create New Brand successful!");
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p className="text-2xl font-bold  text-center">Add New Brand</p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto pt-3">
        <div className="sm:col-span-3 py-3">
          <label
            htmlFor="first-name"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              value={element.name}
              onChange={handleInputChange}
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm/6"
            />
          </div>
        </div>

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Add Image
        </label>
        <input
          className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="small_size"
          type="file"
        />

        <div className="space-y-10">
          <fieldset>
            <legend className="text-sm font-semibold text-gray-900">
              Publish or Not
            </legend>
            <div className="mt-3 space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  id="publish"
                  name="isPublished"
                  value="true"
                  type="radio"
                  onChange={handleInputChange}
                  // defaultChecked={isPublished === true}
                  className="size-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                />
                <label
                  htmlFor="publish"
                  className="block text-sm font-medium text-gray-900"
                >
                  Publish
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="unpublish"
                  name="isPublished"
                  value="false"
                  type="radio"
                  onChange={handleInputChange}
                  // defaultChecked={isPublished === false}
                  className="size-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                />
                <label
                  htmlFor="unpublish"
                  className="block text-sm font-medium text-gray-900"
                >
                  Un-Publish
                </label>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={handleGoBack}
            type="button"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrandForm;
