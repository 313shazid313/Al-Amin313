import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageHandle from "../../admin-component/ImageHandle";
import {
  useCreateProductMutation,
  useGetAllProductsQuery,
} from "../../../redux/rtk/productApi";

import JoditEditor from "jodit-react";

import { useGetAllTypesQuery } from "../../../redux/product-additional-state/typeApi";
import { useGetAllOriginQuery } from "../../../redux/product-additional-state/originApi";
import { useGetAllUnitQuery } from "../../../redux/product-additional-state/unitApi";
import { useGetAllCategoriesQuery } from "../../../redux/product-additional-state/categoryApi";
import { useGetAllBrandsQuery } from "../../../redux/product-additional-state/brandApi";
import { useGetAllCartonsQuery } from "../../../redux/additionals-state/cartonApi";

import Select from "react-select";

const ProductForm = () => {
  const [corporateForm, setCorporateForm] = useState(false);
  const [image, setImage] = useState("");

  const { refetch } = useGetAllProductsQuery();
  const [createProduct] = useCreateProductMutation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  // console.log(corporateForm);

  const { data: typeData } = useGetAllTypesQuery();
  const { data: unitData } = useGetAllUnitQuery();
  const { data: brandData } = useGetAllBrandsQuery();
  const { data: categoryData } = useGetAllCategoriesQuery();
  const { data: originData } = useGetAllOriginQuery();
  const { data: cartonData } = useGetAllCartonsQuery();

  // console.log(typeData);
  // console.log(unitData);
  // console.log(brandData);
  // console.log(categoryData);
  // console.log(originData);
  // console.log(cartonData);

  const [items, setItems] = useState({
    name: "",
    description: "",
    specification: "",
    price: "",
    deletePrice: "",
    imageURL: "",
    offer: "",
    status: "",
    isPublished: "",
    vat: "",
    sellType: "",
    preOrder: "",
    categoryId: "",
    typeId: "",
    brandId: "",
    originId: "",
    unitId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItems({
      ...items,
      [name]: value,
    });

    // console.log(items.sellType);

    if (items.sellType === "corporate-sell") {
      setCorporateForm(false);
    } else {
      setCorporateForm(true);
    }
  };

  const handleProductSubmit = async (event) => {
    event.preventDefault();
    console.log(items);
    try {
      await createProduct({ ...items }).unwrap();
      refetch();
      alert("Create New Category successful!");
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  // organizing categories
  //? organizing category data -------->
  function buildParentChildPaths(categories, parentPath = "") {
    let paths = [];

    (categories || []).forEach((category) => {
      // Build the current path
      const currentPath = parentPath
        ? `${parentPath} => ${category.name}`
        : category.name;

      // Add the current path as an object with name and id
      paths.push({
        name: currentPath,
        id: category.id,
        isPublished: category.isPublished,
        inHomeCategory: category.inHomeCategory,
        imageURL: category.imageURL,
      });

      // Recursively process children
      const childPaths = buildParentChildPaths(
        category.children || [],
        currentPath
      );

      // Concatenate the child paths to the main paths
      paths = paths.concat(childPaths);
    });
    return paths;
  }

  const parentChildPaths = buildParentChildPaths(categoryData);
  // console.log(parentChildPaths);

  const optionsArray = [
    { label: "Select an Option", value: "X", isDisabled: true },
    { label: "No Parent Category", value: "" },

    ...parentChildPaths.map((item) => ({
      label: item.name,
      value: item.id,
    })),
  ];
  console.log(optionsArray);
  //? organizing category data -------->

  return (
    <form className="" onSubmit={handleProductSubmit}>
      <p className="text-2xl">Create New Product</p>
      <div className="space-y-12">
        <div className="border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
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
                  value={items.name}
                  onChange={handleInputChange}
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="price"
                  type="number"
                  value={items.price}
                  onChange={handleInputChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Delete Price
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="deletePrice"
                  value={items.deletePrice}
                  type="number"
                  autoComplete="family-name"
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Quantity
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="quantity"
                  type="number"
                  autoComplete="family-name"
                  value={items.quantity}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
                />
              </div>
            </div>
            {/* category */}
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Product Category
              </label>
              <div className="mt-2">
                <Select
                  options={optionsArray}
                  // defaultValue={optionsArray[1]}
                  styles={{
                    input: (base) => ({
                      ...base,
                      "input:focus": {
                        boxShadow: "none",
                      },
                    }),
                  }}
                  onChange={(selectedOption) =>
                    setItems({
                      ...items,
                      ProductCategoryId: selectedOption?.value || "",
                    })
                  }
                />
              </div>
            </div>
            {/* Brand  */}
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Product Brand
              </label>
              <div className="mt-2">
                <select
                  id="ProductBrandId"
                  name="ProductBrandId"
                  value={items.ProductBrandId}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    -----Select Brand-----
                  </option>
                  {brandData &&
                    brandData.map((Item) => (
                      <option key={Item._id} value={Item._id}>
                        {Item.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            {/* produ */}
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Product Type
              </label>
              <div className="mt-2">
                <select
                  id="ProductTypeId"
                  name="ProductTypeId"
                  value={items.ProductTypeId}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    -----Select Type-----
                  </option>
                  {typeData &&
                    typeData.map((Item) => (
                      <option key={Item._id} value={Item._id}>
                        {Item.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            {/* Origin */}
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Product Origin
              </label>
              <div className="mt-2">
                <select
                  id="ProductOriginId"
                  name="ProductOriginId"
                  value={items.ProductOriginId}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    -----Select Origin-----
                  </option>
                  {originData &&
                    originData.map((Item) => (
                      <option key={Item._id} value={Item._id}>
                        {Item.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            {/* Unit */}
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Product Unit
              </label>
              <div className="mt-2">
                <select
                  id="ProductUnitId"
                  name="ProductUnitId"
                  value={items.ProductUnitId}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    -----Select Unit-----
                  </option>
                  {unitData &&
                    unitData.map((Item) => (
                      <option key={Item._id} value={Item._id}>
                        {Item.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="py-2">
            <label
              htmlFor="not-applicable"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Description
            </label>
            <div>
              <JoditEditor
                name="description"
                value={items.description}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="py-4">
            <label
              htmlFor="not-applicable"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Specification
            </label>
            <div>
              <JoditEditor
                name="specification"
                value={items.specification}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/*photos  */}
        <div className="flex flex-col space-y-1 my-3">
          <ImageHandle
            label="Image"
            name="image"
            id="image"
            value={image}
            placeholder="Upload image"
            setImage={setImage}
          />
        </div>

        <div className="border-gray-900/10">
          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900">
                Vat
              </legend>
              <div className="mt-3 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="applicable"
                    name="vat"
                    value="applicable"
                    onChange={handleInputChange}
                    type="radio"
                    className="size-4 border-gray-300 text-blring-blue-600-600 focus:ring-blue-600-600"
                  />
                  <label
                    htmlFor="applicable"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Applicable
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="not-applicable"
                    name="vat"
                    value="not-applicable"
                    onChange={handleInputChange}
                    type="radio"
                    className="size-4 border-gray-300 text-blring-blue-600-600 focus:ring-blue-600-600"
                  />
                  <label
                    htmlFor="not-applicable"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Not Applicable
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900">
                Sell Type
              </legend>
              <div className="mt-3 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="general-sell"
                    name="sellType"
                    value="general-sell"
                    type="radio"
                    onChange={handleInputChange}
                    className="size-4 border-gray-300 text-blring-blue-600-600 focus:ring-blue-600-600"
                  />
                  <label
                    htmlFor="general-sell"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    General Sell
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="corporate-sell"
                    name="sellType"
                    value="corporate-sell"
                    type="radio"
                    onChange={handleInputChange}
                    className="size-4 border-gray-300 text-blring-blue-600-600 focus:ring-blue-600-600"
                  />
                  <label
                    htmlFor="corporate-sell"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Corporate Sell
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          {/* corporate sale form */}
          {corporateForm && (
            <>
              <div className="py-6">
                <p className="bold text-2xl">Corporate Sell</p>
                <div className="sm:col-span-3">
                  <label className="block text-sm/6 font-medium text-gray-900">
                    Carton Size
                  </label>
                  <select
                    id="ProductBrandId"
                    name="ProductBrandId"
                    value={items.ProductBrandId}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600-600 sm:text-sm/6"
                  >
                    <option value="" disabled>
                      -----Select Brand-----
                    </option>
                    <option value="">None</option>
                    {cartonData &&
                      cartonData.map((Item) => (
                        <option key={Item._id} value={Item._id}>
                          {Item.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </>
          )}
          {/* corporate sale form */}
        </div>
      </div>

      {/* submit button */}
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
      {/* submit button */}
    </form>
  );
};

export default ProductForm;
