import React, { useState } from "react";
import "./ProductCard.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ name, image }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="product-card-container">
      <div className="product-image-container">
        <img className="product-image" src={image} alt={name} />
      </div>
      <div className="product-card-footer">
        <h5 className="product-name">{name}</h5>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="sign-in-paragraph">
            <span>Sign in</span> or create an account to see pricing
          </p>
          {liked ? (
            <FaHeart
              style={{ color: "#eb4c6b" }}
              className="like-icon"
              onClick={() => setLiked(false)}
            />
          ) : (
            <FaRegHeart className="like-icon" onClick={() => setLiked(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
