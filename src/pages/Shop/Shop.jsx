import React, { useEffect, useState } from "react";
import { getData } from "../../api";
import { API_URL, FILTER_OPTIONS } from "../../config";
import { ProductCard } from "../../components";
import "./Shop.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Shop = () => {
  const [productsData, setProductsData] = useState([]);
  const [showFilter, setShowFilter] = useState(true);

  const fetchProducts = async () => {
    const data = await getData(API_URL);
    // console.log("Data", data);
    setProductsData(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="shop-container">
      <div className="shop-sub-container">
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <h5 className="item-quantity">{`${productsData?.length} items`}</h5>
          <div
            onClick={() => setShowFilter((prev) => !prev)}
            className="filter-container"
          >
            <MdKeyboardArrowRight
              className={`filter-arrow ${showFilter && "rotate-arrow"}`}
            />{" "}
            <span style={{ textDecoration: "underline" }}>
              {showFilter ? "hide filter" : "show filter"}
            </span>
          </div>
        </div>

        <select
          className="filter-selector"
          onChange={(e) => console.log("Filter by", e?.target?.value)}
        >
          {FILTER_OPTIONS.map((item) => (
            <option className="filter-option" key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
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
    </section>
  );
};

export default Shop;
