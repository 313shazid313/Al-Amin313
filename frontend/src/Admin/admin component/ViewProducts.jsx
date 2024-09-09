import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchProducts } from "../../../slices/productSlics";
import { useDispatch } from "react-redux";
import photo from "../../assets/nasa-rTZW4f02zY8-unsplash.jpg";
const ViewProducts = () => {
  const { isLoading, products, error } = useSelector((state) => state.productR);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(products);

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





// const { id } = req.params;
// const { name, description, price, quantity, offer, status, category } =
//   req.fields;
// const { photo } = req.files;
// const updatedProduct = await Product.findByIdAndUpdate(
//   id,
//   {
//     ...req.fields,
//     slug: slugify(name),
//   },
//   { new: true }
// );
// res.status(200).json(updateUser);