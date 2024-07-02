import photo from "../assets/nasa-rTZW4f02zY8-unsplash.jpg";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";


const Carousel = () => {
  return (
    <div className="list-and-carousel">
      {/* list starts */}

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


