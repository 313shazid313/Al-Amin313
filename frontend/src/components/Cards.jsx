import React from "react";
import photo from '../assets/bryan-goff-f7YQo-eYHdM-unsplash.jpg'
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
const Cards = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={photo} alt="" />
          <div className="card-content">
            <h2>myCard</h2>
            <p>Vero et ipsum vero ut takimata amet labore dolores sed,.</p>
            <Link className="btn1">Add to cart <FaChevronRight style={{marginBottom:'3px'}} /></Link>
          </div>
        </div>
        <div className="card">
          <img src={photo} alt="" />
          <div className="card-content">
            <h2>myCard</h2>
            <p>Vero et ipsum vero ut takimata amet labore dolores sed,.</p>
            <Link className="btn1">Add to cart <FaChevronRight style={{marginBottom:'3px'}} /></Link>
          </div>
        </div>
        <div className="card">
          <img src={photo} alt="" />
          <div className="card-content">
            <h2>myCard</h2>
            <p>Vero et ipsum vero ut takimata amet labore dolores sed,.</p>
            <Link className="btn1">Add to cart <FaChevronRight style={{marginBottom:'3px'}} /></Link>
          </div>
        </div>
        <div className="card">
          <img src={photo} alt="" />
          <div className="card-content">
            <h2>myCard</h2>
            <p>Vero et ipsum vero ut takimata amet labore dolores sed,.</p>
            <Link className="btn1">Add to cart <FaChevronRight style={{marginBottom:'3px'}} /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
