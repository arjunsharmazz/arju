import React from "react";
import styles from "./css/Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, price, originalPrice, discount ,item,setproductdetails}) => {
  const navigate  = useNavigate()
  const sendData=(item)=>{
    console.log("Card clicked:", item);
    
    
    setproductdetails(item)
    navigate('/product')
  }
  return (
    <div className={styles.card} onClick={()=>sendData(item)}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.details}>
        <h3>{title}</h3>
        <div className={styles.prices}>
          <span className={styles.price}>{price}</span>
          <span className={styles.original}>{originalPrice}</span>
        </div>
        <p className={styles.discount}>{discount}</p>
      </div>
    </div>
  );
};

export default Card;
