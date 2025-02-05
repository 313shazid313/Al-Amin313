import { Link } from "react-router-dom";
import { useGetAllBrandsQuery } from "../../../../../redux/product-additional-state/brandApi";
import Loading from "../../../../../component/Loading";
import Error404 from "../../../../../component/RouteDoesNotExist";
import defaultImage from "../../../../../assets/qvga.png";

const BrandTable = () => {
  const { data, isError, isLoading } = useGetAllBrandsQuery();
  // const [deleteaBrand] = useDeleteaBrandMutation();
  let serial = 0;

  console.log(data);

  if (isLoading) return <Loading />;
  if (isError) return <Error404 />;

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-bold mb-6">Manage Brand</p>
        </div>
        <div className="">
          <Link
            to="brand-form"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add New Brand
            </span>
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Brand name
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={item._id}
              >
                <td className="px-6 py-4">{(serial = serial + 1)}</td>
                <td className="px-6 py-4">{item.name}</td>
                <img
                  src={item.imageURL ? item.imageURL : defaultImage}
                  alt="image"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <td className="px-6 py-4">
                  {item.isPublished ? (
                    <span className="text-green-600">✔ Published</span>
                  ) : (
                    <span className="text-red-600">✘ Not Published</span>
                  )}
                </td>

                <td className="px-6 py-4">
                  <Link to={`brand-update/${item._id}`}>Edit</Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrandTable;
