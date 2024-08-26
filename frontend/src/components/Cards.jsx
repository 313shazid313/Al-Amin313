import photo from "../assets/bryan-goff-f7YQo-eYHdM-unsplash.jpg";

const Cards = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={photo}/>
          <div className="card-content">
            <h5>Product</h5>
            <h6>Price$$$</h6>
            <button className="cart-button">Add To Cart</button>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Cards;
