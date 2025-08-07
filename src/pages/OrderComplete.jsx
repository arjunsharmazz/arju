// src/components/OrderComplete.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './css2/OrderComplete.module.css';
import { useNavigate } from 'react-router-dom';

const OrderComplete = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((sum, item) => sum + item.priceValue * item.quantity, 0);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className={styles.orderWrapper}>
      <h2>Your Order</h2>

      <div className={styles.orderBox}>
        {cartItems.map(item => (
          <div key={item.id} className={styles.itemRow}>
            <img src={item.image} alt={item.title} />
            <div className={styles.itemDetails}>
              <h4>{item.title}</h4>
              <p>1x <strong>₹{item.priceValue}</strong></p>
            </div>
            <p className={styles.itemTotal}>₹{item.priceValue}</p>
          </div>
        ))}

        <div className={styles.subtotalRow}>
          <span>Subtotal</span>
          <strong>₹{total}</strong>
        </div>
      </div>

      <h3 className={styles.totalLabel}>TOTAL <span className={styles.totalUsd}>$497.00</span></h3>

      <div className={styles.detailsGrid}>
        <div>
          <p><strong>Shipping</strong></p>
          <p>Delhi</p>
          <p><strong>Pincode</strong></p>
          <p>000000</p>
          <p><strong>Mobile No</strong></p>
          <p>1234567890</p>
          <p><strong>Order ID</strong></p>
          <p>87654323</p>
        </div>
        <div className={styles.prices}>
          <p><strong>Subtotal</strong></p>
          <p>₹{total}</p>
          <p><strong>Discount</strong></p>
          <p>₹0.00</p>
          <p><strong>Shipping Costs</strong></p>
          <p>₹0.00</p>
          <p><strong>TOTAL</strong></p>
          <p className={styles.totalAmount}>₹{total}</p>
        </div>
      </div>

      <div className={styles.statusPaid}>
        Paid
      </div>

      <button onClick={handleContinueShopping} className={styles.continueBtn}>
        CONTINUE SHOPPING
      </button>
    </div>
  );
};

export default OrderComplete;
