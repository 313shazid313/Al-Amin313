import { GiHamburgerMenu } from "react-icons/gi";
import { IoCartSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategory } from "../redux/feature/categorySlice";

const Navigation = () => {
  const { selectedItems } = useSelector((state) => state.cartR);
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

  <div>
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between bg-[#173334] h-20 text-[#FEBD2F]">
      <div className="flex-initial w-64 flex justify-start items-center">
        {/* <!-- drawer init and toggle --> */}
        <div>
          <button
            className="font-medium text-3xl px-5 py-2.5 mx-3"
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show="drawer-example"
            aria-controls="drawer-example"
          >
            <GiHamburgerMenu />
          </button>
        </div>
        {/* <!-- drawer component --> */}
        <div
          id="drawer-example"
          className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-[#204849] w-80 dark:bg-gray-800"
          tabIndex="-1"
          aria-labelledby="drawer-label"
        >
            <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span className="sr-only">Close menu</span>
   </button>
          <h5
            id="drawer-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-white dark:text-gray-400"
          >
            All Categories
          </h5>

          <ul>
            {categories.map((category) => (
              <li key={category._id}>
                <NavLink
                  className="cursor-pointer hover:text-[#FEBD2F]"
                  to={`/category/${category._id}`}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-initial w-80 flex justify-center items-center text-4xl cursor-pointer">
        <NavLink to="/">Al-Amin</NavLink>
      </div>
      <div className="flex-initial w-64 flex justify-end items-center text-3xl px-3">
        <NavLink to="my-cart" className="relative">
          <IoCartSharp className="mx-3 cursor-pointer" />
          {selectedItems > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {selectedItems}
            </span>
          )}
        </NavLink>
      </div>
    </div>
  </div>

  {/* category div */}
  <div className="fixed top-20 left-0 w-full z-40 justify-center md:flex hidden bg-[#204849] items-center h-12">
  <ul className="flex flex-row text-[#F5DEB3]">
    {categories.map((category) => (
      <li key={category._id}>
        <NavLink
          className="px-5 cursor-pointer hover:text-[#FEBD2F]"
          to={`/category/${category._id}`}
        >
          {category.name}
        </NavLink>
      </li>
    ))}
  </ul>
</div>

  <Outlet />
</>

  );
};

export default Navigation;
