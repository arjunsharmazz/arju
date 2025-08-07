import React from 'react';
import styles from './css2/Login.module.css';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg'; 
import pic5 from '../assets/pic5.jpg';
const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSection}>
        <img
          src={pic2}
          alt="Person using phone"
          className={styles.image}
        />
      </div>

      <div className={styles.rightSection}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>Enter your details below</p>

        <form className={styles.form}>
          <input
            type="email"
            placeholder="Email or Phone Number"
            className={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />

          <div className={styles.actions}>
            <button type="submit" className={styles.loginButton}>
              Log In
            </button>
            <a href="/forgot-password" className={styles.forgotLink}>
              Forget Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
