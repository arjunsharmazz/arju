import React, { useContext, useState } from "react";
import DataContext, { Mencontext } from "../context/DataContext";
import styles from "./css2/Productdetails.module.css";
import { useNavigate } from "react-router-dom";
import Pleasewait from "./Pleasewait";

const ProductFilterPage = ({productdata,setproductdetails}) => {
  const naavigate = useNavigate();
  const { data } = useContext(DataContext);
  const { data2 } = useContext(Mencontext);
  const laptops = data[0].products;
  const Men= data2[0].products;
  console.log(productdata);
  

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedUsage, setSelectedUsage] = useState(null);
  const [priceRange, setPriceRange] = useState(100000);

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type === selectedType ? null : type);
  };

  const handleUsageClick = (usage) => {
    setSelectedUsage(usage === selectedUsage ? null : usage);
  };

  const handlePriceChange = (e) => {
    setPriceRange(Number(e.target.value));
  };

const filteredLaptops = Array.isArray(productdata)
  ? productdata.filter((laptop) => {
      const matchesSize = selectedSize ? laptop.size === selectedSize : true;
      const matchesType = selectedType ? laptop.type === selectedType : true;
      const matchesUsage = selectedUsage ? laptop.usage === selectedUsage : true;
      const matchesPrice = laptop.priceValue <= priceRange;
      return matchesSize && matchesType && matchesUsage && matchesPrice;
    })
  : [];
  console.log(filteredLaptops);
  const order=(product)=>{
    setproductdetails(product)
    naavigate('/product')
    console.log(product);
  }


  return (
    <div className={styles.pageWrapper}>
      <aside className={styles.filters}>
        <div className={styles.section}>
          <h4>Filters</h4>
          <div className={styles.filterOption}>
            {["Ultrabooks", "Gaming", "Convertible", "Business"].map((type) => (
              <span
                key={type}
                className={
                  selectedType === type ? styles.activeOption : ""
                }
                onClick={() => handleTypeClick(type)}
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h4>Price</h4>
          <input
            type="range"
            min="0"
            max="100000"
            value={priceRange}
            onChange={handlePriceChange}
            className={styles.priceRangeInput}
          />
          <div className={styles.priceRange}>
            <span>₹{(priceRange / 1000).toFixed(0)}K</span>
            <span>₹0K</span>
          </div>
        </div>

        <div className={styles.section}>
          <h4>Size</h4>
          <div className={styles.sizeGrid}>
            {['13"', '14"', '15.6"', '17"'].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeClick(size)}
                className={selectedSize === size ? styles.active : ""}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h4>Usage</h4>
          <div className={styles.dressStyle}>
            {["Students", "Developers", "Designers", "Office"].map((usage) => (
              <span
                key={usage}
                className={
                  selectedUsage === usage ? styles.activeOption : ""
                }
                onClick={() => handleUsageClick(usage)}
              >
                {usage}
              </span>
            ))}
          </div>
        </div>
      </aside>


      <div className={styles.productGrid}>
        {filteredLaptops.length > 0 ? (
          filteredLaptops.map((product, index) => (
            <div className={styles.card} key={index} onClick={()=>order(product)}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p className={styles.priceTag}>{product.price}</p>
              <p className={styles.originalPrice}>{product.originalPrice}</p>

              {product.discount && (
                <span className={styles.discountBadge}>{product.discount}</span>
              )}

              <div className={styles.rating}>⭐⭐⭐⭐☆</div>
            </div>
          ))
        ) : (
          <div style={{ width: "100%", textAlign: "center" }}>
      <Pleasewait />
    </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilterPage;
