import React from "react";
import photo from "../assets/nasa-rTZW4f02zY8-unsplash.jpg";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";


const Carousel = () => {
  return (
    <div className="list-and-carousel">
      {/* list starts */}
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action"
          aria-current="true"
          style={{ backgroundColor: "#febd2f", color: "#173334" }}
        >
          current
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          second <FaArrowRight style={{float :"right"}} />
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          third <FaArrowRight style={{float :"right"}} />
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          fourth <FaArrowRight style={{float :"right"}} />
        </a>
        <a href="#" className="list-group-item list-group-item-action ">
          disabled <FaArrowRight style={{float :"right"}} />
        </a>
        {/* list ends */}
      </div>
      {/* carousel starts */}
      <div className="myCarousel">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-touch="true"
          data-bs-interval="5000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={photo} className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
              <img src={photo} className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
              <img src={photo} className="d-block w-100 " alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <GrLinkPrevious className="next-previous"/>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <GrLinkNext className="next-previous" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* carousel ends */}
      </div>
    </div>
  );
};

export default Carousel;
