import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { fetchCategory } from "../../slices/categorySlice";

const MainNavbar = () => {
  const { isLoading, categories, error } = useSelector(
    (state) => state.categoryR
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  // console.log(categories)

  return (
    <>
      {isLoading && <h3>Loading .....</h3>}

      {error && <h3>{error}</h3>}

      <div className="centeredNav">
        <ul>
          {categories.map((category) => (
            <li key={category._id}>
              <NavLink className="mainLink" to={`/category/${category._id}`}>
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MainNavbar;
