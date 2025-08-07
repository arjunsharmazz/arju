import React, { useState } from "react";
import styles from "./css/Navbar.module.css";
import { FaBars, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };
const cartItems = useSelector(state => state.cart.cartItems);
  return (
    <nav className={styles.navbar}>
      <div className={styles.menuWrapper}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <FaBars className={styles.icon} />
        </div>
        {menuOpen && (
          <div className={styles.dropdownMenu}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>Faq</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>Account</Link>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <FaUserCircle className={styles.linkIcon} /> Login
            </Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              <FaShoppingCart className={styles.linkIcon} /> Cart 
            </Link>
          </div>
        )}
      </div>

      <div className={styles.logo}>
        <span className={styles.logoBold}>E-Commerce</span>
      </div>

      <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        <div className={styles.divider} />
        <Link to="/about">About</Link>
        <div className={styles.divider} />
        <Link to="/login">
          <FaUserCircle className={styles.linkIcon} /> Login
        </Link>
        <div className={styles.divider}/>
        <Link to="/cart">
          <FaShoppingCart className={styles.linkIcon} /> Cart ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
