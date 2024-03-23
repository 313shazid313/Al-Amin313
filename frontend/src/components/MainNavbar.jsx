import React from "react";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <div className="centeredNav">
      <ul>
        <li>
          <Link className="mainLink" href="#">Active</Link>
        </li>
        <li>
          <Link className="mainLink" href="#">Link</Link>
        </li>
        <li>
          <Link className="mainLink" href="#">Link</Link>
        </li>
        <li>
          <Link className="mainLink" href="#">Disabled</Link>
        </li>
        <li>
          <Link href="#">Disabled</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNavbar;
