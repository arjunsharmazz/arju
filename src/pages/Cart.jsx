// src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../features/cart/cartSlice';
import styles from './css2/Cart.module.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((sum, item) => sum + item.priceValue * item.quantity, 0);

  return (
    <div className={styles.cartContainer}>

      <div className={styles.progress}>
        <span className={styles.stepActive}>Shopping Cart</span>
        <span className={styles.step}>Checkout</span>
        <span className={styles.step}>Order Complete</span>
      </div>

      <div className={styles.mainContent}>

        <div className={styles.leftSection}>
          <h2>Your Cart ({cartItems.length})</h2>
          {cartItems.length === 0 ? (
            <p className={styles.empty}>Your cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.title} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p>
                    <strong>{item.price}</strong>{' '}
                    <span className={styles.strike}>{item.originalPrice}</span>{' '}
                    <span className={styles.discount}>{item.discount}</span>
                  </p>
                  <p>1x {item.title}</p>

                  <div className={styles.qtyRow}>
                    <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={e =>
                        dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                      }
                    />
                    <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                    <span>₹{item.priceValue * item.quantity}</span>
                  </div>

                  <button onClick={() => dispatch(removeFromCart(item.id))} className={styles.removeBtn}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>


        <div className={styles.summarySection}>
          <div className={styles.summaryBox}>
            <h3>Subtotal: ₹{total.toLocaleString()}</h3>
            <p>Discount: $0.0</p>
            <p>Shipping Costs: ₹{total.toLocaleString()}</p>

            <div className={styles.couponRow}>
              <input type="text" placeholder="Coupon code" />
              <button>Apply Coupon</button>
            </div>

            <button className={styles.checkoutBtn} onClick={() => navigate('/checkout')}>
              Checkout | ₹{total.toLocaleString()}
            </button>

            <div className={styles.paymentLogos}>
              <span>Secure payments provided by</span>
              <div>
                <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="Mastercard" />
                <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
