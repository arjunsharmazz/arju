    import React from "react";
import styles from "./css/ProductCard.module.css";

const ProductCard = ({ product, order }) => {
  return (
    <div className={styles.card} onClick={order(product)}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h4 className={styles.title}>{product.title}</h4>
      <p className={styles.priceTag}>{product.price}</p>
      <p className={styles.originalPrice}>{product.originalPrice}</p>

      {product.discount && (
        <span className={styles.discountBadge}>{product.discount}</span>
      )}

      <div className={styles.rating}>⭐⭐⭐⭐☆</div>
    </div>
  );
};

export default ProductCard;
