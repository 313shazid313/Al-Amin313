import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline"; // Ensure you have @heroicons/react installed for the menu icon
import { useLogoutUserMutation } from '../redux/auth/authApi';
import { logout } from '../redux/auth/authSlice'
import { useDispatch } from "react-redux";
const AdminNav = () => {
  const dispatch = useDispatch()
  const [logoutUser] = useLogoutUserMutation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const handleLogout = async () => {
    try {
      if (confirm("Sure You want to Logout")) {
        await logoutUser().unwrap();
        dispatch(logout())
        alert("Logout successful!");
      }
    } catch (error) {
      console.error("Error to logout", error)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <nav
        className={`fixed inset-y-0 left-0 z-50 w-60 bg-gray-800 text-white p-6 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:translate-x-0 lg:static lg:w-60`}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-white focus:outline-none"
        >
          <Bars3Icon className="h-8 w-8" />
        </button>

        <ul className="space-y-4 pt-10 lg:pt-0">
          {[
            { path: "user-order", label: "Orders" },
            { path: "existing-products", label: "Manage Products" },
            { path: "add-new-product", label: "Add Product" },
            { path: "add-new-category", label: "Add New Product Category" },
            { path: "add-new-poster", label: "Add New Poster" },
          ].map((item) => (
            <li key={item.path} className="hover:bg-gray-700 rounded-md">
              <Link to={item.path} className="block py-2 px-4">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logout Button */}
        <br /> <br /><br /><br /><br />
        <button
          onClick={handleLogout}
          className="mt-auto w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-center"
        >
          Logout
        </button>
      </nav>

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden bg-gray-800 text-white p-3 fixed top-4 right-4 z-50 rounded-md"
      >
        <Bars3Icon className="h-8 w-8" />
      </button>

      {/* Main Content */}
      <div className="flex-1 p-8 mt-16 lg:mt-0">
        <Outlet />
      </div>
    </div>

  );
};

export default AdminNav;
