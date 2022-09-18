import React from "react";
import { Link, Route } from "react-router-dom";
import "./Card.css";

const Cart = (props) => {
  const { id, title, address, image, discount, price } = props.data;
  return (
    <div className="col-3">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {address}
            <br />
            <span> Price: {price} </span>
          </p>

          <Link
            to={{
              pathname: `/book/${id}`,
              state: { prevPath: window.location.pathname },
            }}
            className="btn btn-primary"
          >
            Room Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
