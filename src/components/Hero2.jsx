// components/Hero2.js
import React, { useContext } from "react";
import styles from "./css/Hero2.module.css";
import Card from "./Card";
import DataContext from "../context/DataContext";
import { Link, useNavigate } from "react-router-dom";

const Hero2 = ({setrproductdata,setproductdetails}) => {
  const { data } = useContext(DataContext);
  const laptops = data[0].products;
  const navigate= useNavigate();
  const laptop = () => {
    setrproductdata(laptops)
    navigate("/productdetails");

    console.log("Navigating to product details");
  };
  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <h2>
          Best deal on <span>Laptops</span>
        </h2>
       <p onClick={laptop}>View All &gt;</p>
      </div>
      <div className={styles.cardGrid}>
        {laptops.map((item, index) => (
          <Card key={index} {...item} item={item} setproductdetails={setproductdetails}/>
        ))}
      </div>
    </div>
  );
};

export default Hero2;
