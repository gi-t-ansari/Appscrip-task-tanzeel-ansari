import React, { useEffect, useState } from "react";
import { getData } from "../../api";
import { API_URL, CATEGORY_OPTIONS, FILTER_OPTIONS } from "../../config";
import { Accordion, ProductCard } from "../../components";
import "./Shop.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Shop = () => {
  const [productsData, setProductsData] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

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
        <div className="mobile-hidden">
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
        <div className="mobile-visible">Filter</div>

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
      {showFilter ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
          className="shop-sub-container2"
        >
          <div style={{ flexBasis: "9%", marginTop: "20px" }}>
            <Accordion title={"ideal for"} defaultOpen={true}>
              <div className="checkbox-container">
                {CATEGORY_OPTIONS.map((item) => (
                  <label>
                    <input type="checkbox" name="category" />
                    {item}
                  </label>
                ))}
              </div>
            </Accordion>
            <Accordion title={"occasion"} />
            <Accordion title={"work"} />
            <Accordion title={"fabric"} />
            <Accordion title={"segment"} />
            <Accordion title={"suitable for"} />
            <Accordion title={"raw materials"} />
            <Accordion title={"pattern"} />
          </div>

          <div
            className="products-container"
            style={{ flexBasis: `${showFilter ? "90%" : "100%"}` }}
          >
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
      ) : (
        <div
          className="products-container"
          style={{ flexBasis: `${showFilter ? "90%" : "100%"}` }}
        >
          {productsData &&
            productsData?.map((item) => (
              <ProductCard
                key={item?.id}
                name={item?.title}
                image={item?.image}
              />
            ))}
        </div>
      )}
    </section>
  );
};

export default Shop;
