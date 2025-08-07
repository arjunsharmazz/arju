// src/components/Checkout.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './css2/Checkout.module.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((sum, item) => sum + item.priceValue * item.quantity, 0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Order Submitted:', formData, cartItems);
    toast.success("Order submitted successfully!");

  };

  const navigate = useNavigate();

  return (
    <div className={styles.checkoutContainer}>
      <h2>Checkout</h2>
      <div className={styles.progress}>
        <span className={styles.step}>Shopping Cart</span>
        <span className={styles.stepActive}>Checkout</span>
        <span className={styles.step}>Order Complete</span>
      </div>
      <div className={styles.contentWrapper}>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Billing Details</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city" 
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <button type="submit" className={styles.placeOrderBtn} onClick={() => navigate('/ordercomplete')}>
            Place Order
          </button>
        </form>


        <div className={styles.summary}>
          <h3>Order Summary</h3>
          {cartItems.map(item => (
            <div key={item.id} className={styles.itemRow}>
              <img src={item.image} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <span>Qty: {item.quantity}</span>
              </div>
              <strong>₹{item.priceValue * item.quantity}</strong>
            </div>
          ))}
          <div className={styles.totalRow}>
            <span>Total:</span>
            <strong>₹{total}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
