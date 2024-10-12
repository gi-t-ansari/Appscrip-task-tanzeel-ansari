import React, { useEffect, useState } from "react";
import { getData } from "../../api";
import { API_URL } from "../../config";
import { ProductCard } from "../../components";
import "./Shop.css";

const Shop = () => {
  const [productsData, setProductsData] = useState([]);

  const fetchProducts = async () => {
    const data = await getData(API_URL);
    // console.log("Data", data);
    setProductsData(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div>Shop</div>
      <div className="products-container">
        {productsData &&
          productsData?.map((item) => (
            <ProductCard
              key={item?.id}
              name={item?.title}
              image={item?.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Shop;
