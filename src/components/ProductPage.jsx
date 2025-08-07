import React, { useState } from 'react';
import styles from './css/ProductPage.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const ProductPage = ({ productdetails }) => {
  const product = {
    ...productdetails,
    images: [
      productdetails.image,
      productdetails.image,
      productdetails.image,
      productdetails.image,
    ],
    rating: 4,
    totalReviews: 150,
  };
//yaha s redux s data aayegi
  const dispatch = useDispatch();




  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.image);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

const cart = () => {
  const cartProduct = {
    ...product,
    quantity
  };
  dispatch(addToCart(cartProduct));
  toast.success("Item added to cart !! ");
};



  return (
    <div className={styles.container}>
    <ToastContainer position="top-right" autoClose={3000} />
      <div className={styles.imageSection}>
        <div
          className={`${styles.imageWrapper} ${isZoomed ? styles.zoomed : ''}`}
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
        >
          <img src={mainImage} alt={product.title} className={styles.productImage} />
        </div>

        <div className={styles.thumbnailRow}>
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className={`${styles.thumbnail} ${mainImage === img ? styles.activeThumbnail : ''}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>


      <div className={styles.detailsSection}>
        <h1 className={styles.title}>{product.title}</h1>


        <div className={styles.reviewSection}>
          <span className={styles.stars}>
            {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
          </span>
          <span className={styles.reviewText}>({product.totalReviews} Reviews)</span>
          <span className={styles.inStock}> | In Stock</span>
        </div>


        <div className={styles.priceContainer}>
          <span className={styles.price}>{product.price}</span>
          <span className={styles.originalPrice}>{product.originalPrice}</span>
          <span className={styles.discount}>{product.discount}</span>
        </div>


        <p className={styles.info}><strong>Type:</strong> {product.type}</p>
        <p className={styles.info}><strong>Usage:</strong> {product.usage}</p>
        <p className={styles.info}><strong>Size:</strong> {product.size}</p>


        <div className={styles.actions}>
          <div className={styles.quantityControl}>
            <button onClick={handleDecrease} className={styles.qtyBtn}>-</button>
            <span className={styles.qty}>{quantity}</span>
            <button onClick={handleIncrease} className={styles.qtyBtn}>+</button>
          </div>
          <button className={styles.addToCart} onClick={cart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
