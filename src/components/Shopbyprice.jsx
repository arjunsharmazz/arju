// PriceFilter.jsx
import React, { useContext } from "react";
import styles from "./css/Shopbyprice.module.css";
import { Under1, Under2, Under3, Under4, Under5 } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Shopbyprice = ({setrproductdata}) => {
  const navigate = useNavigate();
    //   //
    const { data4 } = useContext(Under1);
      const under1= data4[0].products;
      //
    const { data5 } = useContext(Under2);
      const under2= data5[0].products;
      //
    const { data6 } = useContext(Under3);
      const under3= data6[0].products;
      //
    const { data7 } = useContext(Under4);
      const under4= data7[0].products;
      //
    const { data8 } = useContext(Under5);
      const under5= data8[0].products;


        const u1=() => {
    setrproductdata(under1);
    navigate("/productdetails");
  }
  const u2=() => {
    setrproductdata(under2);
    navigate("/productdetails");
  }
  const u3=() => {
    setrproductdata(under3);
    navigate("/productdetails");
  }
  const u4=() => {
    setrproductdata(under4);
    navigate("/productdetails");
  }
  const u5=() => {
    setrproductdata(under5);
    navigate("/productdetails");
  }
  return (
    <div className={styles.priceSection}>
      <div className={styles.header}>
        <h2>
          Shop By <span>Price</span>
        </h2>
      <a className={styles.viewAll} onClick={u5}>View All &gt;</a>

      </div>
      <div className={styles.priceCards}>
        <div className={styles.card} onClick={u1}>Under<br />₹1,000</div>
        <div className={styles.card} onClick={u2}>Under<br />₹4,999</div>
        <div className={styles.card} onClick={u3}>Under<br />₹9,000</div>
        <div className={styles.card} onClick={u4}>Under<br />₹19,999</div>
        <div className={styles.card} onClick={u5}>Under<br />₹20000+</div>
      </div>
    </div>
  );
};



export default Shopbyprice;
