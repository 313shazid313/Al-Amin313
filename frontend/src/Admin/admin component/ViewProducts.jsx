import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../../../slices/productSlics";
import { useDispatch } from "react-redux";
import photo from "../../assets/nasa-rTZW4f02zY8-unsplash.jpg";
import { setEditData } from "../../../slices/productSlics";
import { useNavigate } from "react-router-dom";

const ViewProducts = () => {
  const navigte = useNavigate();
  const dispatch = useDispatch();

  // getting all producr from slice => start --------->
  const { isLoading, products, error } = useSelector((state) => state.productR);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(products);
  // getting all producr from slice => end --------->

  //! sending data to AddProduct component through slice =>start ------>
  const handleEdit = (producrtToEdit) => {
    dispatch(setEditData(producrtToEdit));
    // console.log(producrtToEdit);
    navigte("/dashboard/admin/add-new-product");
  };
  //! sending data to AddProduct component through slice =>end ------>

  //! delete functionality
  const deleteFunc = (id) => {
    dispatch(deleteProduct({ id: id }));
    location.reload();
  };
  //! delete functionality

  return (
    <>
      {!isLoading &&
        !error &&
        products.map((product) => {
          return (
            <div
              className="card mb-3"
              style={{ maxWidth: "900px" }}
              key={product._id}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={photo} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        handleEdit(product);
                      }}
                    >
                      Edit This Product
                    </button>{" "}
                    &nbsp; &nbsp; &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteFunc(product._id);
                      }}
                    >
                      Delete This Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ViewProducts;
