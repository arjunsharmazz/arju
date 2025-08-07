
import React, { useContext } from "react";
import styles from "./css/Shopbycat.module.css";
import { Under5 } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Shopbycat = ({setrproductdata}) => {
   const navigate = useNavigate();
      const { data8 } = useContext(Under5);
        const under5= data8[0].products;

          const u5=() => {
    setrproductdata(under5);
    navigate("/productdetails");
  }
  return (
    <div className={styles.priceSection}>
      <div className={styles.header}>
        <h2>
          Shop By <span>Category</span>
        </h2>
        <a className={styles.viewAll} onClick={u5}>View All &gt;</a>

      </div>
      <div className={styles.categoryCards}>
        <div className={styles.categoryCard}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
            alt="Gaming"
            className={styles.image}
          />
          <span className={styles.arrow}>View all ›</span>
        </div>
      </div>
    </div>
  );
};



export default Shopbycat