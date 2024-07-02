import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import photo from "../assets/bryan-goff-f7YQo-eYHdM-unsplash.jpg";
import { Link } from "react-router-dom";

const offerCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h1>Our Best Products</h1>
      <Carousel responsive={responsive}>
        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card1</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card2</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card3</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card4</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card4</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card4</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card4</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card4</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card4</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card4</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card4</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card4</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card4</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card4</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={photo} alt="" />
            <div className="card-content">
              <h3>card4</h3>
              <Link className="cartButton">dfsdfsdf</Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default offerCarousel;
