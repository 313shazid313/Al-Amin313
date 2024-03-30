import React from "react";
import photo from "../assets/bryan-goff-f7YQo-eYHdM-unsplash.jpg";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
const Cards = () => {
  return (
    <>
      <div className="card-container">
      <div className="card">
          <img src={photo} alt="" />
          <div className="card-content">
            <h3>card1</h3>
            <p>Diam accusam erat gubergren stet gubergren invidunt vero diam n stet gubergren invidunt vero diam et..et..</p>
            <Link className="cartButton">dfsdfsdf</Link>
          </div>
        </div>
        <div className="card">
          <img src={photo} alt="" />
          <div className="card-content">
            <h3>card1</h3>
            <p>Diam accusam erat gubergren stet gubergren invidunt vero diam n stet gubergren invidunt vero diam et..et..</p>
            <Link className="cartButton">dfsdfsdf</Link>
          </div>
        </div>
        <div className="card">
          <img src={photo} alt="" />
          <div className="card-content">
            <h3>card1</h3>
            <p>Diam accusam erat gubergren stet gubergren invidunt vero diam n stet gubergren invidunt vero diam et..et..</p>
            <Link className="cartButton">dfsdfsdf</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
