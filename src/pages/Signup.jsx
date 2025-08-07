import React from "react";
import styles from "./css2/Signup.module.css";
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg'; 
import pic5 from '../assets/pic5.jpg';
const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src={pic2} alt="Signup Visual" className={styles.image} />
      </div>
      <div className={styles.formSection}>
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button type="submit" className={styles.createBtn}>Create Account</button>
        </form>
        <button className={styles.googleBtn}>
          <img src="/google-icon.svg" alt="Google icon" /> Sign up with Google
        </button>
        <p>
          Already have account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
