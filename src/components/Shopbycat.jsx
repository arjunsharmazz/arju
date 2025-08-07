import React, { useContext } from "react";
import styles from "./css/Shopbycat.module.css";
import DataContext, { Under1, Under2, Under3, Under4, Under5 } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Shopbycat = ({setrproductdata}) => {
   const navigate = useNavigate();
  const { data } = useContext(DataContext);
  const laptops = data[0].products;
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


        const electro=() => {
    setrproductdata(laptops);
    navigate("/productdetails");
  }
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
          Shop By <span>Category</span>
        </h2>
        <a className={styles.viewAll} onClick={u5}>View All &gt;</a>

      </div>
    <div className={styles.categoryCards}>
  <div className={styles.categoryCard} onClick={electro}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGpjLP9sAzw3vDeUmhx7CQZxJAn1wUmxLhw&s" alt="Electronics" className={styles.image} />
    <span className={styles.arrow}>View all ›</span>
  </div>

  <div className={styles.categoryCard}  onClick={u1}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYJI6PNwiLfPUQA1wxFAGBrPoE-RU0Kkkug&s" alt="Men" className={styles.image} />
    <span className={styles.arrow}>View all ›</span>
  </div>

  <div className={styles.categoryCard} onClick={u2}>
    <img src="https://www.shutterstock.com/image-photo/full-length-photo-young-asian-600nw-2201967609.jpg" alt="Women" className={styles.image} />
    <span className={styles.arrow}>View all ›</span>
  </div>

  <div className={styles.categoryCard} onClick={u3}>
    <img src="https://cottonking.com/cdn/shop/collections/All_Shirts.jpg?v=1707411161" alt="Shirts" className={styles.image} />
    <span className={styles.arrow}>View all ›</span>
  </div>

  <div className={styles.categoryCard} onClick={u4}>
    <img src="https://tigc.in/cdn/shop/files/compress_0923-fhdnmcrg-39-black__1.jpg?v=1720725541" alt="Saree" className={styles.image} />
    <span className={styles.arrow}>View all ›</span>
  </div>
</div>


    </div>
  );
};



export default Shopbycat