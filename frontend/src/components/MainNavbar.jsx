import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <div className="centeredNav">
      <ul>
        <li>
          <Link className="mainLink" href="#">
            category1
          </Link>
        </li>
        <li>
          <Link className="mainLink" href="#">
            category1
          </Link>
        </li>
        <li>
          <Link className="mainLink" href="#">
            category1
          </Link>
        </li>
        <li>
          <Link className="mainLink" href="#">
            category1
          </Link>
        </li>
        <li>
          <Link className="mainLink" href="#">
            category1
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNavbar;
